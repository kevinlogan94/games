<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  pitch: { type: String, required: true },
  playUrl: { type: String, required: true },
  background: { type: String, required: true },
  trailerStatus: { type: String, required: true },
  mobileHint: { type: String, required: true }
})
</script>

<template>
  <section class="relative min-h-[calc(100dvh-4.75rem)] bg-bam-ground">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat min-[768px]:bg-[center_top]"
      :style="{ backgroundImage: background ? `url(${background})` : undefined }"
      role="img"
      :aria-label="title"
    />
    <div class="catalog-hero-shade absolute inset-0" />
    <div class="catalog-hero-veil absolute inset-0" />
    <div class="relative mx-auto flex min-h-[calc(100dvh-4.75rem)] max-w-5xl flex-col justify-end gap-10 px-4 pb-12 pt-16 min-[768px]:flex-row min-[768px]:items-end min-[768px]:justify-between">
      <div class="catalog-hero-copy max-w-xl text-bam-ink">
        <h1 class="font-display text-[1.35rem] leading-[1.9] min-[768px]:text-[2rem] min-[768px]:leading-[1.85]">
          {{ title }}
        </h1>
        <p class="font-display mt-4 text-[0.625rem] leading-relaxed text-[var(--catalog-accent)] min-[768px]:text-xs">
          {{ subtitle }}
        </p>
        <p class="mt-5 max-w-[38rem] text-base leading-relaxed text-bam-mist">
          {{ pitch }}
        </p>
        <div class="mt-7">
          <a
            :href="playUrl"
            class="catalog-play"
          >
            Play
          </a>
          <p class="mt-3 max-w-sm text-sm leading-relaxed text-bam-mist min-[768px]:hidden">
            {{ mobileHint }}
          </p>
        </div>
      </div>
      <aside
        v-if="trailerStatus === 'placeholder'"
        class="w-full max-w-sm border-2 border-bam-line bg-bam-panel/90 p-3"
      >
        <div
          class="aspect-video border border-bam-line bg-bam-ground bg-cover bg-center"
          :style="{ backgroundImage: background ? `url(${background})` : undefined }"
        />
        <p class="mt-3 text-sm text-bam-mist">
          Trailer coming soon
        </p>
      </aside>
    </div>
  </section>
</template>
