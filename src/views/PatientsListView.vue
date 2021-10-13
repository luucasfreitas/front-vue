<template>
  <div id="tela-lista">

   
    <div>
      <v-card class="mr-4 ml-4">
        <v-card-title>

          <v-text-field
          
            v-model="search"
            append-icon="mdi-magnify"
            label="Pesquisar"
            single-line
            
            small
            
            hide-details
            class="search-text-field"
            
          ></v-text-field>
    </v-card-title>
    <v-divider class="mr-4 ml-4"></v-divider>
    <v-card-text style="margin: 0px !important; padding: 0 !important; ">
      <v-data-table
        :headers="headers"
        :items="patients"
        :items-per-page="5"
        class="elevation-1"
        :search="search"
        style="margin: 0px !important;"
      >
        
        <template v-slot:item.actions="{ patient }">
          <v-icon
              small
              class="mr-2"
              @click="handleLoadStatistcs(patient)"
          >
              mdi-chart-line
          </v-icon>
          
        </template>  
      </v-data-table>
    </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import {mapActions, mapState} from 'vuex'
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: "Nome",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Idade", value: "age", sortable: true },
        { text: "Data de Nascimento", value: "dataNasc" },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      patients: []
    //    patientsList:[],
    };
  },
  computed:{
   // ...mapState({patientsList: state => state.patients.patientsList},),
    ...mapState('patients', ["patientsList"]),

    _token(){
      return this.token
    },
    _patients(){
      return this.patientsList
    }
  },
  methods: {
    ...mapActions('patients', [
      "loadPatientsList"
    ]),
    async handlePaitentslist () {
      
      this.loadPatientsList("teste");
      this.patients = this._patients
    },
    handleLoadStatistcs(){

    }
    
  },
  async beforeMount() {
    await this.handlePaitentslist();
  },
};
</script>

<style lang="scss">
.elevation-1 {
  margin-left: 4%;
  margin-right: 4%;
}
h1 {
  padding: 4%;
}
.search-text-field{
  margin-left:  85% ;
  max-width: 15% !important;
}
</style>