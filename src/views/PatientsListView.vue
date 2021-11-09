<template>
  <div id="tela-lista">
    <div class="row">
      <h3>
        {{_pageTitle}}
      </h3>
    </div>
    <hr />
    <br />
    <v-card class="mt-6 row m0">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          :label="_labelSearch"
          single-line
          small
          hide-details
          class="search-text-field"
        ></v-text-field>
      </v-card-title>
      <v-divider class="mr-4  "></v-divider>
      <v-card-text style="margin: 0px !important; padding: 0 !important; ">
        <v-data-table
          :headers="_tableHeaders"
          :items="patients"
          :items-per-page="5"
          class="elevation-1"
          :search="search"
          style="margin: 0px !important;"
          :footer-props="_tableFooterProps"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="handleLoadStatistcs(item)"
            >
                mdi-chart-line
            </v-icon>
          </template>

           <template slot="no-data"> 
             {{ _labelNoData}}
           </template>
        </v-data-table>
      </v-card-text>
    </v-card>
    </div>
</template>

<script>

import axios from 'axios';
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  data() {
    return {
      search: '',
      headers: [],
      patients: [],
    
    //    patientsList:[],
    };
  },

  
  computed:{
    ...mapState('patients', ["patientsList"]),
    ...mapState('session',["token", "loginId"]),
    ...mapGetters('patientsListView', [
      'getHeadersTablePatients',
      'getPageTitle',
      'getTableFooterProps',
      'getTableLabelSearch',
      'getTableLabelNoData'
    ]),
    _tableFooterProps(){
      const { itensPerPage } = this.getTableFooterProps
      return {
            showFirstLastPage: true,
            'items-per-page-text':itensPerPage
          }
    },
    _labelNoData(){
      return this.getTableLabelNoData
    },
    _labelSearch(){
      return this.getTableLabelSearch
    },
    _pageTitle(){
      return this.getPageTitle
    },
    _loginId(){
      return this.loginId
    },
    _token(){
      return this.token
    },
    _patients(){
      return this.patientsList
    },
    _tableHeaders(){
     const { name,
            age,
            gender,
            dateOfBirth,
            actions } = this.getHeadersTablePatients
      return [
        { 
          text: name,
          align: "start",
          sortable: false,
          value: "patient_name", 
        },
        { 
          text: age,
          value: "age",
          sortable: true 
        },
        { 
          text: dateOfBirth,
          value: "date_of_birth" 
        },
        { 
          text: actions,
          value: 'actions',
          sortable: false
        },
      ]
    }
  },
  methods: {


    ...mapActions('patients', [
      "getPatientsList",
      "selectPatient"
    ]),
    ...mapActions('results', [
      "getScoreHistory",
    ]),
    async loadPatientsList(){

      await this.getPatientsList({token:this._token, loginId:this._loginId})
    },
    async handlePaitentslist () {

      await this.loadPatientsList();
      this.patients = this._patients
    },
    handleLoadStatistcs(patient){
      this.selectPatient(patient)
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