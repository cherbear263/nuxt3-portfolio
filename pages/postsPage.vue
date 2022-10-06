<template>
  <div class="ml-80 mt-20">
    <h1>Blog Posts</h1>
    <div class="container mx-auto pt-8">
      <ul class="list-disc">
        <li v-for="post in posts" :key="post.id">{{post.title}}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const { posts } = await $fetch('/api/posts');

</script>
