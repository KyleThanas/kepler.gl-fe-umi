// 路由配置参考文档 https://umijs.org/zh/guide/router.html
module.exports = [
  {
    path: '/',
    component: '../layouts/Root',
    routes: [
      // 首页
      {
        path: '/',
        component: '@/pages/Index',
      },
      // 测试页
      {
        path: '/demo',
        component: '@/pages/Demo',
      },
      // 公司页
      {
        path: '/company',
        routes: [
          {
            path: '/company/:companyId',
            component: '@/pages/Company/DetailPage',
          },
        ],
      },
    ],
  },
];
