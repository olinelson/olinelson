"""Turn a generated watercolour boat into a page plate.

Run:  python3 scripts/prep-boats.py

The page multiplies these onto a cream ground, so white has to be truly white or
it paints a visible box. Generators rarely oblige: they lay a soft grey
atmosphere over the paper, sometimes graded top to bottom. So each file is
flat-fielded, trimmed, then composed onto a shared canvas with its waterline
pinned, which is what makes three separate paintings read as one fleet.

Not part of the build. Edit SOURCES and re-run when new boats arrive.
"""
from PIL import Image, ImageFilter

OUT = 'src/assets/images/boats'
W, H, WATERLINE = 680, 940, 545
WATERMARK, EDGE, INK = 62, 6, 236

# path, scale, nudge — nudge shifts the boat down in canvas pixels. The detector
# reads the darkest wide row, which on a black-hulled ship is its topsides
# rather than the waterline, so that one needs correcting by eye.
SOURCES = {
    'small':  ('~/Downloads/rowboat.jpg', 0.60, 60),
    'medium': ('~/Downloads/sloop.jpg', 0.685, 31),
    'large':  ('~/Downloads/liner.jpg', 0.80, -54),
}


def flatten(im, cell=32, bg_min=205, cap=1.32):
    """Divide out a smooth background field so a graded paper lifts to white.

    Estimated only from pixels bright enough to BE background; cells the subject
    covers are filled from their neighbours. The boat never enters the estimate,
    so it cannot pull a halo around itself.
    """
    w, h = im.size
    lum = im.convert('L').load()
    gw, gh = (w + cell - 1) // cell, (h + cell - 1) // cell
    grid = [[None] * gw for _ in range(gh)]
    for gy in range(gh):
        for gx in range(gw):
            xs = range(gx * cell, min(w, (gx + 1) * cell), 3)
            ys = range(gy * cell, min(h, (gy + 1) * cell), 3)
            vals = sorted(lum[x, y] for y in ys for x in xs if lum[x, y] >= bg_min)
            if len(vals) >= max(4, len(xs) * len(ys) * 0.25):
                grid[gy][gx] = vals[len(vals) // 2]

    for _ in range(max(gw, gh)):
        if all(c is not None for row in grid for c in row):
            break
        nxt = [row[:] for row in grid]
        for gy in range(gh):
            for gx in range(gw):
                if grid[gy][gx] is not None:
                    continue
                nb = [grid[y][x]
                      for y, x in ((gy-1, gx), (gy+1, gx), (gy, gx-1), (gy, gx+1),
                                   (gy-1, gx-1), (gy-1, gx+1), (gy+1, gx-1), (gy+1, gx+1))
                      if 0 <= y < gh and 0 <= x < gw and grid[y][x] is not None]
                if nb:
                    nxt[gy][gx] = sum(nb) / len(nb)
        grid = nxt

    field = Image.new('L', (gw, gh))
    field.putdata([max(1, min(255, round(c))) for row in grid for c in row])
    field = field.filter(ImageFilter.BoxBlur(1)).resize((w, h), Image.BICUBIC).load()

    out = im.copy()
    p = out.load()
    for y in range(h):
        for x in range(w):
            k = min(cap, 255 / max(1, field[x, y]))
            r, g, b = p[x, y]
            p[x, y] = (min(255, round(r * k)), min(255, round(g * k)), min(255, round(b * k)))
    return out


def content_box(im):
    g = im.convert('L')
    w, h = im.size
    p = g.load()
    col = lambda x: any(p[x, y] < INK for y in range(0, h, 2))
    row = lambda y: any(p[x, y] < INK for x in range(0, w, 2))
    x0 = next(x for x in range(w) if col(x))
    x1 = next(x for x in range(w - 1, -1, -1) if col(x))
    y0 = next(y for y in range(h) if row(y))
    y1 = next(y for y in range(h - 1, -1, -1) if row(y))
    return x0, y0, x1 + 1, y1 + 1


def waterline(im):
    """The wettest row: a hull meeting its reflection is the darkest, widest band."""
    g = im.convert('L')
    w, h = im.size
    p = g.load()
    best, best_y = -1, h // 2
    for y in range(int(h * 0.25), int(h * 0.85)):
        ink = sum(1 for x in range(0, w, 2) if p[x, y] < 215)
        if ink > best:
            best, best_y = ink, y
    return best_y


if __name__ == '__main__':
    import os
    for name, (path, scale, nudge) in SOURCES.items():
        im = Image.open(os.path.expanduser(path)).convert('RGB')
        w, h = im.size
        im = flatten(im.crop((EDGE, EDGE, w - EDGE, h - WATERMARK)))
        im = im.crop(content_box(im))
        wl = waterline(im)
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
        canvas = Image.new('RGB', (W, H), (255, 255, 255))
        canvas.paste(im, ((W - im.width) // 2, WATERLINE - round(wl * scale) + nudge))
        canvas.save(f'{OUT}/{name}.jpg', quality=88, optimize=True)
        print(f'{name:7} {im.width}x{im.height}  nudge {nudge:+d}')
