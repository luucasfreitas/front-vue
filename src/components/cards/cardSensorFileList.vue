<template>
  <v-card class="card" :height='card_height' outlined>
    <div class='card-container'>
      <v-card-title ref="cardTitle">
        Lista de arquivos
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-btn elevation="2">
          <v-icon>mdi-upload</v-icon>
        </v-btn>
      </v-card-title>
      <div class='list-container'>
        <v-data-table class='table' :height="table_height" overflow-y-auto hide-default-footer :headers="headers"
          :search="search" :items="items">
          <template v-slot:item.actions>
            <v-icon small class="mr-2">
              mdi-delete
            </v-icon>
          </template>

        </v-data-table>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    headers: [{
      text: 'Nome',
      align: "start",
      sortable: false,
      value: "name",
    },
    {
      text: 'Data',
      value: "date",
      sortable: true
    },
    {
      text: 'Ações',
      align: 'center',
      value: 'actions'
    }
    ],
    items: [{
      name: 'arquivo1',
      date: '21/12/2021',
    },
    {
      name: 'arquivo2',
      date: '08/10/2021',
    },
    {
      name: 'arquivo3',
      date: '15/02/2022',
    },
    {
      name: 'arquivo4',
      date: '15/02/2022',
    },
    {
      name: 'arquivo5',
      date: '20/02/2022',
    },
    {
      name: 'arquivo6',
      date: '27/02/2022',
    },
    ],
    card_height: '',
    table_height: '',
  }),
  created() {
    this.card_height = window.innerHeight - 580;
  },
  mounted() {
    this.table_height = this.card_height - this.$refs.cardTitle.clientHeight;
  }
}
</script>
<style>
.list-container {
  display: flex;
  align-items: flex-start;
  padding-left: 16px;
}

.card {
  overflow: hidden;
  border: 1px solid #E8E8E8 !important;
  border-radius: 20px !important;
}

.table {
  width: 90%;
}
</style>
