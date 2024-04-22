<template>
  <div class="text-gray-900 ml-64 mt-20 p-10">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="font-semibold text-gray-700">User Accounts</h2>
        <span class="text-xs text-gray-500">View accounts of registered users</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <!-- Input pencarian -->
          <input v-model="searchQuery" type="text" placeholder="Search..."
            class="border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring-blue-300 focus:border-blue-300 text-sm text-gray-700 mr-4">

          <!-- Tombol Tambah Pengguna -->
          <button @click="openModal" type="button"
            class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Tambah pengguna
          </button>
          <!-- Modal -->
          <div id="crud-modal" class="fixed inset-y-0 right-0 overflow-y-auto hidden">

            <div class="relative p-4 pt-40 w-full max-w-md max-h-full">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Tambah Pengguna Baru
                  </h3>
                  <button @click="closeModal" type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <form @submit.prevent="addUser" class="p-4 md:p-5 pt-40 mx-auto max-w-md">
                  <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                        Lengkap</label>
                      <input v-model.trim="newUser.name" type="text" name="name" id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Nama lengkap" required>
                    </div>
                    <div class="col-span-2">
                      <label for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input v-model.trim="newUser.email" type="email" name="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Email" required>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                      <label for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input v-model.trim="newUser.password" type="password" name="password" id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Minimal 8 karakter" required>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                      <label for="confirmPassword"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Konfirmasi Password</label>
                      <input v-model.trim="newUser.confirmPassword" type="password" name="confirmPassword"
                        id="confirmPassword"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Minimal 8 karakter" required>
                    </div>
                  </div>
                  <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
                  <button type="submit"
                    class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"></path>
                    </svg>
                    Add new product
                  </button>
                </form>
              </div>
            </div>
          </div>
          <!-- Modal edit -->
          <div id="edit-modal" class="fixed inset-y-0 right-0 overflow-y-auto hidden">


            <div class="relative p-4 pt-40 w-full max-w-md max-h-full">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Edit Pengguna
                  </h3>
                  <button @click="closeEditModal" type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="edit-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal Edit -->
                <form @submit.prevent="updateUser" class="p-4 md:p-5 pt-40 mx-auto max-w-md">
                  <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                        Lengkap</label>
                      <input v-model.trim="editedUser.name" type="text" name="name" id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Nama lengkap" required>
                    </div>
                    <div class="col-span-2">
                      <label for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input v-model.trim="editedUser.email" type="email" name="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Email" required>
                    </div>


                  </div>
                  <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
                  <button type="submit"
                    class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
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
        </div>
      </div>
    </div>
    <div class="overflow-y-hidden rounded-lg border">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th class="px-5 py-3">ID</th>
              <th class="px-5 py-3">Full Name</th>
              <th class="px-5 py-3">User Role</th>
              <th class="px-5 py-3">Created at</th>
              <th class="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody class="text-gray-500">
            <tr v-for="user in paginatedData" :key="user.id">
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">{{ user.id }}</td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">{{ user.name }}</td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">{{ user.role }}</td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">{{ user.email }}</td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <button @click="editUser(user.id)"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                <button @click="deleteUser(user.id)"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
              </td>
            </tr>
          </tbody>

        </table>
        <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span class="text-xs text-gray-600 sm:text-sm"> Showing {{ startIndex + 1 }} to {{ Math.min(endIndex,
            getDataUser.length) }} of {{ getDataUser.length }} Entries </span>
          <div class="flex items-center mt-4 sm:mt-0">
            <button @click="previousPage" :disabled="currentPage === 1"
              class="px-3 py-1 rounded text-sm mr-2 bg-gray-200">Previous</button>
            <button @click="nextPage" :disabled="endIndex >= getDataUser.length || paginatedData.length < itemsPerPage"
              class="px-3 py-1 rounded text-sm bg-gray-200">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2'; // Import Swal from sweetalert2

