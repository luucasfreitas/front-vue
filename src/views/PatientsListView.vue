<template>
  <div id="tela-lista">
    <div class="row">
      <v-btn @click="getPatientsList()">
        Botao
      </v-btn>
      <h3>
        Lista de pacientes
      </h3>
    </div>
    <hr />
    <br />
    <v-card class="mt-6 row m0">
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
      <v-divider class="mr-4  "></v-divider>
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
          value: "nome",
        },
        { text: "Idade", value: "age", sortable: true },
        { text: "Data de Nascimento", value: "dataNasc" },
        { text: 'Actions', value: 'actions', sortable: false },
       // { text: 'Id', value: 'id', sortable: false, enable: false },
       //{ text: "Tipo Sangue", value: "tipo_sangue" },

      ],
      patients: []
    //    patientsList:[],
    };
  },
  computed:{
   // ...mapState({patientsList: state => state.patients.patientsList},),
    ...mapState('patients', ["patientsList"]),
    ...mapState('session',["token", "loginId"]),

    _loginId(){
      return this.loginId
    },
    _token(){
      return this.token
    },
    _patients(){
      return this.patientsList
    }
  },
  methods: {


    ...mapActions('patients', [
      "getPatientsList"
    ]),
    async loadPatientsList(){

      await this.getPatientsList({token:this._token, loginId:this._loginId})
    },
    async handlePaitentslist () {

      await this.loadPatientsList();
      this.patients = this._patients
    },
    handleLoadStatistcs(patient){
      this.$router.replace("patients/results");
    },
  },
  async created() {
    await this.handlePaitentslist();
  },
};
</script>

<style lang="scss">
#tela-lista {
  width: 100% !important;
  v-card {
    v-card-text {
      table.v-table tbody td {
       height: 40px;
       border: none !important;
   }
     .theme--light.v-table tbody tr:not(:last-child) {
        border-bottom: none !important;
    }
    }

  }
}
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
.m0{
      padding: 0;
    margin: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
}
</style>