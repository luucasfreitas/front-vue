
export default {
    namespaced: true,
    state: {
        headersTablePatients:{
          'pt-br':{
            name:'Nome',
            age:'Idade',
            gender:'Sexo',
            dateOfBirth: 'Data de Nascimento',
            actions:'Ações',
            },
            'eng-us':{
              name:'Name',
              age: 'Age',
              gender: 'Gender',
              dateOfBirth: "Date of Birth",
              actions: "Actions"
            }
          
        },
        pageTile:{
          'pt-br': 'Lista de Pacientes',
          'eng-us': 'Patients List'
        }
    },
    getters: {
      getHeadersTablePatients (state, getters, rootState) {
        const lang = rootState.lang.lang ? rootState.lang.lang : 'pt-br'
        return state.headersTablePatients[lang]
      },
      getPageTitle(state, getters, rootState){
       
        const lang = rootState.lang.lang ? rootState.lang.lang : 'pt-br'
        return state.pageTile[lang]
      }
    }
  }
  