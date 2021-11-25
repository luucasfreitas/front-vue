<template>
  <v-card outlined class="card-info-user" :height="card_height">
          <v-card-text>
            <div style="">
                <v-col>
                    <div  style="display: flex;">
                        <div class="m-2 card-info-user-image">
                            <svg
                            width="87"
                            height="87"
                            viewBox="0 0 87 87"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="43.5" cy="43.5" r="42.2015" fill="#3175D3" />
                            <path
                                d="M43.5 7.25C23.8489 7.25 7.25 23.8489 7.25 43.5C7.25 55.0601 13.021 65.5327 21.75 72.2245V72.5H22.1198C28.1663 77.0131 35.5721 79.75 43.5 79.75C51.4279 79.75 58.8338 77.0131 64.8803 72.5H65.25V72.2245C73.979 65.5327 79.75 55.0638 79.75 43.5C79.75 23.8489 63.1511 7.25 43.5 7.25ZM29.2683 68.6104C29.8024 66.1939 31.1443 64.0317 33.0726 62.4804C35.0008 60.9291 37.4002 60.0814 39.875 60.0771H47.125C49.5996 60.0821 51.9987 60.9301 53.9268 62.4812C55.8549 64.0324 57.1969 66.1942 57.7318 68.6104C53.4977 71.0645 48.633 72.5 43.5 72.5C38.367 72.5 33.5023 71.0645 29.2683 68.6104ZM63.8363 63.9486C62.4535 60.6566 60.1305 57.8456 57.158 55.8674C54.1855 53.8892 50.6956 52.8316 47.125 52.8271H39.875C36.3044 52.8316 32.8145 53.8892 29.842 55.8674C26.8695 57.8456 24.5465 60.6566 23.1637 63.9486C17.8459 58.6598 14.5 51.388 14.5 43.5C14.5 27.7784 27.7784 14.5 43.5 14.5C59.2216 14.5 72.5 27.7784 72.5 43.5C72.5 51.388 69.1541 58.6598 63.8363 63.9486Z"
                                fill="#95BAED"
                            />
                            <path
                                d="M43.5 21.75C35.235 21.75 29 27.985 29 36.25C29 44.515 35.235 50.75 43.5 50.75C51.765 50.75 58 44.515 58 36.25C58 27.985 51.765 21.75 43.5 21.75ZM43.5 43.5C39.2297 43.5 36.25 40.5203 36.25 36.25C36.25 31.9797 39.2297 29 43.5 29C47.7703 29 50.75 31.9797 50.75 36.25C50.75 40.5203 47.7703 43.5 43.5 43.5Z"
                                fill="#95BAED"
                            />
                            </svg>
                        </div>
                        <div class="mt-5 pl-2" >
                            <caption class="subtitle-1"><strong>{{_labels.name}}:</strong></caption>
                            <h5 style="font-weitgh: lighter;">{{_name}}</h5>
                        </div>
                        <div class="patient-info" >
                            <div>
                                <strong>{{ _labels.gender}}:</strong> Male
                            </div>
                            <div>
                                <strong>{{ _labels.age}}:</strong> {{_age}}
                            </div>
                            <div>
                                <strong>{{ _labels.id}}:</strong> {{ _id }}
                            </div>
                            <div>
                                <strong>{{ _labels.phone}}:</strong> (00) 9999-9999
                            </div>
                    
                    
                        </div>

                    </div>
                </v-col>
            </div>
          </v-card-text>
        </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data(){
        return{
            patient: {
                name: "Maria Aparecida",
                gender: "Feminino",
                age: 62,
                id: '00001',
                phone: '(00) 0 0000-0000'
            },
            // todo - REVISAR TRADUCAO
            card_height : ''
        }
    },
    computed:{
        ...mapState("patients",[
            "patientSelected",
        ]),
        ...mapGetters("resultsView",[
            "getCardPatientSelected",
        ]),
        _labels(){
            return {
            ...this.getCardPatientSelected
            }
        },
        _title(){
            return this.getTitle
        },
        _name(){
            return this.patientSelected.patient_name
        }
        ,
        _gender(){
            return this.patientSelected.gender

        }
        ,
        _age(){
            return this.patientSelected.age

        }
        ,
        _id(){
            return this.patientSelected.id
            
        },
        _phone(){
            return this.patientSelected.phone
        }
    },
    created(){
        this.card_height = window.innerHeight - 455
    }

}
</script>

<style lang="scss">

.card-info-user{
    padding: 3%;
    padding-left: 0px !important;
    border-color: #c8c8c8 !important; //TODO - add color variables sass file
    border-radius: 20px !important;
   // height: 200px !importan;
   & .card-info-user-image {
       margin-left: -3.5rem !important;
   }
   & .patient-info {
       margin: 0%;
    margin-left: 25%;
       & div {
           padding-bottom: 2.2%;
       }
   }

   & .v-main__wrap {
    padding: 69px 140px !important;
   }
   & .v-application--wrap > div {
        height: 100%;
    }
   & .col {
        padding-left: 0;
        margin: 0;
    }

}
</style>