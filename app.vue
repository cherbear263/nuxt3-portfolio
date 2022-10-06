<template>
  <div>
    <the-header />
    <the-sidebar />
    <NuxtPage />
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: rgb(51 65 85);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
<script>
</script>