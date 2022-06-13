<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-5">
        <!-- inicio card info user -->
        <card-info-user />
      </div>
      <div class="col-7">
        <!-- inicio card info user -->
        <card-sensor-file-list />
      </div>
    </div>
  </div>
</template>

<script>
import CardInfoUser from "../components/cards/cardInfoUser.vue";
import CardSensorFileList from "../components/cards/cardSensorFileList.vue"

export default {
  components: {
    CardInfoUser,
    CardSensorFileList
  },
};
</script>

<style lang="scss">
</style>
