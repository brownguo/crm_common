export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard //, authority: ['admin', 'user']
      { path: '/', redirect: '/orders/all-list'},

      {
        path: '/orders',
        icon: 'bars',
        name: 'orders',
        routes: [
          {
            icon: 'rocket',
            path: '/orders/all-list',
            name: 'all-list',
            component: './Orders/OrderList',
          },
          {
            path: '/orders/detail/:id',
            hideInMenu: true,
            component: './Orders/BasicProfile',
          },
        ],
      },

      {
        component: '404',
      },
    ],
  },
];
