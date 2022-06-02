import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import Vuex from 'vuex'

import 'element-ui/lib/theme-chalk/index.css';
import '../public/elementMi/index.css';

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    tianhao: "其他内容"
  },

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
