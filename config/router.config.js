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
      {
        path: '/',
        redirect: '/orders/all-list',
        authority: ['orders_all_list']
      },

      //订单列表
      {
        path: '/orders',
        icon: 'bars',
        name: 'orders',
        authority: ['orders_all_list'],
        routes: [
          {
            icon: 'rocket',
            path: '/orders/all-list',
            name: 'all-list',
            component: './Orders/OrderList',
            authority: ['orders_all_list'],
          },
          {
            path: '/orders/detail/:id',
            hideInMenu: true,
            component: './Orders/BasicProfile',
            authority: ['orders_detail_by_id'],
          },
        ],
      },
      //系统设置
      {
        path: '/configure',
        icon: 'setting',
        name: 'configure',
        authority: ['orders_all_list'],
        routes: [
          {
            icon: 'lock',
            path: '/configure/auth',
            name: 'auth',
            component: './Orders/OrderList',
            authority: ['orders_all_list'],
          },
          {
            icon: 'user',
            path: '/configure/managers',
            name: 'managers',
            component: './Configure/Managers',
            authority: ['orders_all_list'],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
