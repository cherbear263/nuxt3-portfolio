<script setup>
import work from '../data/work.json'
const projects = work;
const colors = [
  'bg-indigo-500',
  'bg-cyan-500',
  'bg-purple-500',
  'bg-blue-500',
  'bg-fuchsia-500'
]

const color = (colors) => {
  const max = colors.length
  const randomIndex = Math.random()
  const index = Math.floor(randomIndex * max)
  return colors[index]
}

</script>
<template>
  <section id="work">
    <h1 class="text-white text-5xl">Some of my work</h1>
    <div class="p-4 mt-5">
      <div class="grid grid-cols-1 lg:grid-cols-2  gap-3 lg:gap-5">
        <div v-for="project in projects" :key="project.title" :class="color(colors)"
          class="p-14  rounded-md flex flex-col items-center justify-center hover:scale-105 transition-all cursor-pointer">
          <h3 class="text-white font-bold text-2xl md:text-lg lg:text-3xl text-center">{{project.heading}}</h3>
          <ul class="list-disc mt-3 text-gray-800">
            <li v-for="feature in project.features" :key="feature" class="">{{feature}}</li>
          </ul>

        </div>


      </div>
    </div>
    <button-contact section='contact' />
  </section>

</template>