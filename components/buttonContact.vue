<script setup>
const props = defineProps(['section'])

</script>
<template>
  <div class="flex items-center gap-9 mt-14">
    <a href="/#contact" class="btn py-3 px-4 hover:bg-indigo-600 bg-indigo-500 rounded-lg">Contact me</a>
    <a :href="`#${props.section}`"
      class="relative text-center text-indigo-500 bg-transparent border-2 border-indigo-500 rounded-full hover:bg-indigo-700 hover:border-transparent h-14 w-14">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 absolute top-4 left-3 animate-bounce end hover:text-bg-gray-800">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>

      <i class="mt-5 text-indigo-500 animate-bounce end hover:text-bg-gray-800">
      </i>
    </a>
  </div>

</template>