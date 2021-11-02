import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import patients from './patients';
import session from './session';
import lang from './lang';
import patientsListView from './view_dictionaries/patientsListView';


// const jwt = require("../plugins/jwt")
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    patients,
    session,
    lang,
    patientsListView
  },

})
