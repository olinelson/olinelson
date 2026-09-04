import type { APIRoute } from 'astro'
import { generateOpenGraphImage } from 'astro-og-canvas'

// The consulting page's own share card. Without it the page previews as the
// app-build offer, which is the opposite of what it sells.
export const GET: APIRoute = async () =>
  new Response(
    await generateOpenGraphImage({
      title: 'Oli Nelson — I help fix businesses',
      description: 'Day-rate work inside the business. The process, the software, or both.',
      logo: { path: './src/assets/images/profile.jpg', size: [128] },
      bgGradient: [
        [35, 35, 35],
        [35, 35, 35],
      ],
      border: { color: [242, 242, 242], width: 14, side: 'inline-start' },
      padding: 70,
      font: {
        title: { color: [255, 255, 255], weight: 'SemiBold', size: 68, lineHeight: 1.15 },
        description: { color: [166, 166, 166], size: 30, lineHeight: 1.4 },
      },
    }),
    { headers: { 'Content-Type': 'image/png' } },
  )
