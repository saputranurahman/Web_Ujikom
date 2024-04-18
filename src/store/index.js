import { createStore } from 'vuex';
// import order from './modules/order';
import auth from './modules/auth'; 
import datauser from './modules/datauser';
import musik from './modules/musik'
const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    datauser,
    musik
  },
});

export default store;