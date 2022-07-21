<template>
      <div>
        <v-icon>mdi-exit-to-app</v-icon>
    <a @click="goBack()">back</a>
      <h1>Lista de Pacientes</h1>
    </div>
</template>

<script>
export default {
 methods:{
    goBack() {
       this.$router.go(-1) 
    }
  }
}
</script>

<style>

</style>
