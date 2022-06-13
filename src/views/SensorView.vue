<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-5">
        <card-info-user />
      </div>
      <div class="col-7">
        <card-sensor-file-list />
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <card-sensor-column-chart />
      </div>
      <div class="col-3"
        style='display: flex;flex-direction: column ;justify-content: space-between;align-items: center'>
        <card-sensor-metric />
        <card-sensor-metric />
      </div>
    </div>
  </div>
</template>

<script>
import CardInfoUser from "../components/cards/cardInfoUser.vue";
import CardSensorFileList from "../components/cards/cardSensorFileList.vue"
import CardSensorColumnChart from "../components/cards/cardSensorColumnChart.vue"
import CardSensorMetric from "../components/cards/cardSensorMetric.vue"

export default {
  components: {
    CardInfoUser,
    CardSensorFileList,
    CardSensorColumnChart,
    CardSensorMetric
  },
};
</script>

<style lang="scss">
</style>
