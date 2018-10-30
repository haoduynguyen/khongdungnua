// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

window.VueAxios = require('vue-axios').default;
window.Axios = require('axios').default;


Vue.config.productionTip = false
Vue.prototype.$http = Axios.bind(window);

/* eslint-disable no-new */
Vue.use(Vuetify, Axios, VueAxios);
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
})
