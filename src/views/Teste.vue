<template>
  <div :style="textoAdionalCss">
     
{{ nome }}
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
      :disabled="disabled"
    >
      
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            OVERLINE
          </div>
          <v-list-item-title class="text-h5 mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
        >
          Button
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn
      elevation="2"
      @click="disableCard()"
    >
    desabilitar
    </v-btn>

  </div>
</template>

<script>

export default {
    data() {
        return {
            username_screen: '',
            password_screen: '',
            disabled: false ,
            nome: "joao",
            textoAdionalCss: ""
        }},
    computed: {
        
    },
    methods: {
        disableCard(){
          this.disabled = !this.disabled
          this.nome = this.nome + "OK"
          this.textoAdionalCss = "color: yellow;"
        }
    },
};
</script>

<style>
</style>