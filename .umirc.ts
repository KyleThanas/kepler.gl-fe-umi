import path from 'path';
import { defineConfig } from 'umi';
import routes from './umi.routes';

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';
const MAPBOX_TOKEN = 'pk.eyJ1IjoieGlhb25pdSIsImEiOiJjamsxNm9oczMwNzk4M3dsYmNsdjIxYm4xIn0.xaNqu5WkkTDwuBR2zk2M9Q'; // eslint-disable-line

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  nodeModulesTransform: {
    type: isProd ? 'all' : 'none',
  },
  cssModulesTypescriptLoader: {
    mode: 'emit',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        fileName: false,
        displayName: false,
      },
    ],
  ],
  ssr: {},
  manifest: {},
  ignoreMomentLocale: true,
  hash: isProd,
  base: './',
  // publicPath: './',
  history: {
    type: 'browser',
  },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
    baseSeparator: '-',
  },
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  define: {
    MAPBOX_TOKEN,
  },
  routes,
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
