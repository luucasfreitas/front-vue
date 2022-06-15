<template>
  <v-card class="card" :height='card_height' outlined>
    <div class='card-container'>
      <v-card-text class='chart-container'>
        <apexchart :height='card_height - 20' :options="_chartOptions" :series="_series">
        </apexchart>
      </v-card-text>
      <div class='list-container'>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    card_height: ''
  }),
  computed: {
    ...mapState("sensor", ["tremor"]),

    _tremor() {
      return this.tremor
    },
    _chartOptions() {
      return {
        chart: {
          type: 'bar',
        },
        xaxis: {
          categories: ['T1', 'T2', 'T3', 'T4', 'T5'],
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: true,
            style: {
              fontFamily: "Lato",
              fontWeight: 700
            }
          },
          title: {
            text: 'Níveis de tremor',
            offsetY: -25,
            style: {
              fontSize: '14px',
              fontFamily: "Lato",
              fontWeight: 700
            }
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              fontFamily: "Lato",
              fontWeight: 700
            }
          },
          title: {
            text: 'Tempo (segundos)',
            style: {
              fontSize: '14px',
              fontFamily: "Lato",
              fontWeight: 700
            }
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " segundos"
            }
          }
        },
      }
    },
    _series() {
      return [
        {
          name: "Tempo",
          data: [
            {
              x: 'Tremor nível 1',
              y: this._tremor.T1
            },
            {
              x: 'Tremor nível 2',
              y: this._tremor.T2
            },
            {
              x: 'Tremor nível 3',
              y: this._tremor.T3
            },
            {
              x: 'Tremor nível 4',
              y: this._tremor.T4
            },
            {
              x: 'Tremor nível 5',
              y: this._tremor.T5
            },
          ]
        },
      ];
    },
  },
  created() {
    this.card_height = window.innerHeight - 580;
  },
}
</script>
<style>
.card {
  border: 1px solid #E8E8E8 !important;
  border-radius: 20px !important;
}
</style>
