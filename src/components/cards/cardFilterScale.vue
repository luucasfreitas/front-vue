<template>
  <v-sheet width="300" class="mx-auto">

    <v-form ref="form">
      <v-select v-model="select" :items="items" :rules="[v => !!v || 'Escolha a opção de estímulo']"
        label="Escolha o estímulo" required>
      </v-select>
      <div class="d-flex flex-column">
        <v-btn color="success" class="mt-4" block @click="validate">
          Filtrar
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      valid: true,
      select: null,

      // select: { tipoEstimulo: 'Sem Estímulo', valorEstimulo: '0' },
      items: [
        'Sem Estímulo', 'Com Estímulo'
      ],
    }
  },

  methods: {

    ...mapActions("scaleMca", ["getScoreScaleMca"]),
    ...mapActions("scaleSfss", ["getScoreScaleSfss"]),
    ...mapActions("scaleAes", ["getScoreScaleAes"]),
    ...mapActions("scaleMbss", ["getScoreScaleMbss"]),
    ...mapActions("scaleSam", ["getScoreScaleSam"]),
    ...mapActions("scaleStai", ["getScoreScaleStai"]),

    async validate() {
      const route_scale = this.$route.name;
      console.log("rota aqui");
      console.log(route_scale);
      console.log("rota aqui");

      let scaleId;
      let ts;
      if (this.select == 'Com Estímulo') {
        ts = 1;
      } else {
        ts = 0;
      }
      switch (route_scale) {
        case 'scaleMca':
          scaleId = 7;
          await this.$router.push(`/patients/scale/mca?stimulus=${ts}`);
          await this.getScoreScaleMca(scaleId);
          window.location.reload()
          break;

        case 'scaleSfss':
          scaleId = 8;
          await this.$router.push(`/patients/scale/sfss?stimulus=${ts}`);
          await this.getScoreScaleSfss(scaleId);
          window.location.reload()
          break;

        case 'scaleAes':
          scaleId = 9;
          await this.$router.push(`/patients/scale/aes?stimulus=${ts}`);
          await this.getScoreScaleAes(scaleId);
          window.location.reload()
          break;

        case 'scaleMbss':
          scaleId = 10;
          await this.$router.push(`/patients/scale/mbss?stimulus=${ts}`);
          await this.getScoreScaleMbss(scaleId);
          window.location.reload()
          break;

        case 'scaleSam':
          scaleId = 11;
          await this.$router.push(`/patients/scale/sam?stimulus=${ts}`);
          await this.getScoreScaleStai(scaleId);
          window.location.reload()
          break;

        case 'scaleStai':
          scaleId = 12;
          await this.$router.push(`/patients/scale/stai?stimulus=${ts}`);
          await this.getScoreScaleSam(scaleId);
          window.location.reload()

          break;
        default:
          break;
      }
    },
  },
}
</script>