import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import User from './user';

const index_routes = [].concat(
  User
)

const $router = new Router({
  routes: [{
      path: '/',
      component: (resolve) => require(['@/pages/Index.vue'], resolve),
      children: index_routes,
      meta: {
        title: '礼品联盟'
      }
    },
    {
      path: '/login',
      component: (resolve) => require(['@/pages/login.vue'], resolve),
      meta: {
        title: '登陆'
      }
    },

  ]
})

// Before router
$router.beforeEach((to, form, next) => {
  //iView.LoadingBar.start();
  next();
})

// After router
$router.afterEach(route => {
  document.title = route.meta.title;
  //iView.LoadingBar.finish();
})

export default $router;
