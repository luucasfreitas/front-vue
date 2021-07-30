<template>
  <v-main class="login-screen">
    <div class="login-screen-title">
      <h1>
        {{ dashboard_title }}
      </h1>
      <p>
        {{ dashboard_subtitle }}
      </p>
    </div>
    <div class="input-card">
      <input-credentials-card class="input-login-screen">
      </input-credentials-card>
    </div>
  </v-main>
</template>

<script>
import InputCredentialsCard from "../components/login/InputCredentialsCard.vue";
export default {
  components: {
    "input-credentials-card": InputCredentialsCard,
  },
  data() {
    return {
      dashboard_title: "UPDRS Dashboard",
      dashboard_subtitle:
        "Painel para vizualização de resultados da UPDRS, integrado ao SIDABI",
    };
  },
};
</script>

<style lang="scss">
.login-screen {
  position: relative;
  margin: auto;
  padding: auto;
  background: linear-gradient(180deg, #3175d3 0%, #5590e0 100%);
  justify-items: center;
  width: 100% !important;
  height: 100%;

  & .input-card {
    display: flex;
    float: left;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 10%;
    width: 50% !important;
    height: 100% !important;

    & .input-login-screen {
      //width: 100% !important;
      //height: 100% !important;
      //border: 12px solid rgb(0, 255, 98) !important;
    }
  }
  & .login-screen-title {
    float: left;
    align-self: center;
    justify-self: center;
    padding-left: 4%;
    width: 50% !important;
    height: 100% !important;
    //border: 12px solid rgb(255, 0, 149) !important;

    & h1 {
      padding-top: 15%;
      padding-left: 0%;
      padding-bottom: 0%;

      color: #fff;
      font-family: "Lato", sans-serif;
      font-size: 40px;
    }

    & p {
      font-family: "Lato", sans-serif;
      font-size: 20px;
      font-style: normal;
      color: #fff;
      font-weight: normal;
      line-height: 19px;
    }
  }
}
</style>