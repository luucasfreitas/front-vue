<template>
  <div class="input-card-login" rounded>
    <div class="input-card-login-title pb-3">
      <h2>Login</h2>
    </div>
    <div class="input-card-login-inputs">
      <div>
        <v-text-field
            dense
            rounded
            solo
            v-model="usernameScreen"
            @change="setUsername({ username: usernameScreen })"
            :label="usernameLabel"
        />
      </div>
      <div>
        <v-text-field
            rounded
            dense
            solo
            v-model="passwordScreen"
            type="password"
            @change="setPassword({ password: passwordScreen })"
            :label="passwordLabel"
        />
      </div>
    </div>
    <div>
        <span style="font-size: 12px;">*Efetuar login com as credenciais do SIDABI</span>
    </div>
    <div class="input-card-login-actions pt-2">
      <v-btn
        color="#3175D3" 
        style="color: white;"
        rounded 
        @click="handleLogin()"> Entrar </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      usernameScreen: "",
      passwordScreen: "",
      usernameLabel: "Username",
      passwordLabel: "Password",
    };
  },
  computed: {
    ...mapState(["username", "password", "token","sessionAuth"]),
  },
  methods: {
    ...mapActions(["setUsername", "setPassword", "generateToken", "login"]),

    async handleLogin() {
      await this.generateToken();
      await this.login();
      await this.doLogin();

      

    },
    async doLogin(){
      if (this.sessionAuth) {
          //routeTo
          alert("foi")
          this.$router.replace('/home')
      }else{
          alert("nao foi")
      };
    }
  },

 
  created() {
      
    //console.log(this.$route.params.login); // 10
  },
};
</script>
<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Noto+Sans+JP:wght@100&family=Roboto:wght@300&display=swap');
.input-card-login {
  padding: 35px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 15px;
  max-height: 70%;
  justify-content: center;
  justify-items: center;
  -webkit-box-shadow: 0 10px 6px -6px rgb(130, 133, 134);
  -moz-box-shadow: 0 10px 6px -6px rgb(103, 104, 105);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.29);
  //box-shadow: 0 10px 6px -6px rgb(153, 214, 233);
  //border: 12px solid blue !important;
  & .input-card-login-title {
    & h2 {
      color: #3175D3;
      font-family: "Lato", sans-serif;
    }
   & h2:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: #3175D3;
    margin: 0 auto;
    }
  }
  & .input-card-login-inputs {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    & div {
      margin: 0;
    }
  }
}
</style>