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
  <section
    class="relative min-h-[70vh] bg-[#0d1a0d] bg-cover bg-center"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="absolute inset-0 bg-[#0d1a0d]/70" />
    <div class="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 text-white">
      <h1 class="font-display text-2xl leading-relaxed sm:text-4xl">
        {{ title }}
      </h1>
      <p class="font-display text-xs text-[var(--catalog-accent)] sm:text-sm">
        {{ subtitle }}
      </p>
      <p class="max-w-xl text-base text-white/90">
        {{ pitch }}
      </p>
      <div>
        <a
          :href="playUrl"
          class="font-display inline-block border-2 border-[#3d5c3d] bg-[#1a2e1a] px-6 py-3 text-xs text-white hover:bg-[#3d5c3d]"
        >
          Play
        </a>
        <p class="mt-3 text-sm text-white/70 min-[768px]:hidden">
          {{ mobileHint }}
        </p>
      </div>
      <div
        v-if="trailerStatus === 'placeholder'"
        class="mt-4 max-w-md border border-[#3d5c3d] bg-[#1a2e1a]/80 p-6"
      >
        <div
          class="mb-3 aspect-video bg-cover bg-center"
          :style="{ backgroundImage: `url(${background})` }"
        />
        <p class="text-sm text-white/70">
          Trailer coming soon
        </p>
      </div>
    </div>
  </section>
</template>
