<template>
  <div class="absolute top- right-0 w-full sm:w-3/4 min-h-screen bg-gray-800">
    <main class="sm:ml-20 mx-5 max-w-3xl">
      <intro-section class="pb-40" />
      <skills-section class="py-40" />
      <work-section class="py-40" />
      <contact-section v-if="showContact" @submit="showThanks" class="py-40" />
      <thanks-page v-else class="py-40" />

    </main>

  </div>
</template>
<script>
export default {
  data() {
    return {
      showContact: true,
    }
  },
  methods: {
    showThanks() {
      this.showContact = false

    }
  },
  transition: 'fade',
}
</script>