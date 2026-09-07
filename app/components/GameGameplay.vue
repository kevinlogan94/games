<script setup>
const props = defineProps({
  title: { type: String, required: true },
  slides: { type: Array, required: true }
})

const index = ref(0)

const slide = computed(() => props.slides[index.value] || { title: '', description: '', image: '' })

function prev() {
  if (!props.slides.length) {
    return
  }
  index.value = (index.value - 1 + props.slides.length) % props.slides.length
}

function next() {
  if (!props.slides.length) {
    return
  }
  index.value = (index.value + 1) % props.slides.length
}

function go(i) {
  index.value = i
}

function onKey(event) {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prev()
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    next()
  }
}
</script>

<template>
  <section
    id="gameplay"
    class="scroll-mt-[4.75rem] bg-bam-panel px-4 py-20 text-bam-ink min-[768px]:py-28"
  >
    <div class="mx-auto max-w-5xl">
      <h2 class="font-display mb-8 text-base leading-relaxed min-[768px]:text-lg">
        {{ title }}
      </h2>
      <div
        class="border-2 border-bam-line bg-bam-ground"
        role="region"
        aria-roledescription="carousel"
        :aria-label="title"
        tabindex="0"
        @keydown="onKey"
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
              @click="prev"
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
              @click="next"
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
            v-for="(item, i) in slides"
            :key="item.title || i"
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center"
            :aria-label="`Show ${item.title}`"
            :aria-current="i === index ? 'true' : undefined"
            @click="go(i)"
          >
            <span
              class="block h-2.5 w-2.5 border border-bam-line"
              :class="i === index ? 'bg-[var(--catalog-accent)]' : 'bg-transparent'"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
