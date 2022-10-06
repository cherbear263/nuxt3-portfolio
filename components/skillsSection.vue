<script setup>
const techSkills = ['version control (git)', 'analytical skills', 'data flow and wireframing', 'testing and debugging', 'API integration', 'responsive design']
</script>

<template>
  <section id="skills" class="">
    <h1 class="text-5xl text-white">Skills</h1>
    <div class="justify-between block mt-8 md:flex md:gap-8">
      <div class="w-3/4">
        <h3 class="mt-4 text-lg tracking-wide text-indigo-500 uppercase font-nunito">
          Technical Skills
        </h3>
        <ul class="">
          <transition-group name="list" tag="ul">
            <li v-for="skill in techSkills" :key="skill" class="mt-1 text-gray-100">
              {{ skill }}
            </li>
          </transition-group>
        </ul>
      </div>
      <div class="w-full">
        <h2 class="mt-4 text-lg tracking-wide text-indigo-500 uppercase font-nunito">
          Languages and Frameworks
        </h2>
        <ul class="">
          <li class="mt-1 text-gray-100">Python</li>
          <li class="mt-1 text-gray-100">HTML</li>
          <li class="mt-1 text-gray-100">CSS</li>
          <li class="mt-1 text-gray-100">Javascript</li>
          <li class="mt-1 text-gray-100">Flask</li>
          <li class="mt-1 text-gray-100">Django</li>
          <li class="mt-1 text-gray-100">Vue</li>
          <li class="mt-1 text-gray-100">Tailwind CSS</li>
          <li class="mt-1 text-gray-100">Nuxt</li>
        </ul>
      </div>
    </div>
    <button-contact section='work' />
  </section>
</template>
<style>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>