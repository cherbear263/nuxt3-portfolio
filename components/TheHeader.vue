<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0 });
}

</script>
<template>
  <nav class="fixed inset-x-0 top-0 z-10 h-16 bg-gray-900 ">
    <div class="flex items-center justify-between max-w-screen-xl py-5 mx-9 xl:mx-auto">
      <a class="font-semibold text-white uppercase cursor-pointer" @click="scrollToTop">Cheryl Jones</a>
      <ul class="flex gap-4">
        <a href="/#skills" class="text-white hover:text-blue-500">Skills</a>
        <a href="/#work" class="text-white hover:text-blue-500">Work</a>
        <a href="/#contact" class="text-white hover:text-blue-500">Contact</a>
      </ul>
    </div>
  </nav>
</template>