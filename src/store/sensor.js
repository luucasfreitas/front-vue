import apiConfig from "../config/api.js";

export default {
  namespaced: true,
  state: {
    fileList: [],
    fileSelected: {
      nome_arquivo: '',
      dt_sessao: ''
    },
    tremor: {
      T1: 0,
      T2: 0,
      T3: 0,
      T4: 0,
      T5: 0
    }
  },

  mutations: {

    SET_FILE_SELECTED(state, file) {
      state.fileSelected = file
    },
    SET_FILE_LIST(state, fileList) {
      state.fileList = fileList
    },
    SET_TREMOR(state, tremor) {
      state.tremor = tremor
    }
  },

  actions: {

    async getFileList({ commit, dispatch }, { token, loginId, id }) {

      try {
        const url = `${apiConfig.baseUrl}:${apiConfig.port}/sensor/${id}/${loginId}`
        const requestParams = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
        };

        const response = await fetch(url, requestParams)
        const data = await response.json()

        commit('SET_FILE_LIST', data)
      } catch (e) {
        const errorMessage = `Erro ao listar arquivos - ${e.message} `
        dispatch("events/alert", errorMessage, { root: true })
      }

    },
    selectFile({ commit }, file) {
      commit('SET_FILE_SELECTED', file)
    },
    async loadHistogramData({ commit, dispatch }, { token, filename }) {
      try {
        const url = `${apiConfig.baseUrl}:${apiConfig.port}/sensor/?filename=${filename}`
        const requestParams = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
        };

        const response = await fetch(url, requestParams)
        const data = await response.json()

        commit('SET_TREMOR', data)
      } catch (e) {
        const errorMessage = `Erro ao carregar arquivo - ${e.message} `
        dispatch("events/alert", errorMessage, { root: true })
      }
    }

  },

}
