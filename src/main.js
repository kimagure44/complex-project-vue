import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import globalConfig from './globalConfigVue';

Object.assign(Vue.config, globalConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
