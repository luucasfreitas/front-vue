import axios from 'axios';
import jwt from "../plugins/jwt";
import config from '../config/api'


export default {
  namespaced: true,
  state: {
    token: '',
    username: '',
    password:'',
    loginId:null,
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
    login(state, loginId){
      state.sessionAuth = true
      state.loginId = loginId
    },
    loginFailed(state){
      state.sessionAuth = false
    },
  },
  actions: {
    async generateToken({commit, state}){
      if(state.username != '' &&
      state.password != ''){
        const token = await jwt.gerarToken({
          username: state.username,
          password: state.password
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
    async login({commit, state}){
      try {
        //const reponse = await axios("http://localhost:3000/core/authenticate/")
        const requestParams  = {
          method: 'POST',
          //url: `${config.baseUrl}/core/authenticate/`,
          url: `${config.baseUrl}:${config.port}/core/authenticate/`,
          headers: {'Content-Type': 'application/json', authorization: state.token}
        }
       // console.log(requestParams)
        //const response = await axios.request(requestParams)
        // TODO - remove mock 
        const response = {status: 200, data:{result:1}}
        if (response.status == 200){
          console.log('logged ->', response)
          commit('login', response.data.result.id)
        }
      } catch (error) {
        commit('loginFailed')
      }
    }

  },
  
}
