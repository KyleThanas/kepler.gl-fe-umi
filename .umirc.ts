import { defineConfig } from 'umi';
import routes from './umi.routes';

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: isProd,
  routes,
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
