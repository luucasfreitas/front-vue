<template>
    <v-card class="card-progress-scale-sfss" 
        outlined 
        :width="graph_width"
        :height="300">
        <v-card-title class="m0 p0 pl-2">
            <p style="  font-size: 25px;
                        font-weight: bold;
                        font-family: 'Lato';
                        margin-left: auto;
                        margin-right: auto;">

                Escala Curta de Fluxo
            </p>
        </v-card-title>
        <v-card-text class="card-progress-scale-text">
            <div 
                v-for="part in data_parts" v-bind:key="part.label" class="line-progress-part">
                
                <span class="legend" style="min-width: 6% !important;">
                        {{ part.label }}
                    </span>
            
                <v-progress-linear 
                    :value="part.value *10"
                    :height="18"
                    class="progress_bar pb-0 mb-0"
                    rounded/> 
                    
                
                    <span class="legend pl-4 pb-2" style="min-width: 6% !important;">
                        {{ part.value }} %
                    </span>
            </div>
        </v-card-text>
        <v-card class="card-total" max-width="400" height="185" width="185" color="#3175D3">
            <v-card-text class="card-total-text" width="100%">

                <p class="text-h5" style="width: fit-content; color: white;font-size: 36px !important; padding: 10px; ">
                    Total
                </p>
                <div class="row parts">
                    <div>
                        <p class="text-h5" style="width: fit-content; color: white; padding: 10px; ">
                            {{ soma }}
                        </p>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-card>
   

</template>
<script>
import {mapGetters, mapState} from 'vuex'
import eventBus from '../../events/EventBus'

export default {
    //props: ["data"],
    data() {
        return {
            window_width: '',
            graph_width: '',
            //partsAssessSelected: [2, 3, 4, 6]
            patternTotalScore : [52,52,128,24],
            data_parts : [
            ],
            date: ''
        }
        
    },
    computed:{

        
    ...mapGetters("scaleViewSfss", ["getScaleParts", "getScalePartsNamesSfss"]),

    ...mapState("scale", ["partsScaleSelected"]),
    ...mapState("scaleSfss", ["partsScaleSelectedSfss"]),



    },
    methods: {
        handleUpdateValues({parts , date}) {
            const score = parts
            const pp = this.patternTotalScore
            const newScores = []

            for (let i = 0; i < this.patternTotalScore.length; i++) {
                const percentage = ( score[i] / pp[i]) * 100;
                newScores.push( Math.ceil(percentage))
                
            }   
            this.data_parts = [
                { label: this.getScalePartsNamesSfss[0], value: newScores[0] },
                { label: this.getScalePartsNamesSfss[1], value: newScores[1] },
                { label: this.getScalePartsNamesSfss[2], value: newScores[2] },
                { label: this.getScalePartsNamesSfss[3], value: newScores[3] },
                { label: this.getScalePartsNamesSfss[4], value: newScores[4] },
                { label: this.getScalePartsNamesSfss[5], value: newScores[5] },
                { label: this.getScalePartsNamesSfss[6], value: newScores[6] },
                { label: this.getScalePartsNamesSfss[7], value: newScores[7] },
                { label: this.getScalePartsNamesSfss[8], value: newScores[8] },]
            this.date = date
        },
        loadDataParts(){
            const score =  this.partsScaleSelectedSfss.data
            const soma = score.reduce((acumulado, atual) => acumulado + atual);
            this.soma = soma;
            this.data_parts = [
                { label: this.getScalePartsNamesSfss[0], value: score[0] },
                { label: this.getScalePartsNamesSfss[1], value: score[1] },
                { label: this.getScalePartsNamesSfss[2], value: score[2] },
                { label: this.getScalePartsNamesSfss[3], value: score[3] },
                { label: this.getScalePartsNamesSfss[4], value: score[4] },
                { label: this.getScalePartsNamesSfss[5], value: score[5] },
                { label: this.getScalePartsNamesSfss[6], value: score[6] },
                { label: this.getScalePartsNamesSfss[7], value: score[7] },
                { label: this.getScalePartsNamesSfss[8], value: score[8] },]
            
        },
        handleComponentSize(){
            this.window_width = window.innerWidth
            this.graph_width = this.window_width - 300
        }
    },
    destroyed() {
    window.removeEventListener("resize", this.handleComponentSize);
    },
    created(){
        window.addEventListener("resize", this.handleComponentSize);
        this.loadDataParts()
        eventBus.$on('change_parts_chat_options', this.handleUpdateValues )
    }
}
</script>
<style lang='scss'>
    .card-progress-scale-sfss {
        
        padding: 0.5%;
        margin-top: 1.5% ;
        border: 1px solid #E8E8E8 !important; //TODO - add color variables sass file
        border-radius: 20px !important;

        .card-progress-scale-text {
            display: flex;
            flex-direction: column;
            height: 275px;
            justify-content: space-around;
            .line-progress-part {
                display: flex;
                justify-content: space-around;
                .legend {
                    font-size: 16px;
                    font-weight: bold;
                    font-family: 'Lato';
                }

                .progress_bar {
                    min-width: 600px !important;
                    max-width: 80% !important;

                }
            }
            
            .progress-linear-border-radius {
                border-radius: 35px !important;
            }
            .v-progress-linear--rounded {

                border-radius: 35px !important;
            }
        }
    }

    .parts {
    color: #E8E8E8;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    padding-top: 2%;

    div {
        max-width: 24%;
        border-radius: 25px !important;
    }
}

.card-total {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    border-radius: 25px !important;
}

.card-total-text {
    justify-content: center;

    margin-left: auto;
    margin-right: auto;
}
</style>
