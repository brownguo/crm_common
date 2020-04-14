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
        authority: ['orders_all_list'],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        hideInMenu: true,
        routes: [
          {
            path: '/account/center',
            name: 'center',
            hideInMenu: true,
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            hideInMenu: true,
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
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
