<template>
  <v-app-bar app color="#3175d3" dark id="background-bar">
    <div class="d-flex align-center pr-4"></div>
    <v-icon large @click="goBack()" >mdi-arrow-left-circle-outline</v-icon>
    <div class='pl-4 pt-4' style="width:12%" >
              <v-select dense class="" placeholder="Language" :items="language">

              </v-select>
    </div>

    <v-spacer></v-spacer>

    <div class="mr-1">
      <span class="nome-usuario">Olá, {{ nome_fulano }}</span>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      nome_fulano: "Jerson Mendes",
      language: [
          'Portuguese',
          'English'
      ]
    };
  },
  methods:{
    goBack() {
       this.$router.go(-1) 
    }
  }
};
</script>
<style>
.nome-usuario {
  float: left;
  padding: 10px;
}
.shrink-mr-2 {
  float: left;
}
</style>
