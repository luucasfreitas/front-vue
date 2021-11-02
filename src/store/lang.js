
export default {
  namespaced: true,
  state: {
    lang : 'pt-br'
  },
  
  mutations: {
    
    SET_LANG(state, lang){
      state.lang = lang
    }
  },

  actions: {
    
    setLang({commit},{lang}){
      commit('SET_LANG', lang)
    },

  },
  
}
