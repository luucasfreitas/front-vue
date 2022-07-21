<template>
  <v-app-bar app color="#3175d3" dark id="background-bar">
    <div class="d-flex align-center pr-4"></div>
    <v-icon large @click="goBack()">mdi-arrow-left-circle-outline</v-icon>
    <div class="pl-4 pt-4" style="width:12%">
      <!-- <v-select dense class="" placeholder="Language" :items="language">

              </v-select> -->
      <button @click="openDialogLang()">
        <flag :iso="getLangIso" class="flag-sidebar" />
      </button>
    </div>

    <v-spacer></v-spacer>

    <div class="mr-1 d-flex align-center">
      <span class="nome-usuario">{{ _username }}</span>
      <v-icon large @click="openDialogLogout()">mdi-logout</v-icon>
    </div>
  </v-app-bar>
</template>
<script>
import { mapState } from "vuex";
import eventBus from "../../events/EventBus";

export default {
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      nome_fulano: "Jerson Mendes",
      language: ["Portuguese", "English"]
    };
  },
  computed: {
    ...mapState("lang", ["lang"]),
    ...mapState("session", ["username"]),
    getLangIso() {
      const iso = this.lang.split("-")[1];
      return iso;
    },
    _username() {
      return this.username;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    openDialogLang() {
      eventBus.$emit("open-dialog-language");
    },
    openDialogLogout() {
      eventBus.$emit("open-dialog-logout");
    }
  }
};
</script>
<style>
.flag-sidebar {
  font-size: 35px;
  margin-bottom: 17px;
  border-radius: 17px;
  border: 1px solid white;
}
.nome-usuario {
  float: left;
  padding: 10px;
}
.shrink-mr-2 {
  float: left;
}
</style>
