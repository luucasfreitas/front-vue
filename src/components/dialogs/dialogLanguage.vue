<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-divider></v-divider>
        <v-card-text style="height: auto;">
          <v-radio-group
            v-model="dialogm1"
            column 
            v-for=" lang in languages" v-bind:key="lang.value"
          >
            <v-radio
              :label="lang.description"
              :value="lang.value"
            ></v-radio>
            
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
         <v-card-actions>
          <!-- <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn> -->
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: true,
        languages: [
            {value:'pt-br', description:  "Português"},
            {value:'en-us', description:  "Inglês"},

        ]
      }
    },
  }
</script>