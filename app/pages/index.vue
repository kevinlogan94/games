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
  ogDescription: game.value.seo.description
})

const year = new Date().getFullYear()
const slideIndex = ref(0)
const slides = computed(() => game.value.gameplay.slides)
const slide = computed(() => slides.value[slideIndex.value] || slides.value[0])
const canvasRef = ref(null)
let sporeFrame = 0
let onSporeResize = null

function goSlide(i) {
  slideIndex.value = i
}

function prevSlide() {
  slideIndex.value = (slideIndex.value - 1 + slides.value.length) % slides.value.length
}

function nextSlide() {
  slideIndex.value = (slideIndex.value + 1) % slides.value.length
}

function focusSlideTab() {
  nextTick(() => document.getElementById(`gameplay-tab-${slideIndex.value}`)?.focus())
}

function onCarouselKey(event) {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prevSlide()
    focusSlideTab()
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextSlide()
    focusSlideTab()
  }
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }
  const ctx = canvas.getContext('2d')
  const particles = []

  onSporeResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  onSporeResize()
  window.addEventListener('resize', onSporeResize)

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.2 + 0.8,
      vy: -(Math.random() * 0.45 + 0.15),
      vx: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.55 + 0.15,
      color: Math.random() > 0.45 ? '52, 211, 153' : '251, 191, 36'
    })
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const p of particles) {
      p.y += p.vy
      p.x += p.vx
      if (p.y < -10) {
        p.y = canvas.height + 10
        p.x = Math.random() * canvas.width
      }
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
      ctx.fill()
    }
    sporeFrame = requestAnimationFrame(draw)
  }
  draw()
})

onUnmounted(() => {
  cancelAnimationFrame(sporeFrame)
  if (onSporeResize) {
    window.removeEventListener('resize', onSporeResize)
  }
})
</script>

