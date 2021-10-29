<template>
  <div >
    <v-card outlined class="chart-bar-container">
      <div >
        <apexchart
          :width="graph_width"
          height="120"
          type="bar"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      window_width : '',
      type: "scrollline2d",
      graph_width: '',
      width: "600",
      height: "100",
        series: [{
            data: [2, 3, 4, 1]
          }],
          chartOptions: {
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
              categories: ['PARTE 1', 'PARTE 2', 'PARTE 3', 'PARTE 4']
            }
          },
    };
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