import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Halawal from '../views/halamanutama.vue';
// import admin from '../admin/slidebar.vue';
// import tapuse from '../views/users/tampilanawaluser.vue';
import tabuser from '../views/admin/table/table_user.vue';
// import tabkat from '../views/admin/table/table_kategori.vue';
import Musik from '../views/admin/data/tambah_musik.vue';
// import Pertanyaan from '../views/admin/data/tambah_pertanyaan.vue';
import LayoutAdmin from '../layout/adminlayout.vue';
import Layoutuser from "../layout/userlayout.vue";
import dashboard from '../views/admin/data/dashboard.vue';
import profile from '../views/admin/data/profile.vue';
import home from '../views/users/home.vue';
import Latihan from '../views/users/latihan.vue';
import Saran from '../views/admin/table/tablesaran.vue';
import Gerakan from '../views/admin/table/tabel_gerakan.vue';
import Pernafasan from '../views/admin/table/table_pernafasan.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'halamanawal',
      component: Halawal
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'LayoutAdmin',  
      component: LayoutAdmin,
      children: [
        {
          path: '/admin',
          name: 'dashboard',
          component: dashboard
        },
        {
          path: '/admin/user',
          name: 'tabuser',
          component: tabuser
        },
        {
          path: '/admin/musik', 
          name: 'Musik',
          component: Musik
        },
        {
          path: '/admin/profile',
          name: 'profile',
          component: profile
        },
        {
          path: '/admin/saran',
          name: 'Saran',
          component: Saran
        },
        {
          path: '/admin/gerakan',
          name: 'Gerakan',
          component: Gerakan
        },
        {
          path: '/admin/pernafasan',
          name: 'Pernafasan',
          component: Pernafasan
        },
        // {
        //   path: '/kategori',
        //   name: 'kategori',
        //   component: tabkat
        // },
      ]
    },
    {
      path: "/home",
      name: "user",
      component: Layoutuser,
      children: [
        {
          path: "/home",
          name: "home",
          component: home,
        },
        {
          path: "/latihan",
          name: "Latihan",
          component: Latihan,
        },
        // {
        //   path: "/kategori",
        //   name: "Kategori",
        //   component: KategoriView,
        // },
      ],
    },
   
    // {
    //   path: '/pertanyaan',
    //   name: 'pertanyaan',
    //   component: Pertanyaan
    // },
    // {
    //   path: '/awal',
    //   name: 'awal',
    //   component: tapuse
    // },
  ]
})

export default router
