import Vue from 'vue';
import App from './App.vue';
Vue.config.devtools = true;

let vm=new Vue({
  el: '#app',
  render: h => h(App)
})
