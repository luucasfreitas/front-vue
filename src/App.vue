<template>
  <v-app>
    <side-bar></side-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/lib/SideBar.vue';

export default {
  name: 'App',

  components: {
    SideBar,
  },

};
</script>
