import Axios from 'axios';
import Toast from '@/components/Toast';

const { token } = window.APP_ACCOUNT;

const sessionInfo = {
  'x-request-token': token,
};

const setInterceptors = instance => {
  instance.interceptors.request.use(config => {
    const configResult = config;
    configResult.headers = { ...config.headers, ...sessionInfo };
    configResult.headers['x-timestamp'] = new Date().valueOf();

    return configResult;
  });

  instance.interceptors.response.use(
    response => {
      response.data.data = response.data.data || {};

      if (response.data.status === 200 && (response.data.code === 0 || response.data.code === 200)) {
        return Promise.resolve(response.data);
      }

      response.data.message = response.data.message || '数据请求失败';
      Toast.show(response.data.message);
      return Promise.reject(response.data);
    },
    error => {
      const errorResult = error;
      if (!errorResult.response) {
        return Promise.reject(new Error('网络连接异常'));
      }

      errorResult.response.code = error.response.code || error.response.status;
      switch (error.response.status) {
        case 400:
          errorResult.response.message = '错误请求';
          break;
        case 401:
          errorResult.response.message = '未授权';
          break;
        case 403:
          errorResult.response.message = '拒绝访问';
          break;
        case 404:
          errorResult.response.message = '未找到该资源';
          break;
        case 405:
          errorResult.response.message = '请求方法未允许';
          break;
        case 408:
          errorResult.response.message = '请求超时';
          break;
        case 429:
          errorResult.response.message = '请求频繁';
          break;
        case 500:
          errorResult.response.message = '服务器端出错';
          break;
        case 501:
          errorResult.response.message = '网络未实现';
          break;
        case 502:
          errorResult.response.message = '网络错误';
          break;
        case 503:
          errorResult.response.message = '服务不可用';
          break;
        case 504:
          errorResult.response.message = '网络超时';
          break;
        case 505:
          errorResult.response.message = '不支持该请求';
          break;
        default:
          errorResult.response.message = error.response.status;
      }

      return Promise.reject(errorResult.response);
    },
  );

  return instance;
};

const apiInstance = Axios.create({ baseURL: `/` });

export const apiRequest = setInterceptors(apiInstance);
