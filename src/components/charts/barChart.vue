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
      height: "170",
    };
  },
  computed: {
    ...mapState('results', ['scoreHistoryGraphData', 'partsAssessSelected']),

    chartOptions() {
        return {
          chart: {
            type: 'bar',
            height: 800,
            border: false,

//stacked: true,          //stackType: '100%'
          },
          
          plotOptions: {
            bar: {
              borderRadius: 7,
              horizontal: true,
              width:1
            }
          },
          dataLabels: {
            enabled: true,
            style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
        },
          },
          line:{
            width:11
          },
          xaxis: {
            type: "category",
            categories: this.categories,
            position:"bottom",
            labels: {
              show:true,
              horizontalAlign: "left",
            },
          },
          yaxis: {
            labels : {
              show: true,
              style: {
                  colors: [],
                  fontSize: '12px',
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  fontWeight: 800,
                  cssClass: 'apexcharts-yaxis-label',
              },
            }
          },
          title: {
            text: "Pontuação do paciente 02 Abr 2022 ",
            align: "left",
          },
        }
    },
    series(){
      return  [
          {
            name: "Pontuação",
            data: this.partsAssessSelected.data
          }
          ]
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
    this.graph_width = this.window_width - 155

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