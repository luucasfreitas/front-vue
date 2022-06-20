<template>
  <v-card class="card" v-if='isLoading' :height='cardHeight' outlined>
    <v-container class='fill-height'>
      <v-row class=" fill-height" align-content="center" justify="center">
        <v-col class="text-subtitle-1 text-center" cols="12">
          Carregando os dados
        </v-col>
        <v-col cols="6">
          <v-progress-linear color="blue" indeterminate rounded height="6"></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-card v-else class="card" :height='cardHeight' outlined>
    <div class='card-container'>
      <v-card-title ref="cardTitle">
        Lista de arquivos
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <div class='list-container'>
        <v-data-table class='table' :items="fileList" :height="tableHeight" overflow-y-auto hide-default-footer
          :headers="headers" :search="search">
          <template v-if='_isChartLoading' v-slot:item.actions>
            <v-icon disabled color="blue" small class="mr-2">
              mdi-eye
            </v-icon>
          </template>
          <template v-else v-slot:item.actions="{ item }">
            <v-icon color="blue" small class="mr-2" @click='handleFileClick(item)'>
              mdi-eye
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
  props: { fileList: Array, cardHeight: Number, headers: Array, isLoading: Boolean },
  data: () => ({
    search: '',
    tableHeight: '',
    outlierColor: '#ce8a3c',
    normalColor: '#3175d3',
    chartLabels: ["Tremor nível 1", "Tremor nível 2", "Tremor nível 3", "Tremor nível 4", "Tremor nível 5"]
  }),
  updated() {
    if (!this._isChartLoading) {
      this.tableHeight = this.cardHeight - this.$refs.cardTitle.clientHeight;
    }
  },
  computed: {
    ...mapState("session", ["token"]),
    ...mapState("sensor", ["isChartDataLoading", "fileSelected", "tremor", "tremorLevelData"]),
    _token() {
      return this.token
    },
    _isChartLoading() {
      return this.isChartDataLoading
    },
    _fileSelected() {
      return this.fileSelected
    },
    _tremor() {
      return this.tremor
    },
    _tremorLevelData() {
      return this.tremorLevelData
    },
  },
  methods: {
    ...mapActions('sensor', [
      "selectFile",
      "loadHistogramData",
      "setChartLoading",
      "setTremorLevelData",
    ]),
    getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    },
    setFileData(tremor) {
      let tremorCopy = {
        ...tremor
      }
      let result = {
        outliers: [],
        yaxis: [],
        outlierReference: '',
        normalReference: '',
        isOutlierChart: false,
        colors: []
      }
      delete tremorCopy["min_value"]
      delete tremorCopy["max_value"]
      result.outlierReference = this.setSeriesName(this.getKeyByValue(tremor, Math.max(...Object.values(tremorCopy))))
      for (let i = 0; i < 5; i++) {
        const min = Math.min(...Object.values(tremorCopy))
        const max = Math.max(...Object.values(tremorCopy))
        if (max * 0.01 > min) {
          result.isOutlierChart = true
          let maxKey = this.getKeyByValue(tremor, max)
          result.outliers.push(maxKey)
          delete tremorCopy[maxKey]
        } else {
          result.normalReference = this.setSeriesName(this.getKeyByValue(tremor, Math.max(...Object.values(tremorCopy))))
          result.colors = this.setColors(result.outliers)
          break
        }
        result.yaxis.push({
          seriesName: result.outlierReference,
          title: { text: "Tempo(segundos)" },
          axisTicks: { show: true, color: this.outlierColor },
          axisBorder: { show: true, color: this.outlierColor },
        })
        result.yaxis.push({
          seriesName: this._tremorLevelData.normalReference,
          opposite: true,
          axisTicks: { show: true, color: this.normalColor },
          axisBorder: { show: true, color: this.normalColor },
          showAlways: true
        })
        this.chartLabels.forEach(label => {
          if (label != result.outlierReference && label != result.normalReference) {
            result.yaxis.push({ seriesName: label, show: false })
          }
        });
      }
      return result
    },
    setSeriesName(reference) {
      switch (reference) {
        case 'T1':
          return 'Tremor nível 1'
        case 'T2':
          return 'Tremor nível 2'
        case 'T3':
          return 'Tremor nível 3'
        case 'T4':
          return 'Tremor nível 4'
        case 'T5':
          return 'Tremor nível 5'
      }
    },
    setColors(outliers) {
      const tremorCopy = {
        ...this._tremor
      }
      let colors = []
      delete tremorCopy['min_value']
      delete tremorCopy['max_value']
      Object.keys(tremorCopy).forEach(key => {
        if (outliers.includes(key)) {
          colors.push(this.outlierColor)
        } else {
          colors.push(this.normalColor)
        }
      })
      return colors
    },
    async handleFileClick(file) {
      if (file.nome_arquivo == this._fileSelected.nome_arquivo) {
        return
      }
      this.selectFile(file)
      this.setChartLoading(true)
      await this.loadHistogramData({ token: this._token, filename: file.nome_arquivo })
      this.setTremorLevelData(this.setFileData(this._tremor))
      this.outlierName = this.setSeriesName(this._tremorLevelData.outlierReference)
      this.normalName = this.setSeriesName(this._tremorLevelData.minimumReference)
      this.setChartLoading(false)
    },
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
