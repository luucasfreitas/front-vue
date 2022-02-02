<template>
  <div class="small">
    <line-chart ref="chart" :chartdata="datacollection" :options="datacollection.options"></line-chart>
    <v-btn @click="fillData()">Randomize</v-btn>
  </div>
</template>

<script>
  import LineChart from './Chart.vue'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    methods: {
      
      fillData () {
        this.datacollection = {
            labels: ['January', 'February','d','r','w','w','w','w','w','w','w'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 20, 10, 23,7,7,7,7,7,7,7,7,7,7,7,7,7,6,5,6,5,5,5,55,12]
            },
            
          ],
        options: {
          responsive: true,
          maintainAspectRatio: false,
             onClick: function(event, elementsAtEvent) {
               debugger
              //console.log("event",event, elementsAtEvent, this);
              //debugger
             //console.log("element", this.getElementsAtEvent(event))
              let valueX = null, valueY = null;
              for (let scaleName in this.scales) {
                let scale = this.scales[scaleName];
                if (scale.isHorizontal()) {
                  valueX = scale.getValueForPixel(event.offsetX);
                } else {
                  valueY = scale.getValueForPixel(event.offsetY);
                }
              }
      //console.log(event.offsetX, valueX, null, event.offsetY, valueY);
    },
        }
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    },
    mounted () {
      this.fillData()
     
    },
    created(){
       this.$refs.canvas.onclick = function(evt) {
      
        //console.log(this.$data._chart.getElementsAtEvent(evt))

      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>