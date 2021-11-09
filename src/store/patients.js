import axios from 'axios';
import apiConfig from "../config/api.js";
import jwt from "../plugins/jwt";

export default {
  namespaced: true,
  state: {
    patientsList : [],
    patientSelected : {
      name: "",
      gender: "",
      age: "",
      id: '',
      phone: ''
    }
   
  },
  
  mutations: {
    
    SET_PATIENT_SELECTED(state, patient){
      state.patientSelected = patient
    },
    SET_PATIENS_LIST(state, patientsList){
      state.patientsList = patientsList
    }
  },

  actions: {
    
    async getPatientsList({commit},{token, loginId}){
      console.log(loginId, token)
      const requestParams = {
        method: "GET",
        url: `${apiConfig.baseUrl}:${apiConfig.port}/core/individuos/${loginId}`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,  
        },
      };
     
    
      const response = await axios.request(requestParams)

      const patientsList = response.data.participants 
      console.log(patientsList)
      commit('SET_PATIENS_LIST', patientsList)
     
    },
    selectPatient({commit}, patient){
      commit('SET_PATIENT_SELECTED', patient)
    }

  },
  
}
