<template>
  <div>
    <side-bar></side-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import SideBar from '@/components/lib/SideBar.vue';

export default {
  name: 'Base',

  components: {
    SideBar,
  },
  mounted() {
      console.log(this.$route.params.login); // 10
  },
};
</script>
