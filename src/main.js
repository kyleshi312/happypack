import Vue from 'vue'
import './style/common.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)
  console.log(App)
new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
