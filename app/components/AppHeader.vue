<script setup>
defineProps({
  title: { type: String, required: true },
  playUrl: { type: String, required: true },
  portfolioUrl: { type: String, required: true }
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#3d5c3d] bg-[#0d1a0d]/95 backdrop-blur-sm">
    <nav class="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 text-sm text-white">
      <a
        href="#"
        class="font-display shrink-0 text-[10px] leading-tight tracking-tight text-white sm:text-xs"
      >
        {{ title }}
      </a>
      <div class="ms-auto flex items-center gap-3 sm:gap-4">
        <a href="#story" class="text-white/80 hover:text-white">Story</a>
        <a href="#gameplay" class="text-white/80 hover:text-white">Gameplay</a>
        <a href="#play" class="text-white/80 hover:text-white">Play</a>
        <a
          :href="playUrl"
          class="font-display hidden border-2 border-[#3d5c3d] bg-[#1a2e1a] px-3 py-1.5 text-[10px] text-white hover:bg-[#3d5c3d] sm:inline-block"
        >
          Play
        </a>
        <a
          :href="portfolioUrl"
          class="text-xs text-white/50 hover:text-white/80"
        >
          Kevin Logan
        </a>
      </div>
    </nav>
  </header>
</template>