export default {
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
      newUser: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'member'
      },
      editedUser: {},
      errorMessage: ''
    };
  },
  computed: {
    ...mapGetters('datauser', ['getDataUser']),
    // Menghitung indeks awal dan akhir untuk pagination
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    endIndex() {
      return this.currentPage * this.itemsPerPage;
    },
    // Data yang akan ditampilkan pada halaman saat ini
    paginatedData() {
      // Jika ada pencarian, gunakan data yang difilter
      if (this.searchQuery) {
        return this.searchUser();
      }
      // Jika tidak, gunakan data asli
      return this.getDataUser.slice(this.startIndex, this.endIndex);
    },
  },
  methods: {
    ...mapActions('datauser', ['fetchDataUser', 'postUserData', 'deleteUserData', 'editUserData']), // Tambahkan action postUserData ke mapActions
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    editUser(userId) {
      // Temukan pengguna yang akan diedit berdasarkan ID
      this.editedUser = this.getDataUser.find(user => user.id === userId);
      // Tampilkan modal edit
      document.getElementById('edit-modal').classList.remove('hidden');
    },
    nextPage() {
      if (this.endIndex < this.getDataUser.length) {
        this.currentPage++;
      }
    },
    openModal() {
      // Tampilkan modal
      document.getElementById('crud-modal').classList.remove('hidden');
      // Atur fokus pada elemen modal jika diperlukan
      // document.getElementById('crud-modal').focus();
    },
    closeModal() {
      // Tutup modal tambah pengguna
      document.getElementById('crud-modal').classList.add('hidden');
      // Reset nilai input pengguna baru setelah menutup modal
      this.newUser = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'member'
      };
      
      // Reset pesan kesalahan
      this.errorMessage = '';
    },
    closeEditModal() {
      // Tutup modal edit
      document.getElementById('edit-modal').classList.add('hidden');
      // Reset nilai editedUser setelah menutup modal
      this.editedUser = {};
    },
    searchUser() {
      const query = this.searchQuery.toLowerCase();
      return this.getDataUser.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    },
    async addUser() {
      // Lakukan validasi input pengguna sebelum mengirim permintaan POST
      if (this.validateUser()) {
        try {
          // Tampilkan konfirmasi sebelum menambah pengguna
          const result = await Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          });

          if (result.isConfirmed) {
            // Panggil action postUserData dengan data pengguna baru
            await this.postUserData(this.newUser);
            await this.fetchDataUser();
            // Tutup modal setelah berhasil menambah pengguna
            this.closeModal();
            // Tampilkan pesan sukses menggunakan Swal.fire
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User added successfully",
              showConfirmButton: false,
              timer: 1500
            });
          } else if (result.isDenied) {
            // Jika tidak menyimpan, reset nilai input pengguna baru
            this.newUser = {
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              role: 'member'
            };
            // Tutup modal
            this.closeModal();
          }
        } catch (error) {
          console.error('Error adding user:', error);
          this.errorMessage = 'Failed to add user. Please try again.'; // Set pesan kesalahan jika terjadi kesalahan saat menambah pengguna
        }
      }
    },
    async updateUser() {
  // Lakukan validasi input pengguna yang diubah sebelum mengirim permintaan PUT
    try {
      // Panggil action updateUserData dengan data pengguna yang diubah
      await this.editUserData(this.editedUser);
      // Tutup modal setelah berhasil mengubah pengguna
      this.closeEditModal(); // Panggil closeEditModal di sini
      // Tampilkan pesan sukses menggunakan Swal.fire
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User updated successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error updating user:', error);
      // Set pesan kesalahan jika terjadi kesalahan saat mengubah pengguna
      this.errorMessage = 'Failed to update user. Please try again.';
    }
},



    async deleteUser(userId) {
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
          await this.deleteUserData(userId);
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

    validateUser() {
      // Lakukan validasi input pengguna di sini
      if (!this.newUser.name || !this.newUser.email || !this.newUser.password || !this.newUser.confirmPassword) {
        this.errorMessage = 'All fields are required.';
        return false;
      } else if (this.newUser.password !== this.newUser.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        return false;
      }
      return true;
    }
  },

  

  mounted() {
    this.fetchDataUser().catch(error => {
      console.error('Error fetching user data:', error);
    });
  },
};
</script>