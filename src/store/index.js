import { createStore } from 'vuex';
// import order from './modules/order';
import auth from './modules/auth'; 
import datauser from './modules/datauser';
import musik from './modules/musik';
import saran from './modules/saran';
import gerakan from './modules/gerakan';
import pernafasan from './modules/pernafasan';
import kategori from "./modules/kategoristres";
const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    datauser,
    musik,
    saran,
    gerakan,
    pernafasan,
    kategori
  },
});

export default store;