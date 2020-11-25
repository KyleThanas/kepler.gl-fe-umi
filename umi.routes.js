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
        title: '首页',
      },
      // 公司页
      {
        path: '/kepler',
        routes: [
          {
            path: '/kepler/:companyId',
            component: '@/pages/Kepler/DetailPage',
          },
        ],
      },
    ],
  },
];
