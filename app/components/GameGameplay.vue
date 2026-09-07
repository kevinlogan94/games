<script setup>
const props = defineProps({
  title: { type: String, required: true },
  slides: { type: Array, required: true }
})

const index = ref(0)

const slide = computed(() => props.slides[index.value] || { title: '', description: '', image: '' })

function prev() {
  index.value = (index.value - 1 + props.slides.length) % props.slides.length
}

function next() {
  index.value = (index.value + 1) % props.slides.length
}
</script>

<template>
  <section id="gameplay" class="bg-[#1a2e1a] px-4 py-20 text-white">
    <div class="mx-auto max-w-5xl">
      <h2 class="font-display mb-8 text-lg sm:text-xl">
        {{ title }}
      </h2>
      <div class="border-2 border-[#3d5c3d] bg-[#0d1a0d]">
        <div
          class="aspect-video bg-[#0d1a0d] bg-cover bg-center"
          :style="{ backgroundImage: slide.image ? `url(${slide.image})` : undefined }"
          :aria-label="slide.title"
        />
        <div class="flex items-start justify-between gap-4 p-4">
          <div>
            <h3 class="font-display text-xs">
              {{ slide.title }}
            </h3>
            <p class="mt-2 text-sm text-white/80">
              {{ slide.description }}
            </p>
          </div>
          <div class="flex shrink-0 gap-2">
            <button
              type="button"
              class="border border-[#3d5c3d] px-3 py-1 text-sm hover:bg-[#3d5c3d]"
              aria-label="Previous slide"
              @click="prev"
            >
              ←
            </button>
            <button
              type="button"
              class="border border-[#3d5c3d] px-3 py-1 text-sm hover:bg-[#3d5c3d]"
              aria-label="Next slide"
              @click="next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
