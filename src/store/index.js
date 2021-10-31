import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import patients from './patients';
import session from './session';

// const jwt = require("../plugins/jwt")
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    patients,
    session
  },

})