<template>
  <div class="min-h-dvh overflow-x-hidden bg-[#09060a] font-sans text-stone-200">
    <canvas
      ref="canvasRef"
      class="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />

    <header class="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav class="flex flex-nowrap items-center gap-4 rounded-full border border-amber-500/25 bg-[#120d14]/85 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:gap-6 lg:gap-8 lg:px-6">
        <a href="/" class="font-display shrink-0 whitespace-nowrap text-sm font-bold tracking-widest text-amber-300 transition-colors hover:text-white">
          XAL'S PATH
        </a>
        <div class="hidden items-center gap-5 text-xs uppercase tracking-widest text-stone-400 lg:flex lg:gap-6">
          <a href="#story" class="shrink-0 whitespace-nowrap hover:text-amber-300">{{ game.nav.lore }}</a>
          <a href="#gameplay" class="shrink-0 whitespace-nowrap hover:text-amber-300">{{ game.nav.mechanics }}</a>
          <a href="#reviews" class="shrink-0 whitespace-nowrap hover:text-amber-300">{{ game.nav.acclaim }}</a>
          <a href="#soundtrack" class="shrink-0 whitespace-nowrap hover:text-amber-300">{{ game.nav.soundtrack }}</a>
          <a :href="config.portfolio" target="_blank" rel="noopener noreferrer" class="shrink-0 whitespace-nowrap hover:text-amber-300">Creator</a>
        </div>
        <a
          :href="game.playUrl"
          class="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-stone-950 shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:bg-amber-300"
        >
          <span>{{ game.nav.play }}</span>
          <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        </a>
      </nav>
    </header>

    <main class="relative z-10">
      <section class="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden border-b border-stone-800/70 px-6 pb-24 pt-32 text-center">
        <div class="eclipse-halo pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-amber-600/20 via-emerald-600/15 to-purple-900/20 blur-[90px] sm:h-[640px] sm:w-[640px]" />
        <div class="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/20 sm:h-[460px] sm:w-[460px]" />
        <div class="relative z-10 mx-auto max-w-4xl">
          <h1 class="font-display mb-6 text-[clamp(3rem,8vw,6rem)] font-black tracking-[0.05em] text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            {{ game.hero.title }}
          </h1>
          <p class="font-serif mb-5 text-3xl text-amber-200/90 italic sm:text-4xl">
            {{ game.hero.subtitle }}
          </p>
          <p class="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
            {{ game.hero.pitch }}
          </p>
          <div class="mb-9">
            <a href="#reviews" class="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-xs text-amber-200 hover:border-amber-400/50">
              <span class="tracking-widest text-amber-400">★★★★★</span>
              <span class="font-semibold">{{ game.hero.proofRating }}</span>
              <span class="hidden text-stone-500 sm:inline">•</span>
              <span class="italic text-stone-300">{{ game.hero.proofQuote }}</span>
            </a>
          </div>
          <div class="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              :href="game.playUrl"
              class="inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-400 px-9 py-4 text-base font-bold tracking-wider text-stone-950 uppercase shadow-[0_0_35px_rgba(52,211,153,0.35)] hover:bg-emerald-300 sm:w-auto"
            >
              <span>{{ game.hero.primaryCta }}</span>
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </a>
            <a
              href="#gameplay"
              class="inline-flex w-full items-center justify-center rounded-full border border-stone-700 bg-stone-900/80 px-8 py-4 text-sm font-semibold tracking-widest text-stone-200 uppercase hover:border-amber-400/50 hover:text-white sm:w-auto"
            >
              {{ game.hero.secondaryCta }}
            </a>
          </div>
          <div class="inline-flex items-center gap-3 rounded-xl border border-stone-800 bg-[#120d14]/90 px-4 py-2.5 text-xs text-stone-400 shadow-lg">
            <span class="rounded border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-400 uppercase">Pro Tip</span>
            <span>{{ game.hero.mobileHint }}</span>
          </div>
        </div>
      </section>

      <section id="story" class="mx-auto max-w-6xl scroll-mt-28 px-6 py-28">
        <div class="grid items-center gap-12 md:grid-cols-12">
          <div class="flex justify-center md:col-span-5">
            <div class="relative rounded-t-full rounded-b-2xl bg-gradient-to-b from-amber-400/50 via-emerald-500/30 to-stone-800 p-1 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
              <div class="rounded-t-full rounded-b-xl bg-[#0e0a10] px-6 pt-12 pb-6 text-center">
                <img
                  v-if="game.story.media"
                  :src="game.story.media"
                  :alt="game.story.mediaAlt"
                  width="500"
                  height="750"
                  class="pixelated mx-auto mb-4 w-60 rounded-lg"
                >
                <div class="font-display text-sm tracking-widest text-amber-300 uppercase">{{ game.story.frameTitle }}</div>
                <div class="mt-1 font-mono text-[11px] text-emerald-400">● {{ game.story.frameCaption }}</div>
              </div>
            </div>
          </div>
          <div class="space-y-6 md:col-span-7">
            <h2 class="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.15] font-bold text-white">
              {{ game.story.title }}
            </h2>
            <p class="text-lg leading-relaxed text-stone-300">
              {{ game.story.body }}
            </p>
            <blockquote class="border-l-2 border-emerald-500 py-1 pl-5 font-serif text-xl text-stone-300 italic sm:text-2xl">
              “{{ game.story.quote }}”
            </blockquote>
            <div class="grid grid-cols-3 gap-4 border-t border-stone-800/80 pt-6">
              <div v-for="(stat, i) in game.story.stats" :key="stat.label">
                <div
                  class="font-serif text-2xl font-bold sm:text-3xl"
                  :class="i === 1 ? 'text-emerald-400' : i === 2 ? 'text-amber-400' : 'text-white'"
                >
                  {{ stat.value }}
                </div>
                <div class="mt-0.5 text-xs text-stone-400">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gameplay" class="scroll-mt-28 border-y border-stone-800/80 bg-[#0d090f]/90 px-6 py-28">
        <div class="mx-auto max-w-6xl">
          <div class="mx-auto mb-16 max-w-2xl text-center">
            <div class="mb-2 font-mono text-xs tracking-[0.2em] text-emerald-400 uppercase">{{ game.gameplay.kicker }}</div>
            <h2 class="font-serif mb-4 text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white">{{ game.gameplay.title }}</h2>
            <p class="text-stone-400">{{ game.gameplay.body }}</p>
          </div>
          <div class="grid items-center gap-10 lg:grid-cols-12" role="region" :aria-label="game.gameplay.title" @keydown="onCarouselKey">
            <div class="space-y-3 lg:col-span-5" role="tablist" aria-label="Mechanics">
              <button
                v-for="(item, i) in slides"
                :id="`gameplay-tab-${i}`"
                :key="item.title"
                type="button"
                role="tab"
                class="chronicle-item block w-full cursor-pointer rounded-r-xl border-l-4 py-4 pl-5 text-left text-stone-400 transition-all hover:text-stone-200"
                :class="{ 'is-active': i === slideIndex }"
                :aria-selected="i === slideIndex"
                :tabindex="i === slideIndex ? 0 : -1"
                aria-controls="gameplay-panel"
                @click="goSlide(i)"
              >
                <div class="font-mono text-xs tracking-widest uppercase" :class="i % 2 ? 'text-emerald-400/80' : 'text-amber-400/80'">
                  {{ item.code }} // {{ item.kicker }}
                </div>
                <div class="font-serif mt-0.5 text-2xl font-bold">{{ item.title }}</div>
                <p class="mt-1 text-sm text-stone-400">{{ item.summary }}</p>
              </button>
            </div>
            <div id="gameplay-panel" class="lg:col-span-7" role="tabpanel" :aria-labelledby="`gameplay-tab-${slideIndex}`">
              <div class="space-y-6 rounded-2xl border border-amber-500/25 bg-[#09060a] p-6 shadow-2xl sm:p-8">
                <div class="flex justify-center rounded-xl border border-stone-800/80 bg-[#050306] p-4">
                  <img
                    v-if="slide.image"
                    :src="slide.image"
                    :alt="slide.title"
                    class="pixelated max-h-[340px] w-full rounded-lg object-contain"
                  >
                </div>
                <div class="space-y-2" aria-live="polite">
                  <div class="font-mono text-xs uppercase" :class="slideIndex % 2 ? 'text-amber-400' : 'text-emerald-400'">
                    Slide {{ slide.code }} / 04 • {{ slide.kicker }}
                  </div>
                  <h3 class="font-serif text-3xl font-bold text-white">{{ slide.title }}</h3>
                  <p class="text-base leading-relaxed text-stone-300">{{ slide.description }}</p>
                </div>
                <div class="flex items-center justify-between border-t border-stone-800 pt-4 font-mono text-xs text-stone-400">
                  <button type="button" class="min-h-11 cursor-pointer px-1 hover:text-amber-300" @click="prevSlide">← Prev</button>
                  <span>PHASER 3 ENGINE</span>
                  <button type="button" class="min-h-11 cursor-pointer px-1 font-bold text-amber-400 hover:underline" @click="nextSlide">
                    {{ slideIndex === slides.length - 1 ? 'Restart ↻' : 'Next Slide →' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" class="scroll-mt-28 overflow-hidden py-28">
        <div class="mx-auto mb-14 max-w-6xl px-6 text-center">
          <div class="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-mono text-xs tracking-widest text-amber-400 uppercase">
            <span>{{ game.reviews.kicker }}</span>
          </div>
          <h2 class="font-serif mb-4 text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white">{{ game.reviews.title }}</h2>
          <p class="mx-auto max-w-2xl text-stone-400">{{ game.reviews.body }}</p>
        </div>
        <div class="relative">
          <div class="marquee-track gap-6 px-6">
            <article
              v-for="(item, i) in [...game.reviews.items, ...game.reviews.items]"
              :key="`${item.author}-${i}`"
              class="flex w-[360px] shrink-0 flex-col justify-between rounded-2xl border bg-[#110c14]/95 p-6 shadow-xl"
              :class="`review-card--${item.accent}`"
              :aria-hidden="i >= game.reviews.items.length"
            >
              <div>
                <div class="mb-4 flex items-center justify-between">
                  <span class="text-sm tracking-widest text-amber-400">
                    <span>{{ '★'.repeat(item.stars) }}</span><span v-if="item.stars < 5" class="text-stone-700">{{ '★'.repeat(5 - item.stars) }}</span>
                  </span>
                  <span class="rounded border px-2.5 py-0.5 font-mono text-[10px] uppercase" :class="`review-tag--${item.accent}`">{{ item.tag }}</span>
                </div>
                <h3 class="font-serif mb-2 text-2xl font-bold text-white">“{{ item.title }}”</h3>
                <p class="mb-6 text-sm leading-relaxed text-stone-300">“{{ item.quote }}”</p>
              </div>
              <div class="flex items-center justify-between border-t border-stone-800/80 pt-4 font-mono text-xs text-stone-500">
                <span class="font-medium text-stone-300">{{ item.author }}</span>
                <span>{{ item.meta }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="soundtrack" class="mx-auto max-w-5xl scroll-mt-28 px-6 py-24 text-center">
        <div class="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#16101b] to-[#09060a] p-10 shadow-2xl sm:p-16">
          <div class="mb-6 flex h-8 items-end justify-center gap-1.5" aria-hidden="true">
            <div v-for="delay in [0.1, 0.3, 0, 0.4, 0.2, 0.5, 0.15]" :key="delay" class="eq-bar" :style="{ animationDelay: `${delay}s` }" />
          </div>
          <h2 class="font-serif mb-4 text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-white">{{ game.play.title }}</h2>
          <p class="mx-auto mb-8 max-w-xl text-base text-stone-300 sm:text-lg">{{ game.play.body }}</p>
          <div class="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              :href="game.playUrl"
              class="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-9 py-4 text-sm font-bold tracking-wider text-stone-950 uppercase shadow-[0_0_30px_rgba(251,191,36,0.35)] hover:bg-amber-300 sm:w-auto"
            >
              {{ game.play.primaryCta }}
            </a>
            <a
              :href="game.play.soundtrackUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-stone-700 bg-stone-900 px-8 py-4 text-sm font-semibold text-stone-200 hover:border-emerald-400 hover:text-emerald-300 sm:w-auto"
            >
              <svg class="h-5 w-5 fill-current text-red-500" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>{{ game.play.soundtrackLabel }}</span>
            </a>
          </div>
          <p class="text-xs text-stone-500">{{ game.play.hint }}</p>
        </div>
      </section>
    </main>

    <footer class="relative z-10 border-t border-stone-900 bg-[#060407] px-6 py-12 text-sm text-stone-500">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p class="font-medium text-stone-300">© {{ year }} Kevin Logan</p>
          <p class="mt-1 text-xs text-stone-500">{{ game.release.note }} • {{ game.release.line }}</p>
        </div>
        <div class="flex items-center gap-6 text-stone-400">
          <a :href="`mailto:${config.email}`" class="hover:text-amber-300">Contact</a>
          <a :href="config.github" target="_blank" rel="noopener noreferrer" class="hover:text-amber-300">GitHub</a>
          <a :href="config.portfolio" target="_blank" rel="noopener noreferrer" class="hover:text-amber-300">Portfolio</a>
        </div>
      </div>
    </footer>
  </div>
</template>
