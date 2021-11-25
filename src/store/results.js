import axios from 'axios';
import apiConfig from "../config/api.js";

export default {
    namespaced: true,
    state: {
      scoreHistoryGraphData : {
        categories: [],
        data: []
      },
      partsAssessSelected : {
        data: []
      }

    },
    
    mutations: {
      
      SET_HISTORY(state, scoreHistory){
        state.scoreHistoryGraphData = scoreHistory
      },
      SET_PARTS_SELECTED(state, data){
        state.partsAssessSelected.data = data
      }
    },
  
    actions: {
        async getScoreHistory({commit, rootState}){
            const {token, loginId} = rootState.session
            const { id } = rootState.patients.patientSelected


            const requestParams = {
              method: "GET",
              url: `${apiConfig.baseUrl}:${apiConfig.port}/assess/results/${loginId}/patient/${id}`,
              headers: {
                "Content-Type": "application/json",
                "Authorization": token,  
              },
            };
           
          
            const response = await axios.request(requestParams)
      
            const result = response.data.result
            const scores = []
            const dates = []

            result.map(r => {
                scores.push (r.score.scoreTotal)
                dates.push (r.date)
            })
            console.log("result",{ categories: dates,
                data: scores}  )
            commit('SET_HISTORY', { categories: dates,
                data: scores})
            const dataParts = Object.values(result[0].score.scoreParts)
            commit('SET_PARTS_SELECTED', dataParts )
            return result
          },
     
  
    },
    
  }
  