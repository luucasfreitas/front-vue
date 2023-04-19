<template>
  <v-card class="card" :height="cardHeight" outlined>
    <div class="card-container">
      <v-card-title ref="cardTitle">
       Filtro
      </v-card-title>
      <div class="form-container">
        <v-select
          v-model="selectedOption"
          :items="['Com estímulo', 'Sem estímulo']"
          :label="_search"
          item-value="value"

        ></v-select>
        <v-btn color="primary" @click="handleSubmit">{{ _submit }}</v-btn>
      </div>
    </div>
  </v-card>
</template>


<script>
import { mapState, mapActions, mapGetters } from "vuex";
import eventBus from "../../events/EventBus";

export default {
  props: {
    cardHeight: Number,
    submitText: String,
    searchLabel: String,
    stimulusLabel: String
  },
  data: () => ({
    selectedOption: null,
    stimulusOption: null
  }),
  computed: {
    _search() {
      return this.searchLabel || "Tipo de Estímulo";
    },
    _submit() {
      return this.submitText || "Submit";
    },
    stimulusOptions() {
      return [
        { text: "Com estímulo", value: "com" },
        { text: "Sem estímulo", value: "sem" }
      ];
    }
  },
  methods: {
    handleSubmit() {
      eventBus.$emit("form-submitted", { option: this.selectedOption, stimulus: this.stimulusOption });
    }
  }
};
</script>