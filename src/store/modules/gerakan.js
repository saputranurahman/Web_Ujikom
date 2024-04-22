import axios from "axios";

const gerakan = {
  namespaced: true,
  state: {
    dataGerakan: [],
    dataKategoriTingkatStres: [],
  },
  getters: {
    getDataGerakan: (state) => state.dataGerakan,
    getDataKategoriTingkatStres: (state) => state.dataKategoriTingkatStres,
  },
  actions: {
    async fetchDataGerakan({ commit }) {
        try {
          const token = localStorage.getItem('token'); // Mengambil token dari localStorage
          if (!token) {
            // Tangani jika token tidak ditemukan
            throw new Error('Token not found');
          }
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
          const data = await axios.get("http://localhost:8080/api/v1/gerakan", config);
          commit("SET_GERAKAN_DATA", data.data['data']);
        } catch (error) {
          console.error(error);
          throw error;
        }
      },  
      async fetchKategoriTingkatStres({ commit }) {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('Token not found');
          }
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
          const response = await axios.get("http://localhost:8080/api/v1/tingkatstres", config);
          commit("SET_KATEGORI_TINGKAT_STRES", response.data['data']);
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
      async postGerakankData({ commit }, gerakanData) {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('Token not found');
          }
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
          const response = await axios.post("http://localhost:8080/api/v1/gerakan", gerakanData, config);
          commit("ADD_GERAKAN", response.data);
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      },                       
  },
  mutations: {
    SET_GERAKAN_DATA(state, dataGerakan) {
      state.dataGerakan = dataGerakan;
    },
    SET_KATEGORI_TINGKAT_STRES(state, dataKategoriTingkatStres) {
      state.dataKategoriTingkatStres = dataKategoriTingkatStres;
    },
    ADD_GERAKAN(state, newGerakan) {
      state.dataGerakan.push(newGerakan);
    },
  },
};

export default gerakan;
