import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    games: defineCollection({
      type: 'data',
      source: 'games/**.{yml,yaml}',
      schema: z.object({
        slug: z.string(),
        seo: z.object({
          title: z.string(),
          description: z.string()
        }),
        playUrl: z.string(),
        repoUrl: z.string(),
        hero: z.object({
          title: z.string(),
          subtitle: z.string(),
          pitch: z.string(),
          trailer: z.object({
            status: z.enum(['placeholder', 'ready']),
            url: z.string().optional()
          }),
          background: z.string()
        }),
        story: z.object({
          title: z.string(),
          body: z.string(),
          media: z.string(),
          mediaAlt: z.string().optional()
        }),
        gameplay: z.object({
          title: z.string(),
          slides: z.array(z.object({
            title: z.string(),
            description: z.string(),
            image: z.string()
          }))
        }),
        play: z.object({
          title: z.string(),
          body: z.string(),
          desktopHint: z.string(),
          mobileHint: z.string(),
          soundtrackUrl: z.string()
        }),
        theme: z.object({
          primary: z.string(),
          accent: z.string(),
          font: z.string(),
          colorMode: z.string()
        })
      })
    })
  }
})
