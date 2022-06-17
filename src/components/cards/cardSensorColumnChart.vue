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
  <v-card class="card" v-else-if='(!_isLoading)' :height='cardHeight' outlined>
    <v-card-text>
      <apexchart :height='cardHeight - 20' :options="chartOptions" :series="chartSeries">
      </apexchart>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    chartOptions: Object,
    chartSeries: Array,
    cardHeight: Number
  },
  computed: {
    ...mapState("sensor", ["isChartDataLoading"]),
    _isLoading() {
      return this.isChartDataLoading
    }
  }
}
</script>
<style>
.card {
  border: 1px solid #E8E8E8 !important;
  border-radius: 20px !important;
}
</style>
