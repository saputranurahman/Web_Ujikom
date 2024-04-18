<template>
  <header class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
    <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
      <span class="mr-2 w-8">
        <img src="" alt="" />
      </span>
      MindfullMoment
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
      <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
    <nav aria-label="Header Navigation"
      class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
      <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
        <li class="lg:mr-12"><a
            class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            href="/home">Home</a></li>
        <li class="lg:mr-12"><a
            class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            href="/latihan">Latihan</a></li>
        <li class="lg:mr-12"><a
            class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            href="#">Musik</a></li>
        <li class="lg:mr-12"><a
            class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
            href="#">Saran</a></li>
      </ul>
      <hr class="mt-4 w-full lg:hidden" />

      <button @click="confirmLogout"
        class="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </nav>
  </header>
</template>

<script>
import Swal from 'sweetalert2'; // Import SweetAlert2 library
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('auth', ['logout']), // Map action 'logout' from auth module

    // Method to confirm logout
    confirmLogout() {
      Swal.fire({
        title: "Apakah Anda Yakin?",
        text: "Anda Akan Segera Keluar.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout"
      }).then((result) => {
        if (result.isConfirmed) {
          this.logout(); // Call logout action if user confirms
        }
      });
    }
  }
}
</script>
  