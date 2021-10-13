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
    
   
    async loadPatientsList({commit},token){
      const requestParams = {
        method: "GET",
        url: `${apiConfig.baseUrl}:${apiConfig.port}/core/individuos/`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,  
        },
      };
      // TODO - remove mock 
      const response = {data:[
      {
        name: "Maria da Silva",
        age: 65,
        dataNasc: new Date(),
      },
      {
        name: "Maria da Silva",
        age: 80,
        dataNasc: new Date(),
      },
      {
        name: "Maria da Silva",
        age: 50,
        dataNasc: new Date(),
      },
      {
        name: "Maria da Silva",
        age: 69,
        dataNasc: new Date(),
      },
       ]}
      //const patientsList = await this.getPatientsList(token);
      const patientsList = response.data
      commit('setPatiensList', patientsList)
     
    },

  },
  
}
