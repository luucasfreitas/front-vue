import Vue from 'vue'
import Vuex from 'vuex'
import patients from './patients';
import session from './session';
import lang from './language/lang';
import results from './results';
import events from './events';
import sensor from './sensor'

import patientsListView from './language/viewsTranslation/patientsListView';
import loginView from './language/viewsTranslation/loginView';
import resultsView from './language/viewsTranslation/resultsView';
import historyAssessComponents from './language/componentsTrasnlation/historyAssessComponents';


import createPersistedState from "vuex-persistedstate";



// const jwt = require("../plugins/jwt")
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  modules: {
    patients,
    session,
    sensor,
    lang,
    loginView,
    results,
    events,
    patientsListView,
    resultsView,
    historyAssessComponents
  },

})
