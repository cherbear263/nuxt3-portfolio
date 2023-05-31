<script setup>
import { refDebounced } from '@vueuse/core'
const query = ref('')
refDebounced(query, 1000)
const { data, pending, error } = await useFetch(() => `/api/projects?q=${query.value}`)

const projects = data;
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
    <h1 class="mb-20 text-5xl text-white">Some of my work</h1>
    <div class="p-4 mt-3 font-semibold text-red-500 bg-red-200 rounded" v-if="error">
      <div class="relative flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="absolute top-0 left-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />

        </svg>
        <p class="ml-8">Oops! There is an error</p>
        <p>{{ error.message }}</p>
      </div>
    </div>
    <div class="p-4 mt-3 font-semibold text-gray-500 bg-gray-200 rounded" v-if="pending">
      <div class="relative inline">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="inline w-10 ml-8">Loading...</p>
      </div>


    </div>
    <!--
    <div class="flex flex-col gap-2 p-4 mt-5 mb-20 bg-gray-800 border-2 border-indigo-500 rounded-lg lg:flex-row">
      <div>
        <h3 class="text-xl font-semibold text-cyan-400">Portfolio Search</h3>
        <h3 class="text-lg text-white text-semibold">For example, you could try keywords like: like <span
            class="text-indigo-500 cursor-pointer" @click="query='tailwind'">Tailwind</span> or <span
            class="text-indigo-500 cursor-pointer" @click="query='python'">Python</span> or <span
            class="text-indigo-500 cursor-pointer" @click="query='nuxt'">Nuxt</span></h3>
      </div>
      <form class="w-full mt-5 lg:w-1/2">
        <div class="relative font-normal text-gray-700">
          <input type="text" id="search" placeholder="Search" v-model="query"
            class="block w-full px-4 py-2 bg-gray-200 border-2 border-indigo-500 border-solid rounded-lg form-control bg-clip-padding" />
        </div>
      </form>

    </div>
-->
    <div class="mt-5 ">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div v-for="project in projects" :key="project.title" :class="color(colors)"
          class="flex flex-col items-center justify-center transition-all rounded-md p-14 hover:scale-105">
          <a :href="project.projectLink">
            <h3 class="text-2xl font-bold text-center text-white md:text-lg lg:text-3xl">{{ project.heading }}</h3>
          </a>
          <ul class="mt-3 text-gray-800 list-disc">
            <li v-for="feature in project.features" :key="feature" class="">{{ feature }}</li>
          </ul>

        </div>


      </div>
    </div>
    <button-contact section='contact' />
  </section>
</template>
<style scoped>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}

.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}

.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}

.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}

.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}

.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}

.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}

.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}

.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}

.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>