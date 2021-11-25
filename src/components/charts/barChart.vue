<template>
  <div >
    <v-card outlined class="chart-bar-container">
      <div >
        <apexchart
          :width="graph_width"
          :height="height"
          :type="type"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
//TODO - revisar prop altura
export default {
  // props:{
  //   series: {
  //     type: Array,
  //     required: true
  //   },
  //   categories:{
  //     type: Array,
  //     required: true
  //   }
  // },
  data() {
    return {
      window_width : '',
      type: "bar",
      graph_width: '',
      width: "600",
      height: "120",
    };
  },
  computed: {
    ...mapState('results', ['scoreHistoryGraphData', 'partsAssessSelected']),

    chartOptions() {
        return {
          chart: {
            type: 'bar',
            height: 700,
            border: false,
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              horizontal: true,
              width:1
            }
          },
          dataLabels: {
            enabled: false
          },
          line:{
            width:10
          },
          xaxis: {
            categories: this.categories
          }
        }
    },
    series(){
      return  [{
            name: "Pontuação",
            data: this.partsAssessSelected.data
          }]
    },
    categories(){
      return ['PARTE 1', 'PARTE 2', 'PARTE 3', 'PARTE 4'] // TODO - traslate
    }
  },
  methods: {
    onDataPlotRollover: function (e) {
      //this.$refs.fc.chartObj.slicePlotItem(0);
    },
  },

  created(){
    this.window_width = window.innerWidth
    this.graph_width = this.window_width - 236

  }
};
</script>

<style lang="scss">
.chart-bar-container{
  padding: 0.5%;
  border-color: #c8c8c8 !important; //TODO - add color variables sass file
  border-radius: 20px !important;
}
</style>