<template>
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="265px"
    >
      <v-card class="dialog-card">
        <v-card-text style="height: auto;">
          <v-radio-group
            v-model="language"
            column 
            v-for="lang in languages" v-bind:key="lang.value"
            @change="choose_language(lang)"
          >
          <div class="row">
            <div class="col pr-3">
              <v-radio
                :label="lang.description"
                :value="lang.value" />
            </div>
            <div class="col m0 pl-4">
              <flag :squared="squared" :iso="lang.icon" class="flag-dialog" />
            </div>
          </div>
            
            
          </v-radio-group>
        </v-card-text>
      </v-card>

    </v-dialog>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        squared: true,
        language: '',
        dialog: true,
        languages: [
          {
            value:'pt-br',
            description:  'Português',
            icon:'br'
          },
          {
            value:'en-us',
            description:  "Inglês",
            icon: 'us'
          },
        ]
      }
    },
    methods:{
      ...mapActions("lang", ["setLang"]),
      choose_language(){
        this.setLang(this.language)
        this.dialog = false
      }
    }
  }
</script>

<style lang="scss">
 
  .flag-dialog {
    font-size: 37px;
    margin-bottom: 14px;
    border-radius: 17px;
  }
  .dialog-card {
    padding-top: 24px;
  }

  
</style>