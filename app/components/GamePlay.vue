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
  <section id="play" class="bg-[#0d1a0d] px-4 py-20 text-white">
    <div class="mx-auto max-w-5xl">
      <h2 class="font-display mb-4 text-lg sm:text-xl">
        {{ title }}
      </h2>
      <p class="mb-6 max-w-xl text-base text-white/90">
        {{ body }}
      </p>
      <a
        :href="playUrl"
        class="font-display inline-block border-2 border-[#3d5c3d] bg-[#1a2e1a] px-6 py-3 text-xs text-white hover:bg-[#3d5c3d]"
      >
        Play
      </a>
      <p class="mt-4 hidden text-sm text-white/70 min-[768px]:block">
        {{ desktopHint }}
      </p>
      <p class="mt-4 text-sm text-white/70 min-[768px]:hidden">
        {{ mobileHint }}
      </p>
      <div class="mt-8">
        <a
          :href="soundtrackUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="font-display inline-block border-2 border-[#3d5c3d] px-4 py-2 text-[10px] text-white hover:bg-[#1a2e1a]"
        >
          Soundtrack
        </a>
      </div>
      <p class="mt-6 text-xs">
        <a :href="repoUrl" class="text-white/50 underline hover:text-white/80">
          GitHub
        </a>
      </p>
    </div>
  </section>
</template>
