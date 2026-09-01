import type { APIRoute } from 'astro'
import { generateOpenGraphImage } from 'astro-og-canvas'

// Branded 1200x630 share card for the homepage / default OG image, so link
// previews read as intentional instead of a bare square headshot.
export const GET: APIRoute = async () =>
  new Response(
    await generateOpenGraphImage({
      title: 'Oli Nelson — Software for small businesses',
      description:
        'A one-off fee to get live, then keep the lights on or keep building.',
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
