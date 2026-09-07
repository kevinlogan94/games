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

const year = new Date().getFullYear()
const slideIndex = ref(0)
const slide = computed(() => game.value.gameplay.slides[slideIndex.value] || { title: '', description: '', image: '' })

function prevSlide() {
  const slides = game.value.gameplay.slides
  if (!slides.length) {
    return
  }
  slideIndex.value = (slideIndex.value - 1 + slides.length) % slides.length
}

function nextSlide() {
  const slides = game.value.gameplay.slides
  if (!slides.length) {
    return
  }
  slideIndex.value = (slideIndex.value + 1) % slides.length
}

function goSlide(i) {
  slideIndex.value = i
}

function onCarouselKey(event) {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prevSlide()
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextSlide()
  }
}
</script>

<template>
  <div class="min-h-dvh" :style="themeStyle">
    <header class="sticky top-0 z-50 border-b border-bam-line bg-bam-ground">
      <nav class="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 text-sm text-bam-ink">
        <a
          href="/"
          class="font-display me-auto shrink-0 text-[0.625rem] leading-snug text-bam-ink min-[768px]:text-xs"
        >
          {{ game.hero.title }}
        </a>
        <div class="order-last flex w-full items-center gap-4 text-bam-mist min-[768px]:order-none min-[768px]:w-auto">
          <a href="#story" class="hover:text-bam-ink">Story</a>
          <a href="#gameplay" class="hover:text-bam-ink">Gameplay</a>
          <a href="#play" class="hover:text-bam-ink">Play</a>
        </div>
        <a
          :href="game.playUrl"
          class="catalog-play catalog-play--nav"
        >
          Play
        </a>
        <a
          :href="config.portfolio"
          class="hidden text-xs text-bam-mist/80 hover:text-bam-mist min-[768px]:inline"
        >
          Kevin Logan
        </a>
      </nav>
    </header>

    <section class="relative min-h-[calc(100dvh-4.75rem)] bg-bam-ground">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat min-[768px]:bg-[center_top]"
        :style="{ backgroundImage: game.hero.background ? `url(${game.hero.background})` : undefined }"
        role="img"
        :aria-label="game.hero.title"
      />
      <div class="catalog-hero-shade absolute inset-0" />
      <div class="catalog-hero-veil absolute inset-0" />
      <div class="relative mx-auto flex min-h-[calc(100dvh-4.75rem)] max-w-5xl flex-col justify-end gap-10 px-4 pb-12 pt-16 min-[768px]:flex-row min-[768px]:items-end min-[768px]:justify-between">
        <div class="catalog-hero-copy max-w-xl text-bam-ink">
          <h1 class="font-display text-[1.35rem] leading-[1.9] min-[768px]:text-[2rem] min-[768px]:leading-[1.85]">
            {{ game.hero.title }}
          </h1>
          <p class="font-display mt-4 text-[0.625rem] leading-relaxed text-[var(--catalog-accent)] min-[768px]:text-xs">
            {{ game.hero.subtitle }}
          </p>
          <p class="mt-5 max-w-[38rem] text-base leading-relaxed text-bam-mist">
            {{ game.hero.pitch }}
          </p>
          <div class="mt-7">
            <a
              :href="game.playUrl"
              class="catalog-play"
            >
              Play
            </a>
            <p class="mt-3 max-w-sm text-sm leading-relaxed text-bam-mist min-[768px]:hidden">
              {{ game.play.mobileHint }}
            </p>
          </div>
        </div>
        <aside
          v-if="game.hero.trailer.status === 'placeholder'"
          class="w-full max-w-sm border-2 border-bam-line bg-bam-panel/90 p-3"
        >
          <div
            class="aspect-video border border-bam-line bg-bam-ground bg-cover bg-center"
            :style="{ backgroundImage: game.hero.background ? `url(${game.hero.background})` : undefined }"
          />
          <p class="mt-3 text-sm text-bam-mist">
            Trailer coming soon
          </p>
        </aside>
      </div>
    </section>

    <section
      id="story"
      class="scroll-mt-[4.75rem] bg-bam-ground px-4 py-20 text-bam-ink min-[768px]:py-28"
    >
      <div class="mx-auto grid max-w-5xl items-center gap-10 min-[768px]:grid-cols-[minmax(0,16rem)_1fr] min-[768px]:gap-14">
        <div class="border-2 border-bam-line bg-bam-panel p-2">
          <img
            v-if="game.story.media"
            :src="game.story.media"
            :alt="game.story.mediaAlt"
            class="mx-auto w-full max-w-xs object-contain object-center"
            width="500"
            height="750"
          >
          <div
            v-else
            class="aspect-[345/375] bg-bam-ground"
            aria-hidden="true"
          />
        </div>
        <div>
          <h2 class="font-display mb-5 text-base leading-relaxed min-[768px]:text-lg">
            {{ game.story.title }}
          </h2>
          <p class="max-w-[38rem] text-base leading-[1.7] text-bam-mist">
            {{ game.story.body }}
          </p>
        </div>
      </div>
    </section>

    <section
      id="gameplay"
      class="scroll-mt-[4.75rem] bg-bam-panel px-4 py-20 text-bam-ink min-[768px]:py-28"
    >
      <div class="mx-auto max-w-5xl">
        <h2 class="font-display mb-8 text-base leading-relaxed min-[768px]:text-lg">
          {{ game.gameplay.title }}
        </h2>
        <div
          class="border-2 border-bam-line bg-bam-ground"
          role="region"
          aria-roledescription="carousel"
          :aria-label="game.gameplay.title"
          tabindex="0"
          @keydown="onCarouselKey"
        >
          <div class="flex min-h-[16rem] items-center justify-center bg-bam-ground min-[768px]:min-h-[22rem]">
            <img
              v-if="slide.image"
              :src="slide.image"
              :alt="slide.title"
              class="max-h-[22rem] w-full object-contain"
              width="400"
              height="520"
            >
            <div
              v-else
              class="min-h-[16rem] w-full bg-bam-ground"
              aria-hidden="true"
            />
          </div>
          <div class="flex flex-col gap-4 border-t border-bam-line p-4 min-[768px]:flex-row min-[768px]:items-start min-[768px]:justify-between">
            <div aria-live="polite">
              <h3 class="font-display text-xs leading-relaxed">
                {{ slide.title }}
              </h3>
              <p class="mt-2 max-w-xl text-sm leading-relaxed text-bam-mist">
                {{ slide.description }}
              </p>
            </div>
            <div class="flex shrink-0 items-center gap-2">
              <button
                type="button"
                class="inline-flex h-11 min-w-11 items-center justify-center border border-bam-line text-bam-ink hover:bg-bam-line"
                aria-label="Previous slide"
                @click="prevSlide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 3L5 8l5 5"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex h-11 min-w-11 items-center justify-center border border-bam-line text-bam-ink hover:bg-bam-line"
                aria-label="Next slide"
                @click="nextSlide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 border-t border-bam-line px-4 py-3">
            <button
              v-for="(item, i) in game.gameplay.slides"
              :key="item.title || i"
              type="button"
              class="inline-flex h-11 w-11 items-center justify-center"
              :aria-label="`Show ${item.title}`"
              :aria-current="i === slideIndex ? 'true' : undefined"
              @click="goSlide(i)"
            >
              <span
                class="block h-2.5 w-2.5 border border-bam-line"
                :class="i === slideIndex ? 'bg-[var(--catalog-accent)]' : 'bg-transparent'"
              />
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      id="play"
      class="scroll-mt-[4.75rem] border-t border-bam-line bg-bam-ground px-4 py-20 text-bam-ink min-[768px]:py-28"
    >
      <div class="mx-auto max-w-5xl">
        <h2 class="font-display mb-5 text-base leading-relaxed min-[768px]:text-lg">
          {{ game.play.title }}
        </h2>
        <p class="mb-8 max-w-[38rem] text-base leading-relaxed text-bam-mist">
          {{ game.play.body }}
        </p>
        <a
          :href="game.playUrl"
          class="catalog-play"
        >
          Play
        </a>
        <p class="mt-4 hidden max-w-xl text-sm leading-relaxed text-bam-mist min-[768px]:block">
          {{ game.play.desktopHint }}
        </p>
        <p class="mt-4 max-w-xl text-sm leading-relaxed text-bam-mist min-[768px]:hidden">
          {{ game.play.mobileHint }}
        </p>
        <div class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-bam-line pt-8">
          <a
            :href="game.play.soundtrackUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-display inline-block border-2 border-bam-line px-4 py-2 text-[0.625rem] leading-relaxed text-bam-ink hover:bg-bam-panel"
          >
            Soundtrack
          </a>
          <a
            :href="game.repoUrl"
            class="text-sm text-bam-mist underline decoration-bam-line underline-offset-4 hover:text-bam-ink"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

    <footer class="border-t border-bam-line bg-bam-panel px-4 py-10 text-sm text-bam-mist">
      <div class="mx-auto flex max-w-5xl flex-col gap-4 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between">
        <p>© {{ year }} Kevin Logan</p>
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <a
            :href="`mailto:${config.email}`"
            class="text-bam-ink underline decoration-bam-line underline-offset-4 hover:text-[var(--catalog-accent)]"
          >
            Contact
          </a>
          <a
            :href="config.github"
            class="hover:text-bam-ink"
          >
            GitHub
          </a>
          <a
            :href="config.portfolio"
            class="hover:text-bam-ink"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
