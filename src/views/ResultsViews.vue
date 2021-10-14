<template>
  <div>
    <div class="row">
      <div class="col">
        <!-- inicio card info user -->
        <card-info-user />
      </div>
      <!-- fim card info user -->
      <div class="col"></div>
    </div>
    <div class="row"></div>
    <div class="row"></div>
  </div>
</template>

<script>
import CardInfoUser from '../components/cards/cardInfoUser.vue'
export default {
    components:{
        CardInfoUser
    }
};
</script>

<style>
</style>