<template>
  <div >
    <v-card ref='graphHistory' outlined class="chart-line-container" color="#3175D3" max-width="1000" >
      <div class="">
        <apexchart
          :width="window_width"
          :height="graph_height"
          type="line"
          :options="_chartOptions"
          :series="_series"
          class="ml-1"
        ></apexchart>
      </div>
    </v-card>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  //props:["_categories","_dataGraph"]
  //,
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
  data(){
    return {
     type: "scrollline2d",
      width: "500",
      height: "300",
      graph_height: '',
      _chart: {
            events: {
            markerClick: function(event, chartContext, { seriesIndex, dataPointIndex, config}) {
              // ...
              console.log(event, chartContext, { seriesIndex, dataPointIndex, config})
            }
          }
      }
  }
  },
  computed:{
      ...mapState('results', ['scoreHistoryGraphData', 'partsAssessSelected']),
      ...mapGetters('historyAssessComponents', ['gethistoryGraphTitle']),
      _chartOptions() {
        return { 
          height: 450,
          type: "line",
          chart: {
            background: '#3175D3',
            
    foreColor: '#fff',
toolbar: {
        show: true,},
            events: {
              markerClick: function(event, chartContext, { seriesIndex, dataPointIndex, config}) {
                // ...
                console.log(event, chartContext, { seriesIndex, dataPointIndex, config})
              }
            }
          },
          theme: {
      mode: 'dark',},  
          zoom: {
              enabled: false,
          },
          dataLabels: {
            enabled: false,
          },
          labels : {
            style: {
          colors: "#fff"
        }
          },
          colors: ["#fff"],
          stroke: {
            
                width: 4,
                curve: 'smooth'
              
          },
          title: {
            text: this.gethistoryGraphTitle,
            align: "center",
            style: {
              color: '#fff'
            }
          },
          grid: {
            show: false,
            row: {
              colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: this.scoreHistoryGraphData.categories,
            
          },
          yaxis: {
            min: 0,
            max:200,
            tickAmount: 4
          },
          markers: {
            size: 7,
            colors: 'white',
            strokeColors: 'gray',
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: undefined,
              sizeOffset: 3
            }
          },
          legend : {
            labels: {
          colors: '#fff',
          useSeriesColors: false
      },
          }
        }
      },
      _series() { 

       // this.twoLineChartProps.series.data = this.scoreHistoryGraphData.data
        //this.twoLineChartProps.categories = this.scoreHistoryGraphData.categories

        return [
          {
            name: "Pontuação",
            data: this.scoreHistoryGraphData.data, // pontuacao
          },
      ]},
      _categories(){
          this.scoreHistoryGraphData.categories
      }
  },
 
  methods: {
    onDataPlotRollover: function (e) {
      //this.$refs.fc.chartObj.slicePlotItem(0);
    },
    
  },

  created(){
    this.graph_height = window.innerHeight - 610
    // if(this.scoreHistoryGraphData.categories.lenth  == 0){
    //   this.$forceUpdate;
    //   console.log(  "updated")
    //   setTimeout(()=>{
    //     if(this.scoreHistoryGraphData.categories.lenth  == 0){
    //       this.$forceUpdate;
    //     }
    //   }, 1000)
    // }
  },
};
  // watch: {
  //       _data: function(newVal) { 
  //          this.data = newVal
  //       },
  //        _properties: function(newVal) { 
  //          this.properties = newVal
  //       }
  //     }
  // };
</script>


<style lang="scss">
.chart-line-container{
  padding: 1%;
  border-color: #c8c8c8 !important; //TODO - add color variables sass file
  border-radius: 20px !important;
}
</style>