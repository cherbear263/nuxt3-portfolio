<template>
  <section id="contact" class=" section">
    <h1 class="mb-3 text-5xl text-white">Contact me</h1>
    <p class="text-lg text-gray-300">Hey, I would love to hear from you! Drop me a message below and I'll get back soon.
    </p>
    <form name="form-name" value="website contact form" class="w-full max-w-md mt-10" method="post" data-netlify="true"
      autocomplete="off" action="/">
      <div class="mb-4">
        <input
          class="w-full px-3 py-2 leading-tight text-indigo-500 bg-gray-800 border-2 border-indigo-500 rounded-lg appearance-none focus:border-3 focus:border-cyan-500 focus:outline-none focus:bg-cyan-100 focus:text-indigo-800 focus:font-semibold"
          name="name" type="text" id="name" v-model="formValues.name" placeholder="name" />
      </div>
      <div class="mb-4">
        <input
          class="w-full px-3 py-2 leading-tight text-indigo-500 bg-gray-800 border-2 border-indigo-500 rounded-lg appearance-none focus:border-3 focus:border-cyan-500 focus:outline-none focus:bg-cyan-100 focus:text-indigo-800 focus:font-semibold"
          name="email" type="email" id="email" v-model="formValues.email" placeholder="email" />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="message">Your Message:</label>
        <textarea
          class="w-full px-3 py-2 leading-tight text-indigo-500 bg-gray-800 border-2 border-indigo-500 rounded-lg appearance-none focus:border-3 focus:border-cyan-500 focus:outline-none focus:bg-cyan-100 focus:text-indigo-800 focus:font-semibold"
          type="textarea" name="message" id="message" rows="6" v-model="formValues.message"></textarea>
      </div>
      <div class="relative button">
        <input type="submit" :value="sent ? 'sent!' : 'send'" :disabled="sent" :class="sent ? sentClass : ''"
          class="w-full py-3 text-gray-300 uppercase transition-all bg-indigo-500 rounded-lg cursor-pointer btn hover:bg-cyan-500" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="absolute left-0 w-6 h-6 transition-all duration-700 top-3" :class="animate">
          <path stroke-linecap='round' stroke-linejoin="round"
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