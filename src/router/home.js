
export default [
  {
    path: 'home',
    component: resolve => require(['@/pages/Home.vue'], resolve),
    meta: {
      title: '首页'
    },
  },
  {
    path: 'table',
    component: resolve => require(['@/pages/Table.vue'], resolve),
    meta: {
      title: '表格'
    },
  }
];
