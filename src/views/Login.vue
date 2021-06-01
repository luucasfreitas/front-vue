<template>
  <v-col>
    <div>
        <h1>
            {{username + password}}
        </h1>
        <p>
            {{token}}
        </p>
        <v-text-field
             v-model="username_screen"
             @change="setUsername({username:username_screen})"
            :label="'Username'"
        />
        <v-text-field
             v-model="password_screen"
             type="password"
             @change="setPassword({password:password_screen})"
            :label="'Password'"
        />

       <v-btn
  color="primary"
  elevation="3"
  large
  medium
  small
  x-large
  x-small
  @click="handleLogin()"
>
enviar</v-btn>
    </div>
  </v-col>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            username_screen: '',
            password_screen: ''
        }
    },
    computed: {
        ...mapState(["username", "password", 'token']),
    },
    methods: {
         ...mapActions(['setUsername', 'setPassword', 'generateToken', 'login']),

         async handleLogin(){
            await this.generateToken();
            await this.login()
         }
    },
};
</script>

<style>
</style>