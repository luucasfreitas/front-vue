<template>
  <div>
    <v-card
      ref="graphHistory"
      outlined
      class="chart-line-container"
      color="#3175D3"
      max-width="1000"
    >
      <div class="">
        <apexchart
          ref="chart"
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
import { mapGetters, mapState } from "vuex";

import eventBus from '../../events/EventBus'

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
  data() {
    return {
      type: "scrollline2d",
      width: "500",
      height: "300",
      graph_height: "",

      patternTotalScore : [52,52,128,24],
      _chart: {
      
      },
      marked: {
          size: 9,
          colors: ["white"],
          strokeColors: ["#95BAED"],
          strokeWidth: 4,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [{
              seriesIndex: 0,
              dataPointIndex: 0,
              fillColor: '#6FFC00',
              strokeColor: "#95BAED",
              size: 9,
              strokeWidth: 4,
              strokeOpacity: 0.9,
              strokeDashArray: 0,
              radius: 4,
              offsetX: 0,
              offsetY: 0,
              shape: "circle" // "circle" | "square" | "rect"
            }],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          showNullDataPoints: true,
          hover: {
            size: 8,
            sizeOffset: 3,
          },
        }
    };
  },
  computed: {
    ...mapState("results", ["scoreHistoryGraphData", "partsAssessSelected", "allParts"]),
    ...mapGetters("historyAssessComponents", ["gethistoryGraphTitle"]),
    _chartOptions() {
      return {
        height: 450,
        type: "line",
        chart: {
          background: "#3175D3",
          foreColor: "#fff",

          toolbar: {
            show: true,
          },
          events: {
            markerClick: this.onclickMouse
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 2,
            color: "#000",
            opacity: 0.2,  
          },
        },
        theme: {
          mode: "dark",
        },
        zoom: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        labels: {
          style: {
            colors: "#fff",
          },
        },
        colors: ["#95BAED", "green"],
        stroke: {
          width: 6,
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
        },
        title: {
          text: this.gethistoryGraphTitle,
          align: "center",
          style: {
            color: "#fff",
          },
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
          max: 200,
          tickAmount: 4,
        },
        markers: this.marked,
        legend: {
          labels: {
            colors: "#fff",
            useSeriesColors: false,
          },
        },
        fill: {
          type: "solid",
          
        },
      };
    },
    _series() {
      // this.twoLineChartProps.series.data = this.scoreHistoryGraphData.data
      //this.twoLineChartProps.categories = this.scoreHistoryGraphData.categories

      return [
        {
          name: "Pontuação",
          data: this.scoreHistoryGraphData.data, // pontuacao
        },
      ];
    },
    _categories() {
      this.scoreHistoryGraphData.categories;
    },
  },

  methods: {
    onDataPlotRollover: function (e) {
      //this.$refs.fc.chartObj.slicePlotItem(0);
    },
    onclickMouse: function (
              event,
              chartContext,
              { seriesIndex, dataPointIndex, config }
            ) {
              // ...
              // console.log("event", event)
              // console.log( "chatContext", chartContext);
              // console.log({
              //   seriesIndex,
              //   dataPointIndex,
              //   config,
              // })
              this.marked.discrete[0].dataPointIndex = dataPointIndex
              this.$refs.chart.updateOptions({markers: this.marked,})

              const {partI,
                partII,
                partIII,
                partIV,} = this.allParts[dataPointIndex]
              eventBus.$emit('change_parts_chat_options', [partI,
                partII,
                partIII,
                partIV,]) 
              //console.log("part",this.allParts[dataPointIndex], this.scoreHistoryGraphData)
            },
  },

  created() {
    this.graph_height = window.innerHeight - 610;
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
.chart-line-container {
  padding: 1%;
  border-color: #c8c8c8 !important; //TODO - add color variables sass file
  border-radius: 20px !important;
}
</style>