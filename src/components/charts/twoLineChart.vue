<template>
  <div >
    <v-card ref='graphHistory' outlined class="chart-line-container">
      <div class="p-2">
        <apexchart
          width="800"
          :height="graph_height"
          type="line"
          :options="_chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  //props:["_categories","_dataGraph"]
  //,
  props:{
    series: {
      type: Array,
      required: true
    },
    categories:{
      type: Array,
      required: true
    }
  },
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
      _chartOptions() {
        const _this = this
        return { 
          chart: {events: {
            markerClick: function(event, chartContext, { seriesIndex, dataPointIndex, config}) {
              // ...
              console.log(event, chartContext, { seriesIndex, dataPointIndex, config})
            }
          }},
          height: 350,
          type: "line",
          zoom: {
              enabled: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            
                width: 4,
                curve: 'smooth'
              
          },
          title: {
            text: "Score/Date",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: _this.categories,
          },
        }
      },
      _series() { 
        const _this = this
        return [
          {
            name: "Pontuação",
            data: this.data, // pontuacao
          },
      ]},
      
  },
 
  methods: {
    onDataPlotRollover: function (e) {
      //this.$refs.fc.chartObj.slicePlotItem(0);
    },
  },

  created(){
    this.graph_height = window.innerHeight - 580
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