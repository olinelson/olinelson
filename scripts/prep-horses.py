"""Slice a generated 2x2 sheet of watercolour horses into four page plates.

Run:  python3 scripts/prep-horses.py

Same treatment as the boats: flat-field to true white, trim, then compose each
horse onto a shared canvas with its hooves pinned to one ground line so the
four read as one field. Edit SHEET and re-run when a new sheet arrives.
"""
import importlib.util
import os

from PIL import Image

spec = importlib.util.spec_from_file_location('boats', os.path.join(os.path.dirname(__file__), 'prep-boats.py'))
boats = importlib.util.module_from_spec(spec)
spec.loader.exec_module(boats)

OUT = 'src/assets/images/jockeys'
SHEET = '~/Downloads/Gemini_Generated_Image_tu0loatu0loatu0l.jpeg'
W, H, GROUND = 680, 460, 396
SCALE = 1.1
HOOF = 110
INK = 236
SCENES = ['feeding', 'leading', 'riding', 'racing']
FLIP = {'racing'}


def gap(im, axis):
    """The cleanest seam near the middle, so a flying tail on one side of the
    sheet does not land in its neighbour's crop."""
    g = im.convert('L')
    w, h = im.size
    p = g.load()
    n = w if axis == 0 else h
    lo, hi = int(n * 0.42), int(n * 0.58)
    ink = lambda i: sum(1 for j in range(0, (h if axis == 0 else w), 2)
                        if (p[i, j] if axis == 0 else p[j, i]) < INK)
    return min(range(lo, hi), key=lambda i: (ink(i), abs(i - n // 2)))


def ground(im):
    """Lowest row of hoof, not of the blue reflection wash beneath it."""
    w, h = im.size
    p = im.load()
    hoof = lambda x, y: sum(p[x, y]) < HOOF * 3 and p[x, y][2] - p[x, y][0] < 20
    for y in range(h - 1, -1, -1):
        if sum(1 for x in range(0, w, 2) if hoof(x, y)) >= 3:
            return y
    return h


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    sheet = Image.open(os.path.expanduser(SHEET)).convert('RGB')
    sw, sh = sheet.size
    gx, gy = gap(sheet, 0), gap(sheet, 1)
    xs, ys = (0, gx, sw), (0, gy, sh)
    for i, name in enumerate(SCENES):
        col, row = i % 2, i // 2
        im = sheet.crop((xs[col], ys[row], xs[col + 1], ys[row + 1]))
        if name in FLIP:
            im = im.transpose(Image.FLIP_LEFT_RIGHT)
        im = boats.flatten(im)
        im = im.crop(boats.content_box(im))
        gy = ground(im)
        im = im.resize((round(im.width * SCALE), round(im.height * SCALE)), Image.LANCZOS)
        canvas = Image.new('RGB', (W, H), (255, 255, 255))
        canvas.paste(im, ((W - im.width) // 2, GROUND - round(gy * SCALE)))
        canvas.save(f'{OUT}/{name}.jpg', quality=88, optimize=True)
        print(f'{name:10} {im.width}x{im.height}  ground {gy}')
