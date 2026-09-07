<script setup>
defineProps({
  title: { type: String, required: true },
  playUrl: { type: String, required: true },
  portfolioUrl: { type: String, required: true }
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-bam-line bg-bam-ground">
    <nav class="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 text-sm text-bam-ink">
      <a
        href="/"
        class="font-display me-auto shrink-0 text-[0.625rem] leading-snug text-bam-ink min-[768px]:text-xs"
      >
        {{ title }}
      </a>
      <div class="order-last flex w-full items-center gap-4 text-bam-mist min-[768px]:order-none min-[768px]:w-auto">
        <a href="#story" class="hover:text-bam-ink">Story</a>
        <a href="#gameplay" class="hover:text-bam-ink">Gameplay</a>
        <a href="#play" class="hover:text-bam-ink">Play</a>
      </div>
      <a
        :href="playUrl"
        class="catalog-play catalog-play--nav"
      >
        Play
      </a>
      <a
        :href="portfolioUrl"
        class="hidden text-xs text-bam-mist/80 hover:text-bam-mist min-[768px]:inline"
      >
        Kevin Logan
      </a>
    </nav>
  </header>
</template>
