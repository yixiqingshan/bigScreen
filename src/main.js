// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import dataV from '@jiaminghi/data-view'
// import echarts from "echarts";

Vue.use(dataV)
Vue.config.productionTip = false
// console.log(echarts)
// Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
