<template>
  <div >
    <v-card outlined class="chart-line-container">
      <div class="p-2">
        <apexchart
          width="800"
          :height="graph_height"
          type="line"
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
      type: "scrollline2d",
      width: "500",
      height: "300",
      graph_height: '',
      series: [
        {
          name: "Pontuação",
          data: [1, 2, 3, 3, 4, 3, 2, 4, 1], // pontuacao
        },
      ],
      chartOptions: {
        chart: {
          events: {
          markerClick: function(event, chartContext, { seriesIndex, dataPointIndex, config}) {
            // ...
            console.log(event, chartContext, { seriesIndex, dataPointIndex, config})
            }
      },
      height: 350,
      type: "line",
      zoom: {
          enabled: false,
      },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        
            width: 4,
            curve: 'smooth'
          
      },
      title: {
        text: "Pontuação nas avaliações do ano de 2020",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      },
    };
  },
  methods: {
    onDataPlotRollover: function (e) {
      //this.$refs.fc.chartObj.slicePlotItem(0);
    },
  },

  created(){
    this.graph_height = window.innerHeight - 580
  }
  };
</script>


<style lang="scss">
.chart-line-container{
  padding: 1%;
  border-color: #c8c8c8 !important; //TODO - add color variables sass file
  border-radius: 20px !important;
}
</style>