// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import http   from './http';
import store  from './store';
import router from './router'

import 'element-ui/lib/theme-chalk/index.css';
import './styles/common.css';
import './styles/theme/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store  : store,
  components: { App },
  template: '<App/>'
})

