<script setup>
const config = useAppConfig()
const colorMode = useColorMode()

const { data: game } = await useAsyncData('featured-game', () =>
  queryCollection('games').where('slug', '=', config.featuredSlug).first()
)

if (!game.value) {
  throw createError({ statusCode: 404, statusMessage: 'Featured game not found' })
}

colorMode.preference = game.value.theme.colorMode

useSeoMeta({
  title: game.value.seo.title,
  description: game.value.seo.description,
  ogTitle: game.value.seo.title,
  ogDescription: game.value.seo.description,
  ogImage: game.value.hero.background
})

const themeStyle = {
  '--catalog-primary': game.value.theme.primary,
  '--catalog-accent': game.value.theme.accent,
  '--font-display': `'${game.value.theme.font}', cursive`,
  backgroundColor: game.value.theme.primary,
  color: '#fff'
}
</script>

<template>
  <div class="min-h-dvh" :style="themeStyle">
    <AppHeader
      :title="game.hero.title"
      :play-url="game.playUrl"
      :portfolio-url="config.portfolio"
    />
    <GameHero
      :title="game.hero.title"
      :subtitle="game.hero.subtitle"
      :pitch="game.hero.pitch"
      :play-url="game.playUrl"
      :background="game.hero.background"
      :trailer-status="game.hero.trailer.status"
      :mobile-hint="game.play.mobileHint"
    />
    <GameStory
      :title="game.story.title"
      :body="game.story.body"
      :media="game.story.media"
    />
    <GameGameplay
      :title="game.gameplay.title"
      :slides="game.gameplay.slides"
    />
    <GamePlay
      :title="game.play.title"
      :body="game.play.body"
      :desktop-hint="game.play.desktopHint"
      :mobile-hint="game.play.mobileHint"
      :play-url="game.playUrl"
      :soundtrack-url="game.play.soundtrackUrl"
      :repo-url="game.repoUrl"
    />
    <AppFooter
      :email="config.email"
      :github="config.github"
      :portfolio="config.portfolio"
    />
  </div>
</template>
