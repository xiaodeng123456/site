/**
 * 用户
 */
export default [{
  path: '/user',
  component: resolve => require(['@/pages/user/demo.vue'], resolve),
  meta: {
    title: '用户'
  },
}];
