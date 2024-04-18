<template>
  <div class="mx-auto flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10">
    <div
      class="max-w-md rounded-3xl bg-gradient-to-t from-blue-700 via-blue-700 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
      <a href="/" class="flex items-center mb-20">
        <svg class="h-6 w-6 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <p class="font-bold tracking-wider">MINDFULL MOMENT</p>
      </a>

      <p class="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
        Start your <br />
        journey with us
      </p>
      <p class="mb-28 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        nisi voluptas a officia. Omnis.</p>
      <div class="bg-blue-600/80 rounded-2xl px-4 py-8">
        <p class="mb-3 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea voluptates
          sapiente!</p>
      </div>
    </div>
    <form action="" @submit.prevent="performsignup">
      <div class="px-4 py-20">
        <h2 class="mb-2 text-3xl font-bold">Daftar</h2>

        <div class="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
          <div
            class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700"
            style="background-color: white;">
          </div>
          <div
            class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700"
            style="background-color: white;">
          </div>
        </div>
        <p class="mb-1 font-medium text-gray-500">Nama Lengkap</p>
        <div class="mb-4 flex flex-col">
          <div
            class="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
            <input type="text" id="signup-password"
              class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              v-model="name" 
              placeholder="Masukan nama anda" />
          </div>
        </div>
        <p class="mb-1 font-medium text-gray-500">Email</p>
        <div class="mb-4 flex flex-col">
          <div
            class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
            <input type="email" id="signup-email"
              class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              v-model="email"
              placeholder="Masukan email anda" />
          </div>
        </div>
        <p class="mb-1 font-medium text-gray-500">Password</p>
        <div class="mb-4 flex flex-col">
          <div
            class="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
            <input type="password" id="signup-password"
              class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              v-model="password"
              placeholder="Pilih password" />
          </div>
        </div>
        <p class="mb-1 font-medium text-gray-500">Konfirmasi Password</p>
        <div class="mb-4 flex flex-col">
          <div
            class="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
            <input type="password" id="signup-password"
              class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Pilih password" />
          </div>
        </div>
        <p class="mb-3 block font-bold text-gray-600">sudah punya akun? <a href="/login"
            class="font-bold text-blue-600 no-underline hover:text-blue-400">Login</a></p>
        <button
          class=" hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg " type="submit">Login</button>
      </div>
    </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confrim_password: '',
      role: 'member',
    };
  },
  methods: {
    ...mapActions('auth', ['signup']),
    async performsignup() {
      const credentials = {
        name: this.name,
        email: this.email,
        password: this.password,
        confrim_password: this.confrim_password,
        role: 'member',

      };

      const success = await this.signup(credentials);

      if (success) {
        // Redirect to the desired route on successful login
        this.$router.push('/login');
      } else {
        alert("signup Failed");
      }
    },
  },
};
</script>