<template>
  <v-card class="card" :height='card_height' outlined>
    <div class='card-container'>
      <v-card-title ref="cardTitle">
        Lista de arquivos
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-btn elevation="2">
          <v-icon>mdi-upload</v-icon>
        </v-btn>
      </v-card-title>
      <div class='list-container'>
        <v-data-table class='table' :height="table_height" :items='fileList' overflow-y-auto hide-default-footer
          :headers="headers" :search="search">
          <template v-slot:item.actions>
            <v-icon small class="mr-2">
              mdi-delete
            </v-icon>
          </template>

        </v-data-table>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    headers: [{
      text: 'Nome',
      align: "start",
      sortable: false,
      value: "name",
    },
    {
      text: 'Data',
      value: "date",
      sortable: true
    },
    {
      text: 'Ações',
      align: 'center',
      value: 'actions'
    }
    ],
    files: [],
    card_height: '',
    table_height: '',
  }),
  mounted() {
    this.table_height = this.card_height - this.$refs.cardTitle.clientHeight;
  },
  computed: {
    ...mapState('sensor', ["fileList", "fileSelected"]),
    ...mapState('session', ["token", "loginId"]),
    ...mapState('patients', ["patientSelected"]),

    _fileList() {
      return this.fileList;
    },
    _fileSelected() {
      return this.fileSelected;
    },
    _loginId() {
      return this.loginId
    },
    _token() {
      return this.token
    },
    _id() {
      return this.patientSelected.id
    }
  },
  methods: {

    ...mapActions('sensor', [
      "getFileList",
      "selectFile"
    ]),
    async loadFileList() {

      await this.getFileList({ token: this._token, loginId: this._loginId, id: this._id })
    },
    async handleFileList() {

      await this.loadFileList();
      this.files = this._fileList
    },
    async handleLoadStatistcs(file) {
      this.selectFile(file);
      await this.getScoreHistory();
    },
  },
  async created() {
    this.card_height = window.innerHeight - 580;
    await this.handleFileList();
  },
}
</script>
<style>
.list-container {
  display: flex;
  align-items: flex-start;
  padding-left: 16px;
}

.card {
  overflow: hidden;
  border: 1px solid #E8E8E8 !important;
  border-radius: 20px !important;
}

.table {
  width: 90%;
}
</style>
