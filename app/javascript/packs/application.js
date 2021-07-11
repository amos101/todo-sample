// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Rails.start()
Turbolinks.start()
ActiveStorage.start()
