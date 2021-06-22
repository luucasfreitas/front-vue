<template>
  <v-app>
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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;700&family=Noto+Sans+JP:wght@100&family=Roboto:wght@300&display=swap');
  v-App {
  font-family: 'Lato', sans-serif;
}
</style>
