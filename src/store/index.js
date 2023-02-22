import Vue from "vue";
import Vuex from "vuex";
import patients from "./patients";
import session from "./session";
import lang from "./language/lang";
import results from "./results";
import events from "./events";
import sensor from "./sensor";
import scale from "./scale";


import patientsListView from "./language/viewsTranslation/patientsListView";
import cardSelectionView from "./language/viewsTranslation/cardSelectionView";
import scaleSelectionView from "./language/viewsTranslation/scaleSelectionView";
import loginView from "./language/viewsTranslation/loginView";
import sensorView from "./language/viewsTranslation/sensorView";
import resultsView from "./language/viewsTranslation/resultsView";
import scaleView from "./language/viewsTranslation/scaleView";
import historyAssessComponents from "./language/componentsTrasnlation/historyAssessComponents";

import createPersistedState from "vuex-persistedstate";

// const jwt = require("../plugins/jwt")
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],

  modules: {
    patients,
    session,
    sensor,
    scale,
    lang,
    loginView,
    results,
    events,
    patientsListView,
    cardSelectionView,
    scaleSelectionView,
    sensorView,
    resultsView,
    scaleView,
    historyAssessComponents
  }
});
