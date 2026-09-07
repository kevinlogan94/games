<script setup>
defineProps({
  email: { type: String, required: true },
  github: { type: String, required: true },
  portfolio: { type: String, required: true }
})

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-[#3d5c3d] bg-[#0d1a0d] px-4 py-8 text-sm text-white/80">
    <div class="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ year }} Kevin Logan</p>
      <div class="flex flex-wrap gap-4">
        <a :href="`mailto:${email}`" class="text-white hover:underline">
          Contact
        </a>
        <a :href="github" class="hover:text-white hover:underline">GitHub</a>
        <a :href="portfolio" class="hover:text-white hover:underline">Portfolio</a>
      </div>
    </div>
  </footer>
</template>
