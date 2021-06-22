<template>
  <v-main class="login-screen">
      <div class="login-screen-title">
          <h1>
           {{dashboard_title}}
          </h1>
          <p>
            {{dashboard_subtitle}}
          </p>
      </div>
      <div class="input-card">
          
        <input-credentials-card class="input-login-screen">  </input-credentials-card>
      </div>
  </v-main>
</template>

<script>

import InputCredentialsCard from '../components/login/InputCredentialsCard.vue';
export default {
    components: {
        'input-credentials-card':InputCredentialsCard
    },
    data() {
        return {
        dashboard_title: 'UPDRS Dashboard',
        dashboard_subtitle: 'Painel para vizualização de resultados da UPDRS, integrado ao SIDABI',
        }
    },
};
</script>

<style lang="scss">
.login-screen {
    position: relative;
    margin: auto;
    padding: auto;
    background-color: #E8E8E8;
    justify-items: center;
    width: 100% !important;
    height: 100%;
     
    & .input-card{
        display: flex;
        float: left;
        padding-top: 6% ;
        padding-bottom: 1% ;
        padding-left: 7% ;
        width: 50% !important;
        height: 100% !important;

        & .input-login-screen{
            //width: 100% !important;
            //height: 100% !important;
            //border: 12px solid rgb(0, 255, 98) !important;
        }
    }
    & .login-screen-title{
        float: left;
        align-self: center;
        justify-self: center;
        padding-left: 4%;
        width: 50% !important;
        height: 100% !important;
        //border: 12px solid rgb(255, 0, 149) !important;
         
        & h1{
            padding-top: 40%;
            //padding-left: 5%;

            color: #004ff8;
            font-family: "Lato", sans-serif;
        }
    }
}
</style>