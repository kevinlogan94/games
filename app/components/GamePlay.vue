<script setup>
defineProps({
  title: { type: String, required: true },
  body: { type: String, required: true },
  desktopHint: { type: String, required: true },
  mobileHint: { type: String, required: true },
  playUrl: { type: String, required: true },
  soundtrackUrl: { type: String, required: true },
  repoUrl: { type: String, required: true }
})
</script>

<template>
  <section
    id="play"
    class="scroll-mt-[4.75rem] border-t border-bam-line bg-bam-ground px-4 py-20 text-bam-ink min-[768px]:py-28"
  >
    <div class="mx-auto max-w-5xl">
      <h2 class="font-display mb-5 text-base leading-relaxed min-[768px]:text-lg">
        {{ title }}
      </h2>
      <p class="mb-8 max-w-[38rem] text-base leading-relaxed text-bam-mist">
        {{ body }}
      </p>
      <a
        :href="playUrl"
        class="catalog-play"
      >
        Play
      </a>
      <p class="mt-4 hidden max-w-xl text-sm leading-relaxed text-bam-mist min-[768px]:block">
        {{ desktopHint }}
      </p>
      <p class="mt-4 max-w-xl text-sm leading-relaxed text-bam-mist min-[768px]:hidden">
        {{ mobileHint }}
      </p>
      <div class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-bam-line pt-8">
        <a
          :href="soundtrackUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-display inline-block border-2 border-bam-line px-4 py-2 text-[0.625rem] leading-relaxed text-bam-ink hover:bg-bam-panel"
        >
          Soundtrack
        </a>
        <a
          :href="repoUrl"
          class="text-sm text-bam-mist underline decoration-bam-line underline-offset-4 hover:text-bam-ink"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>
