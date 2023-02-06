import Vue from 'vue';
import Vuex from 'vuex';
import sys from './modules/sys';
import wallet from "@/store/modules/wallet";


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    sys,
    wallet,
  },

  getters: {
    sys: state => state.sys,
    wallet:state=> state.wallet,
  },


});

export default store;
