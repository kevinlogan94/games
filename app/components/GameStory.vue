<script setup>
defineProps({
  title: { type: String, required: true },
  body: { type: String, required: true },
  media: { type: String, required: true },
  mediaAlt: { type: String, default: '' }
})
</script>

<template>
  <section
    id="story"
    class="scroll-mt-[4.75rem] bg-bam-ground px-4 py-20 text-bam-ink min-[768px]:py-28"
  >
    <div class="mx-auto grid max-w-5xl items-center gap-10 min-[768px]:grid-cols-[minmax(0,16rem)_1fr] min-[768px]:gap-14">
      <div class="border-2 border-bam-line bg-bam-panel p-2">
        <img
          v-if="media"
          :src="media"
          :alt="mediaAlt"
          class="mx-auto w-full max-w-xs object-contain"
          width="345"
          height="375"
        >
        <div
          v-else
          class="aspect-[345/375] bg-bam-ground"
          aria-hidden="true"
        />
      </div>
      <div>
        <h2 class="font-display mb-5 text-base leading-relaxed min-[768px]:text-lg">
          {{ title }}
        </h2>
        <p class="max-w-[38rem] text-base leading-[1.7] text-bam-mist">
          {{ body }}
        </p>
      </div>
    </div>
  </section>
</template>
