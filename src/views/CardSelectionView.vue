<!--TODO: Revisar se existe uma forma melhor de manter as imagens resposivas-->
<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <p class="text-h4 text-center font-weight-bold">Escolha sua perspectiva</p>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center">
      <v-col
       v-for="card in cardsData"
        :key="card"
        cols="12"
        sm="4"
      >
        <v-card
          hover
          class="pa-10 mx-16 my-12 rounded-lg"
          style="background: linear-gradient(rgba(49, 117, 211, 1), rgba(85, 144, 224, 1))"
          @click="handleCardClick()"
        >
          <v-img contain height="190" :src="getImgUrl(card.img)"></v-img>
          <v-card-title  class="justify-center pt-10 font-weight-bold white--text text-h5">
            {{card.title}}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  data() {
    return {
      search: '',
      headers: [],
      patients: [],
      cardsData: [
        {
          title: "UPDRS",
          img: "updrs_card",
        },
        {
          title: "Sensor",
          img: "sensor_card",
        }
      ],
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
    },
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
    async handleLoadStatistcs(patient){
      this.selectPatient(patient);
      const response = await this.getScoreHistory();
      //console.log(response)
      this.$router.push("patients/results");
      //this.$router.go("results");
      
    },
    handleCardClick() {
      this.$router.push("patients/updrs_patients");
    },
    getImgUrl(img) {
      var images = require.context('../assets/', false, /\.svg$/)
      return images('./' + img + ".svg")
    },
  },
  async created() {
    await this.handlePaitentslist();

  },
};
</script>

<style lang="scss">
</style>