<script setup>
defineProps({
  title: { type: String, required: true },
  body: { type: String, required: true },
  media: { type: String, required: true }
})
</script>

<template>
  <section
    id="story"
    class="relative bg-[#0d1a0d] bg-cover bg-center"
    :style="{ backgroundImage: `url(${media})` }"
  >
    <div class="absolute inset-0 bg-[#0d1a0d]/80" />
    <div class="relative mx-auto max-w-5xl px-4 py-20 text-white">
      <h2 class="font-display mb-6 text-lg sm:text-xl">
        {{ title }}
      </h2>
      <p class="max-w-2xl text-base leading-relaxed text-white/90">
        {{ body }}
      </p>
    </div>
  </section>
</template>
