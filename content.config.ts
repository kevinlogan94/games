import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const slide = z.object({
  code: z.string(),
  kicker: z.string(),
  title: z.string(),
  summary: z.string(),
  description: z.string(),
  image: z.string()
})

const review = z.object({
  title: z.string(),
  quote: z.string(),
  author: z.string(),
  meta: z.string(),
  stars: z.number(),
  tag: z.string(),
  accent: z.string()
})

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
        release: z.object({
          version: z.string(),
          scale: z.enum(['major', 'patch']),
          line: z.string(),
          note: z.string(),
          badge: z.string().optional()
        }),
        hero: z.object({
          title: z.string(),
          subtitle: z.string(),
          pitch: z.string(),
          badge: z.string(),
          proofRating: z.string(),
          proofQuote: z.string(),
          primaryCta: z.string(),
          secondaryCta: z.string(),
          mobileHint: z.string(),
          trailer: z.object({
            status: z.enum(['placeholder', 'ready']),
            url: z.string().optional(),
            caption: z.string()
          })
        }),
        story: z.object({
          kicker: z.string(),
          title: z.string(),
          body: z.string(),
          quote: z.string(),
          media: z.string(),
          mediaAlt: z.string().optional(),
          frameTitle: z.string(),
          frameCaption: z.string(),
          stats: z.array(z.object({
            value: z.string(),
            label: z.string()
          }))
        }),
        gameplay: z.object({
          kicker: z.string(),
          title: z.string(),
          body: z.string(),
          slides: z.array(slide)
        }),
        reviews: z.object({
          kicker: z.string(),
          title: z.string(),
          body: z.string(),
          items: z.array(review)
        }),
        play: z.object({
          title: z.string(),
          body: z.string(),
          primaryCta: z.string(),
          soundtrackLabel: z.string(),
          soundtrackUrl: z.string(),
          hint: z.string()
        }),
        nav: z.object({
          play: z.string(),
          lore: z.string(),
          mechanics: z.string(),
          acclaim: z.string(),
          soundtrack: z.string()
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
