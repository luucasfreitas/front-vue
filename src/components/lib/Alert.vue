<template>
  <v-alert v-model="show" :type="type" class="alert-customized">
    {{ message }}
  </v-alert>
</template>

<script>
import eventBus from "../../events/EventBus";

export default {
  data() {
    return {
      show: false,
      type: "warning",
      message: "Este é um componente de alerta !"
    };
  },
  methods: {
    disapearAfter() {
      const timeToDisapear = 5000;
      setTimeout(() => {
        this.show = false;
      }, timeToDisapear);
    },

    activeAlert() {
      this.show = true;
    }
  },
  mounted() {
    // adding eventBus listener
    eventBus.$on("alert-error", message => {
      this.message = message;
      this.type = "error";
      this.activeAlert();
      this.disapearAfter();
    });

    eventBus.$on("alert-warning", message => {
      this.message = message;
      this.type = "warning";
      this.activeAlert();
      this.disapearAfter();
    });

    eventBus.$on("alert-info", message => {
      this.message = message;
      this.type = "success";
      this.activeAlert();
      this.disapearAfter();
    });
  }
};
</script>

<style>
.alert-customized {
  position: absolute !important;
  width: 50%;
  z-index: 9999;
  right: 0;
  margin: 0.3% 0.3% 0 auto;
}
</style>
