import axios from 'axios';
import jwt from "../plugins/jwt";
import apiConfig from "../config/api.js";

export default {
  namespaced: true,
  state: {
    patientsList : []
  },
  
  mutations: {
    
    setPatiensList(state, patientsList){
      state.patientsList = patientsList
    }
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

    async getPatientsList({commit},token){

      const requestParams = {
        method: "GET",
        url: `${apiConfig.baseUrl}:${apiConfig.port}/core/individuos`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,  
        },
      };
     
      //TODO - remove mock 
      const response = {data:[
      {
        nome: "Maria da Silva",
        age: 65,
        dataNasc: "22/10/2021",
      },
      {
        nome: "Maria da Silva",
        age: 80,
        dataNasc: "22/10/2021",
      },
      {
        nome: "Maria da Silva",
        age: 50,
        dataNasc: "22/10/2021",
      },
      {
        nome: "Maria da Silva",
        age: 69,
        dataNasc: "22/10/2021",
      },
       ]}
      //const response = await axios.request(requestParams)

      const patientsList = response.data
      commit('setPatiensList', patientsList)
     
    },

  },
  
}
