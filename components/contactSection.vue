<template>
  <section id="contact" class=" section">
    <h1 class="text-5xl text-white mb-3">Contact me</h1>
    <p class="text-gray-300 text-lg">Hey, I would love to hear from you! Drop me a message below and I'll get back soon.
    </p>
    <form class="w-full max-w-md mt-10" @submit.prevent="sendMail" autocomplete="off">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="name">Name:</label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none "
          name="name" type="text" id="name" v-model="formValues.name" />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="email">Email:</label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none "
          name="email" type="email" id="email" v-model="formValues.email" />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="message">Message</label>
        <textarea
          class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none "
          type="textarea" name="message" id="message" rows="6" v-model="formValues.message"></textarea>
      </div>
      <div class="button relative">
        <input type="submit" :value="sent? 'sent!' : 'send'" :disabled="sent" :class="sent? sentClass : ''"
          class="btn cursor-pointer py-3 w-full hover:bg-indigo-600 transition-all bg-indigo-500 rounded-lg" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 absolute left-0 top-3 transition-all duration-700" :class="animate">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </div>


    </form>
  </section>
</template>
<script>
export default {
  emits: ['submit'],

  name: 'contactPage',
  data() {
    return {
      sent: false,
      sentClass: 'disabled bg-gray-400 hover:bg-gray-400 cursor-not-allowed',
      animate: 'opacity-0',
      formValues: {
        name: '',
        email: '',
        message: ''

      }
    }
  },
  methods: {

    sendMail() {
      // connect 3rd party app for sending mail
      if (this.formValues.email && this.formValues.message) {
        this.sent = true
        this.animate = 'opacity-100 translate-x-72 ease-in-out transition 2s'
        console.log('form values ', this.formValues)
        // clear form
        this.formValues.name = ''
        this.formValues.email = ''
        this.formValues.message = ''

        // emit sent message
        this.$emit('submit', 'form submitted')
      } else {
        console.warn('invalid submit event payload')
        return false
      }
    }
  }


}


</script>