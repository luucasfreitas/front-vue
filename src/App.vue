<template>
  <v-app id="app">
      <router-view></router-view>
  </v-app>
</template>

<script>
// import SideBar from './components/lib/SideBar.vue';

export default {
  name: 'App',

  // components: {
  //   SideBar,
  // },

};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import '~bootstrap/dist/css/bootstrap.css';

#app {
   font-family: 'Lato', sans-serif;
  // font-weight: 24px;
 // -webkit-font-smoothing: antialiased;
 // -moz-osx-font-smoothing: grayscale;
 // text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
  .v-main__wrap {
    padding: 4% 6% 0 6%  !important;
   }
}
</style>
