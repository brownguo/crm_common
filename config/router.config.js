export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        name: 'login',
        component: './User/Login',
      },
      {
        path: '/user/register',
        name: 'register',
        component: './User/Register',
      },
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
      { path: '/', redirect: '/orders/all-list' },

      //订单列表
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
      //测试权限
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/basic/:id',
            hideInMenu: true,
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },

      {
        component: '404',
      },
    ],
  },
];
