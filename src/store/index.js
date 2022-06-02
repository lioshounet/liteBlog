import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: "",
    Api: {
      Base: "http://hcj.fit:8889/model/",
      China: {
        add: "china-add/getTodayData",
        total: "china-total/getTodayData",
        province: "china-province/provinceData",
        history: "china-history/getHistoryData"
      },
    }
  },
  mutations: {

  },

})

export default store
