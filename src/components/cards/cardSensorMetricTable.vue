<template>
  <v-card class="card" v-if='_isLoading' :height='cardHeight' outlined>
    <v-container class='fill-height'>
      <v-row class=" fill-height" align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
          Carregando os dados
        </v-col>
        <v-col cols="6">
          <v-progress-linear color="blue" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <v-card :height="cardHeight" v-else-if="!_isLoading" overflow-y-auto class="card-metric" outlined>
    <div class='card-metric-container'>
      <v-card-title ref="cardTitle">
        Estatísticas descritivas
      </v-card-title>
      <v-card-text>
        <v-simple-table :height="tableHeight">
          <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Métrica
                    </th>
                    <th class="text-left">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(metric, key) in fileSelected.metrics"
                    :key="metric.name"
                  >
                    <td>{{ key }}</td>
                    <td>{{ metric }}</td>
                  </tr>
                </tbody>
              </template>
        </v-simple-table>      
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
  import {mapState} from "vuex"

export default {
  data() {
    return {
      tableHeight: 0
    }
  },
  computed: {
    ...mapState("sensor", ["isChartDataLoading"]),
    _isLoading() {
      return this.isChartDataLoading
    }
  },
  props: {fileSelected: Object, cardHeight: Number},
  created() {
    this.tableHeight = this.cardHeight * 0.85
  },
}
</script>
<style>
.card-metric {
  width: auto;
  overflow: hidden;
  border: 1px solid #E8E8E8 !important;
  border-radius: 20px !important;
  align-items: center;
}

.card-metric-container {
  padding: 20px;
}

.card-title {
  font-size: 36px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  color: white;
  text-align: center;
}

.card-text {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  color: white;
}
</style>
