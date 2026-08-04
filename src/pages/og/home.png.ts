import type { APIRoute } from 'astro'
import { generateOpenGraphImage } from 'astro-og-canvas'

// Branded 1200x630 share card for the homepage / default OG image, so link
// previews read as intentional instead of a bare square headshot.
export const GET: APIRoute = async () =>
  new Response(
    await generateOpenGraphImage({
      title: 'Oli Nelson — AI for more money, less wasted time',
      description:
        'I use AI to help businesses make more money and save time. Find the bottleneck, build the simplest fix, keep it running. First consult free.',
      logo: { path: './src/assets/images/profile.jpg', size: [128] },
      bgGradient: [
        [30, 27, 24],
        [38, 34, 30],
      ],
      border: { color: [116, 116, 210], width: 14, side: 'inline-start' },
      padding: 70,
      font: {
        title: { color: [247, 244, 240], weight: 'SemiBold', size: 68, lineHeight: 1.15 },
        description: { color: [180, 170, 165], size: 30, lineHeight: 1.4 },
      },
    }),
    { headers: { 'Content-Type': 'image/png' } },
  )
