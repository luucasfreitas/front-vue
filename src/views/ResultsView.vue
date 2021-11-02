<template>
  <div>
    <div class="row">
      <div class="col">
        <!-- inicio card info user -->
        <card-info-user />
      </div>
      <!-- fim card info user -->
      <div class="col">
        <two-line-chart />
      </div>
    </div>
    <div class="row">
       <bar-chart />

    </div>
    <div class="row parts" >
       <!-- <random-chart /> -->
       <div v-for=" part in parts" v-bind:key="part">
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

export default {
    data(){
      return{
        parts : [
          'Experiências não motoras do dia-a-dia',
          'Experiências motoras do dia-a-dia',
          'Avaliação motora',
          'Complicações motoras'
        ]
      }
    },
    components:{
        CardInfoUser,
        TwoLineChart,
        // RandomChart,
        BarChart,
        CardPart

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