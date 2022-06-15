import apiConfig from "../config/api.js";

export default {
  namespaced: true,
  state: {
    fileList: [],
    fileSelected: {
      nome_arquivo: '',
      dt_sessao: ''
    }
  },

  mutations: {

    SET_FILE_SELECTED(state, file) {
      state.fileSelected = file
    },
    SET_FILE_LIST(state, fileList) {
      state.fileList = fileList
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
    }

  },

}
