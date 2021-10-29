import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import 'bootstrap' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from 'vue-apexcharts'

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';  

// register Vue-FusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts)
// Vue.component('fusioncharts', FCComponent, FusionCharts);

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
//const vueFusionCharts = VueFusionChartsComponent(FusionCharts, Charts, FusionTheme);

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//Vue.component('fusioncharts', vueFusionCharts);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
