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
      },
      allParts : []

    },
    
    mutations: {
      
      SET_HISTORY(state, scoreHistory){
        state.scoreHistoryGraphData = scoreHistory
      },
      SET_PARTS_SELECTED(state, data){
        state.partsAssessSelected.data = data
      },
      SET_PARTS_ARRAY (state, data ) {
        state.allParts = data
      }
    },
  
    actions: {
        async getScoreHistory({commit, rootState}){
            const {token, loginId} = rootState.session
            const {lang} = rootState.lang
            const { id } = rootState.patients.patientSelected

            const formatDate = (date) => {
              const d = new Date(date);
              const options = { year: 'numeric', month: 'short', day: 'numeric' };
              let stringDate = d.toLocaleDateString(lang, options, )
              stringDate = stringDate.split('de')

              return stringDate.join('')
            }


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
                const date = formatDate(r.date)
                dates.push (date)
            })
            //console.log("result",{ categories: dates,
                //data: scores}  )
            commit('SET_HISTORY', { categories: dates,
                data: scores})
            const dataParts = []
            Object.values(result[0].score.scoreParts).map((part) => {
              dataParts.push(part)
            })
            const allParts = []
            Object.values(result).map((part) => {
              allParts.push(part.score.scoreParts)
            })
            
            commit('SET_PARTS_ARRAY', allParts )
            //console.log(dataParts )
            commit('SET_PARTS_SELECTED', dataParts )
            return result
          },
     
  
    },
    
  }
  