<template>
  <div id="tela-lista">
    <div>
      <h1>Lista de Pacientes</h1>
    </div>
    <div>
      <v-data-table
        :headers="headers"
        :items="individuos"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Nome",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Idade", value: "age", sortable: true },
        { text: "Data de Nascimento", value: "dataNasc" },
      ],
      individuos: [
        {
          name: "Maria da Silva",
          age: 65,
          dataNasc: new Date(),
        },
        {
          name: "Maria da Silva",
          age: 80,
          dataNasc: new Date(),
        },
        {
          name: "Maria da Silva",
          age: 50,
          dataNasc: new Date(),
        },
        {
          name: "Maria da Silva",
          age: 69,
          dataNasc: new Date(),
        },
      ],
    };
  },
};
</script>

<style>
.elevation-1 {
  margin-left: 4%;
  margin-right: 4%;
}
h1 {
  padding: 4%;
}
</style>