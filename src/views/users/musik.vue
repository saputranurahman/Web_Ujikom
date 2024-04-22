<template>
    <section class="py-8">
        <h1 class="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Latihan Pernafasan<span
                class="text-blue-600">.</span></h1>
        <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-3 lg:grid-cols-3xam">
            <article v-for="musik in getDataMusik" :key="musik.id" class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                    <!-- Perbaiki pemanggilan getEmbeddedUrl di bawah -->
                    <iframe width="560" height="315" :src="getEmbeddedUrl(musik.video)" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="mt-1 p-2">
                    <h2 class="text-slate-700">Nama Video</h2>
                    <!-- Ganti teks "Nama Video" dengan data yang sesuai dari Vuex -->
                    <p class="text-slate-400 mt-1 text-sm">{{ musik.nama }}</p>

                    <div class="mt-3 flex items-end justify-end">
                        <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 12a2 2 0 100-4 2 2 0 01-4 0zm7-2a1 1 0 100-2 1 1 0 000 2zm-14 0a1 1 0 100-2 1 1 0 000 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('musik', ['getDataMusik'])
    },
    methods: {
        ...mapActions('musik', ['fetchDataMusik']),
        // Method untuk mendapatkan tautan embedded video YouTube
        getEmbeddedUrl(videoLink) {
            // Mengambil ID video dari tautan YouTube
            const videoId = videoLink.split('v=')[1];
            // Membuat tautan embedded YouTube dengan ID video
            return `https://www.youtube.com/embed/${videoId}`;
        }
    },
    mounted() {
        // Panggil aksi fetchDataMusik ketika komponen dimuat
        this.fetchDataMusik();
    }
};
</script>
