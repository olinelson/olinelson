import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const posts = await getCollection('blog', ({ data }) => data.public !== false)
const pages = Object.fromEntries(posts.map((p) => [p.id, p.data]))

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_id, page: (typeof pages)[string]) => ({
    title: page.title,
    description: page.preview,
    logo: { path: './src/assets/images/profile.jpg', size: [72] },
    bgGradient: [
      [35, 35, 35],
      [35, 35, 35],
    ],
    border: { color: [242, 242, 242], width: 14, side: 'inline-start' },
    padding: 70,
    font: {
      title: { color: [255, 255, 255], weight: 'SemiBold', size: 62, lineHeight: 1.15 },
      description: { color: [166, 166, 166], size: 28, lineHeight: 1.4 },
    },
  }),
})
