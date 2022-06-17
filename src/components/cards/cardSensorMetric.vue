<template>
  <v-card color='#3175D3' class="card-metric" outlined>
    <div class='card-metric-container'>
      <v-card-title ref="cardTitle">
        <p class="card-title">{{ metric }}</p>
      </v-card-title>
      <v-card-text>
        <p class="card-text">{{ value }}</p>
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
export default {
  props: { metric: String, value: Number }
}
</script>
<style>
.card-metric {
  width: fit-content;
  overflow: hidden;
  border: 1px solid #E8E8E8 !important;
  border-radius: 20px !important;
  align-items: center;
}

.card-metric-container {
  padding: 20px;
}

.card-title {
  font-size: 36px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  color: white;
  text-align: center;
}

.card-text {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  color: white;
}
</style>
