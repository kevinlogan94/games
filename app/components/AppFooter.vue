<script setup>
defineProps({
  email: { type: String, required: true },
  github: { type: String, required: true },
  portfolio: { type: String, required: true }
})

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-bam-line bg-bam-panel px-4 py-10 text-sm text-bam-mist">
    <div class="mx-auto flex max-w-5xl flex-col gap-4 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between">
      <p>© {{ year }} Kevin Logan</p>
      <div class="flex flex-wrap gap-x-5 gap-y-2">
        <a
          :href="`mailto:${email}`"
          class="text-bam-ink underline decoration-bam-line underline-offset-4 hover:text-[var(--catalog-accent)]"
        >
          Contact
        </a>
        <a
          :href="github"
          class="hover:text-bam-ink"
        >
          GitHub
        </a>
        <a
          :href="portfolio"
          class="hover:text-bam-ink"
        >
          Portfolio
        </a>
      </div>
    </div>
  </footer>
</template>
