import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loginError: null,
    dataAddress: [],
    role: '', // Tambahkan atribut role
    
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getAddress: (state) => state.dataAddress,
    userRole: (state) => state.role // Getter untuk mendapatkan peran pengguna
    
  },
  actions: {
    async login({ commit }, credentials) {
      try {
          const response = await axios.post(
            
              'http://localhost:8080/api/v1/login',
              credentials
          );
          const { token, user } = response.data; // Ambil token dan user dari respons
          const { role } = user.result; // Ambil role dari user
  
          // Simpan token dan role ke localStorage
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
  
          commit('SET_ROLE', role); // Commit peran ke state Vuex
          commit('SET_TOKEN', token);
          commit('SET_LOGIN_ERROR', null);
  
          console.log("token saved:", localStorage.token); 
          return true;
      } catch (error) {
          const errorMessage = error.response.data.message || "Login Failed";
          commit("SET_LOGIN_ERROR", errorMessage);
          console.error(error);
          return false;
      }
  },
  
    
    async signup({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/register',
          credentials
        );
        const token = response.data.token;
    

        
        localStorage.setItem('token', token);
   

        commit('SET_TOKEN', token);
        commit('SET_LOGIN_ERROR',null);
        console.log("token saved:", token);
        return true;
      } catch (error) {
        const errorMessage =error.response.data.message || "Login failed";
        commit("SET_LOGIN_ERROR",errorMessage);
        console.error(error);
        return false;
      }
    },

    async getUserAddress({state, commit}){
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/login",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          } 
        );
        commit('SET_ADDRESS', response.data)
        console.log(response);
        return response.data;
      }catch (error){
        console.error(error)
        return null;
      }
    },
    
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');
      commit('SET_TOKEN', null);
      //   Log Token removed
      console.log('Token Removed:', token);
      window.location = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ROLE(state, role) { // Mutasi untuk mengatur peran pengguna
      state.role = role;
    },
    
    SET_LOGIN_ERROR(state,error){
      state.loginError = error;
    },
    SET_ADDRESS(state, address) {
      state.dataAddress = address
    }
  },
};

export default auth;