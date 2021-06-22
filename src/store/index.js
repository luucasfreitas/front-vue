import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import jwt from "../plugins/jwt";

// const jwt = require("../plugins/jwt")
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    username: '',
    password:'',
    sessionAuth: false
  },
  mutations: {
    
    setToken(state, newToken){
      state.token = newToken
    },

    setUsername(state, newUsername){
      state.username = newUsername
    },
    setPassword(state, newPassword){
      state.password = newPassword
    },
    login(state){
      state.sessionAuth = true
    },
    loginFailed(state){
      state.sessionAuth = false
    },
  },
  actions: {
    async generateToken({commit}){
      if(this.state.username != '' &&
      this.state.password != ''){
        const token = await jwt.gerarToken({
          username: this.state.username,
          password: this.state.password
        })
        localStorage.setItem("token", token)
        commit('setToken', token)
      }

    },
    setUsername({commit}, {username}){
     
      commit('setUsername', username)

    },
    setPassword({commit}, {password}){
      
      commit('setPassword', password)

    },

    async login({commit}){
      try {
        //const reponse = await axios("http://localhost:3000/core/authenticate/")
        const requestParams  = {
          method: 'POST',
          url: 'http://localhost:3000/core/authenticate/',
          headers: {'Content-Type': 'application/json', authorization: this.state.token}
        }
        const response = await axios.request(requestParams)
        if (response.data){
          commit('login')
        }
      } catch (error) {
        commit('loginFailed')
      }
    }

  },
  modules: {
  }
})
