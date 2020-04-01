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
      //测试权限
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        authority: ['result_success'],
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
            authority: ['result_success'],

          },
          {
            path: '/result/fail',
            name: 'fail',
            component: './Result/Error',
            authority: ['result_error'],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
