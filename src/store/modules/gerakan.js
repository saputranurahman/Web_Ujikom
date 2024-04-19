import axios from "axios";

const gerakan = {
  namespaced: true,
  state: {
    dataGerakan: [],
  },
  getters: {
    getDataGerakan: (state) => state.dataGerakan,
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
    // async postMusikData({ commit }, musikData) {
    //   try {
    //     const response = await axios.post("http://localhost:8080/api/v1/musik", musikData);
    //     commit("ADD_MUSIK", response.data); 
    //     return response.data; 
    //   } catch (error) {
    //     alert(error);
    //     console.error(error);
    //     throw error; 
    //   }
    // },
    // async deleteMusikData({ commit }, musikId) {
    //   try {
    //     await axios.delete(`http://localhost:8080/api/v1/musik/${musikId}`);
    //     commit("DELETE_MUSIK", musikId); 
    //   } catch (error) {
    //     alert(error);
    //     console.error(error);
    //     throw error; 
    //   }
    // },
    // actions lainnya ...                          
  },
  mutations: {
    SET_GERAKAN_DATA(state, dataGerakan) {
      state.dataGerakan = dataGerakan;
    },
    // ADD_MUSIK(state, newMusik) {
    //   state.dataMusik.push(newMusik); 
    // },
    // DELETE_MUSIK(state, musikId) {
    //   state.dataMusik = state.dataMusik.filter(musik => musik.id !== musikId); 
    // },
    // // mutations lainnya ...
  },
};

export default gerakan;
