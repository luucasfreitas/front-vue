<template>
  <div>
    <div class="row">
      <div class="col">
        <!-- inicio card info user -->
        <card-info-user />
      </div>
      <!-- fim card info user -->
      <div class="col">
        <two-line-chart/>
      </div>
    </div>
    <div class="row">
       <bar-chart/>
    </div>
    <div class="row parts" >
       <div v-for=" part in _updrsParts" v-bind:key="part">
        <card-part :title="part"> </card-part>
       </div>
    </div>
  </div>
</template>

<script>
import CardInfoUser from '../components/cards/cardInfoUser.vue'
import TwoLineChart from '../components/charts/twoLineChart.vue'
import BarChart from '../components/charts/barChart.vue'
import CardPart from '../components/cards/cardPart.vue'
import PageTitle from '../components/lib/PageTitle.vue'

import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    data(){
      return{
        showGraphHistory: "hidden",
        twoLineChartProps:{
          series:[
            {
              name: "Pontuação",
              data: [], // pontuacao
            },
          ],
          categories: []
        },
        barChartProps:{
          series:[{
            data: []
          }],
          categories:['PARTE 1', 'PARTE 2', 'PARTE 3', 'PARTE 4'],
        },
        graphData:[],
        graphCategories:[]
      }
    },
    computed:{
      ...mapGetters('resultsView', ['getUpdsParts']),
      ...mapState('results', ['scoreHistoryGraphData', 'partsAssessSelected']),

      _scoreHistory (){
        return this.scoreHistoryGraphData
      },
      _updrsParts (){
        return this.getUpdsParts
      },
      _partsAssessSelected (){
        return this.partsAssessSelected
      }
    },
    methods:{
       ...mapActions('results', [
      "getScoreHistory",
      ]),
      loadScoreHistoryGraph (){
        //debugger
        this.twoLineChartProps.series.data = this.scoreHistoryGraphData.data
        this.twoLineChartProps.categories = this.scoreHistoryGraphData.categories
        this.loadPartsGraph()

      },
      loadPartsGraph(){
        this.barChartProps.series.data = this.partsAssessSelected.data
      }
    },
    components:{
        CardInfoUser,
        TwoLineChart,
        BarChart,
        CardPart,
    },
    async created(){
      //this.loadScoreHistoryGraph()
      //this.showGraphHistory = ''
    },
 
};
</script>

<style lang="scss">

.parts {
  display: flex;
  flex-direction: row;
  width: 100% !important;
  justify-content: space-between;
  padding-left: 1% ;
  padding-top: 2%;
  div{
    max-width: 22%;
    border-radius: 25px !important;
  }
}
</style>