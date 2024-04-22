<template>
  <div class="text-gray-900 ml-64 mt-20 p-10">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="font-semibold text-gray-700">Data Musik</h2>
        <span class="text-xs text-gray-500">Daftar Data Musik</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="ml-10 space-x-8 lg:ml-40">
          <button @click="openModal"
            class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
            </svg>
            Tambah
          </button>
        </div>
      </div>
    </div>
    <div class="overflow-y-hidden rounded-lg border">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th class="px-5 py-3">ID</th>
              <th class="px-5 py-3">Video</th>
              <th class="px-5 py-3">Catatan</th>
              <th class="px-5 py-3">Tingkat stres</th>
              <th class="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody class="text-gray-500">
            <tr v-for="musik in getDataMusik" :key="musik.id">
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">{{ musik.id }}</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">{{ musik.video }}</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">{{ musik.catatan }}</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">{{ musik.TingkatStre ? musik.TingkatStre.kategori : '' }}</p>
              </td>

              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">
                <div class="flex space-x-4">
                  <button @click="editMusik(musik.id)" class="flex items-center text-blue-500 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="h-6 w-6 mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    Edit
                  </button>
                  <button @click="deleteMusik(musik.id)" class="flex items-center text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      class="h-6 w-6 mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Delete
                  </button>
                </div>
                </p>
              </td>

            </tr>

          </tbody>

        </table>
      </div>
      <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
        <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
        <div class="mt-2 inline-flex sm:mt-0">
          <button
            class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
          <button
            class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div id="crud-modal" class="fixed inset-y-0 right-0 overflow-y-auto hidden">

    <div class="relative p-4 pt-40 w-full max-w-md max-h-full">
      <div class="flex flex-col rounded-lg bg-white sm:w-96">
        <div class="flex w-full justify-between self-start px-8 py-4">
          <h2 class="text-lg font-medium text-gray-700">Tambah Musik</h2>
          <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-gray-400"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <hr />

        <form @submit.prevent="addMusik" class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video</label>
                <input v-model.trim="newMusik.video" type="text" name="name" id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type video link here" required>
            </div>

            <div class="col-span-2 sm:col-span-1 w-full">
              <label for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
              <select v-model.trim="newMusik.id_stres" id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full">
                <option value="" disabled selected>Pilih Kategori Stres</option>
                <!-- Iterasi melalui array dataKategoriTingkatStres dan menampilkan kategori -->
                <option v-for="kategori in getDataKategoriTingkatStres" :key="kategori.id" :value="kategori.id">{{
            kategori.kategori }}</option>
              </select>
            </div>

            <div class="col-span-2">
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
                Description</label>
              <textarea v-model.trim="newMusik.catatan" id="description" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write product description here"></textarea>
            </div>
          </div>
          <button type="submit" class="my-2 rounded-md bg-blue-600 py-2 font-medium text-white w-full">Tambah
            Data</button>
        </form>


      </div>

    </div>
  </div>
  <div id="edit-modal" class="fixed inset-y-0 right-0 overflow-y-auto hidden">
    <div class="relative p-4 pt-40 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Edit Musik
          </h3>
          <button @click="closeEditModal" type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="edit-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal Edit -->
        <form @submit.prevent="updateMusik" class="p-4 md:p-5 pt-40 mx-auto max-w-md">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
              <label for="vid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video</label>
              <input v-model.trim="editedMusik.video" type="text" name="name" id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Video" required>
            </div>
            <div class="col-span-2">
              <label for="cat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Catatan</label>
              <input v-model.trim="editedMusik.catatan" type="text" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Catatan" required>
            </div>
          </div>
          <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
          <button type="submit"
            class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"></path>
            </svg>
            Simpan perubahan
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2';

export default {
  data() {
  return {
    modalOpen: false,
    newMusik: {
      video: '', // Properti untuk menyimpan tautan video
      catatan: '',
      id_stres: '',
    },
    editedMusik: {},
  };
},

  computed: {
    ...mapGetters('musik', ['getDataMusik', 'getDataKategoriTingkatStres']) // Mengambil data kategori tingkat stres dari Vuex store
  },
  methods: {
    ...mapActions('musik', ['fetchDataMusik', 'postMusikData', 'editMusikData', 'deleteMusikData']),
    openModal() {
      document.getElementById('crud-modal').classList.remove('hidden');
    },
    editMusik(musikId) {
      // Find the music to be edited based on ID
      this.editedMusik = this.getDataMusik.find(musik => musik.id === musikId);
      // Show the edit modal
      document.getElementById('edit-modal').classList.remove('hidden');
    },
    closeModal() {
      const modalElement = document.getElementById('crud-modal');
      if (modalElement) {
        modalElement.classList.add('hidden');
      }
      // Reset nilai input musik baru setelah menutup modal
      this.newMusik = {
        video: '',
        catatan: '',
        id_stres: '',
      };
      // Reset pesan kesalahan
      this.errorMessage = '';
    },
    closeEditModal() {
      // Tutup modal edit
      document.getElementById('edit-modal').classList.add('hidden');
      // Reset nilai editedMusik setelah menutup modal
      this.editedMusik = {};
    },
    async addMusik() {
      try {
        await this.postMusikData(this.newMusik);
        await this.fetchDataMusik(); // Memperbarui data setelah berhasil menambahkan
        this.closeModal(); // Menutup modal setelah berhasil menambahkan

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Musik added successfully",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error adding music:', error);
        this.errorMessage = 'Failed to add music. Please try again.';
      }
    },
    async updateMusik() {
      try {
        // Panggil action editMusikData dengan musikId dan data musik yang diubah
        await this.editMusikData({ musikId: this.editedMusik.id, updatedMusikData: this.editedMusik });
        // Tutup modal setelah berhasil mengubah musik
        this.closeEditModal();
        // Tampilkan pesan sukses menggunakan Swal.fire
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Music updated successfully",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error updating music:', error);
        // Set pesan kesalahan jika terjadi kesalahan saat mengubah musik
        this.errorMessage = 'Failed to update music. Please try again.';
      }
    },

    async deleteMusik(musikId) {
      try {
        // Tampilkan konfirmasi sebelum menghapus pengguna
        const result = await Swal.fire({
          title: "Yakin Ingin Menghapus Data??",
          text: "Anda Tidak Bisa Mengembalikan Datanya kembali!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya, Hapus!"
        });

        if (result.isConfirmed) {
          // Panggil action deleteUserData dengan id pengguna yang akan dihapus
          await this.deleteMusikData(musikId);
          // Tampilkan pesan sukses menggunakan Swal.fire
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User deleted successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        // Tampilkan pesan kesalahan jika terjadi kesalahan saat menghapus pengguna
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete user. Please try again.',
        });
      }
    },
  },



  mounted() {
    // Panggil aksi fetchDataMusik dan fetchKategoriTingkatStres ketika komponen dimuat
    this.fetchDataMusik();
    this.$store.dispatch('musik/fetchKategoriTingkatStres');
  }
};
</script>