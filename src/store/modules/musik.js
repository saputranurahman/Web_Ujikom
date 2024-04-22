  import axios from "axios";

  const musik = {
    namespaced: true,
    state: {
      dataMusik: [],
      dataKategoriTingkatStres: [],
    },
    getters: {
      getDataMusik: (state) => state.dataMusik,
      getDataKategoriTingkatStres: (state) => state.dataKategoriTingkatStres,
    },
    actions: {
      async fetchDataMusik({ commit }) {
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
          const data = await axios.get("http://localhost:8080/api/v1/musik", config);
          commit("SET_MUSIK_DATA", data.data['data']);
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
      async postMusikData({ commit }, musikData) {
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
          const response = await axios.post("http://localhost:8080/api/v1/musik", musikData, config);
          commit("ADD_MUSIK", response.data);
          return response.data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
      async editMusikData({ commit }, { musikId, updatedMusikData }) {
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
          // Pastikan musikId tidak kosong atau undefined sebelum mengirimkan permintaan
          if (!musikId) {
            throw new Error('Musik ID is empty or undefined');
          }
          const response = await axios.put(`http://localhost:8080/api/v1/musik/${musikId}`, updatedMusikData, config);
          commit("EDIT_MUSIK", response.data);
          return response.data;
        } catch (error) {
          console.error('Error updating music:', error);
          throw error;
        }
      },
      
      
      async deleteMusikData({ commit }, musikId) {
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
          await axios.delete(`http://localhost:8080/api/v1/musik/${musikId}`, config);
          commit("DELETE_MUSIK", musikId);
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
    },
    mutations: {
      SET_MUSIK_DATA(state, dataMusik) {
        state.dataMusik = dataMusik;
      },
      SET_KATEGORI_TINGKAT_STRES(state, dataKategoriTingkatStres) {
        state.dataKategoriTingkatStres = dataKategoriTingkatStres;
      },
      ADD_MUSIK(state, newMusik) {
        state.dataMusik.push(newMusik);
      },
      EDIT_MUSIK(state, updatedMusik) {
        const index = state.dataMusik.findIndex(musik => musik.id === updatedMusik.id);
        if (index !== -1) {
          state.dataMusik.splice(index, 1, updatedMusik);
        }
      },
      DELETE_MUSIK(state, musikId) {
        state.dataMusik = state.dataMusik.filter(musik => musik.id !== musikId);
      },
    },
  };

  export default musik;
