import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import App from './components/App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
