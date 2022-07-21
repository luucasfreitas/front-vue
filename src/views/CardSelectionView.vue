<!--TODO: Revisar se existe uma forma melhor de manter as imagens resposivas-->
<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <p class="text-h4 text-center font-weight-bold">{{ _title }}</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="(card, index) in cardsData"
        :key="index"
        cols="12"
        md="6"
        lg="6"
        xl="6"
      >
        <v-card
          min-height="294"
          min-width="210"
          hover
          class="pa-10 mx-16 my-12 rounded-lg"
          style="background: linear-gradient(rgba(49, 117, 211, 1), rgba(85, 144, 224, 1))"
          @click="handleCardClick(card)"
        >
          <v-img
            contain
            :src="getImgUrl(card.img)"
            :height="imgHeight"
            v-resize="calculateHeight"
          ></v-img>
          <v-card-title
            class="justify-center pt-10 font-weight-bold white--text text-h5"
          >
            {{ card.title }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      cardsData: [
        {
          title: "UPDRS",
          img: "updrs_card"
        },
        {
          title: "Sensor",
          img: "sensor_card"
        }
      ],
      pageHeight: null,
      routeName: ""
    };
  },

  computed: {
    ...mapState("session", ["token", "loginId"]),
    ...mapGetters("cardSelectionView", ["getTitle"]),
    _title() {
      return this.getTitle;
    },

    _loginId() {
      return this.loginId;
    },
    _token() {
      return this.token;
    },
    imgHeight: function() {
      var offset = 320;
      return this.pageHeight - offset;
    },
    mounted: function() {
      return this.calculateHeight();
    }
  },
  methods: {
    handleCardClick: function(card) {
      if (card.title == "UPDRS") {
        this.$router.push("patients/updrs_patients");
      } else {
        this.$router.push("patients/sensor_patients");
      }
    },
    getImgUrl: function(img) {
      var images = require.context("../assets/", false, /\.svg$/);
      return images("./" + img + ".svg");
    },
    calculateHeight: function() {
      var body = document.body;
      var html = document.documentElement;

      this.pageHeight = Math.max(
        body.offsetHeight * 0.8,
        html.clientHeight * 0.8,
        html.offsetHeight * 0.8
      );
    }
  }
};
</script>

<style lang="scss"></style>
