<template>
  <div>
    <div class="row">
      <div class="col">
        <!-- inicio card info user -->
        <card-info-user />
      </div>
      <!-- fim card info user -->
      <div class="col">
        <two-line-chart 
          :class="showGraphHistory"
          :categories="twoLineChartProps.categories"
          :series="twoLineChartProps.series" />
      </div>
    </div>
    <div class="row">
       <bar-chart 
        :categories="barChartProps.categories"
        :series="barChartProps.series"
       />
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
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    data(){
      return{
        showGraphHistory: "hidden",
        twoLineChartProps:{
          series:[
            {
              name: "Pontuação",
              data: [
                  134,
                  122,
                  191,
                  134,
                  122,
                  191,
              ], // pontuacao
            },
          ],
          categories: [
        "2021-04-27",
        "2021-06-09",
        "2021-07-27",
        "2021-04-28",
        "2021-06-10",
        "2021-07-29"
            ]
        },
        barChartProps:{
          series:[{
            data: [2, 3, 4, 1]
          }],
          categories:['PARTE 1', 'PARTE 2', 'PARTE 3', 'PARTE 4'],
        },
        graphData:[],
        graphCategories:[]
      }
    },
    computed:{
      ...mapGetters('resultsView', ['getUpdsParts']),
      ...mapState('results', ['scoreHistoryGraphData']),

      _scoreHistory (){
        return this.scoreHistoryGraphData
      },
      _updrsParts (){
        return this.getUpdsParts
      }
    },
    methods:{
       ...mapActions('results', [
      "getScoreHistory",
    ]),
    },
    components:{
        CardInfoUser,
        TwoLineChart,
        // RandomChart,
        BarChart,
        CardPart
    },
    created(){
      this.getScoreHistory()
      this.showGraphHistory = ''
    }
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