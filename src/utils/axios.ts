import Axios, { AxiosInstance } from 'axios';

interface PlainObject {
  [key: string]: string;
}

const codeWhiteList = [0, 200];

const errorMessageDict = {
  400: '错误请求',
  401: '未授权',
  403: '没有相关权限，请联系管理员',
  404: '未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  429: '请求频繁',
  500: '服务器端出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络连接错误，请稍候重试',
  505: '不支持该请求',
};

/**
 * 获取额外请求头
 *
 * @return {PlainObject}
 */
const getExraHeaders = (): PlainObject => {
  return {
    'x-request-token': 'token',
  };
};

/**
 * 请求结果格式化
 *
 * @param {any} value 请求结果输入
 * @returns
 */
const responseContentFormat = (value: any) => {
  const isUndefined = value === undefined;
  const isNull = value === null;

  if (isUndefined || isNull) {
    return Object.create(null);
  }

  return value;
};

/**
 * 请求实体拦截器
 *
 * @param {AxiosInstance} instance 请求实体
 * @return
 */
const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(
    config => {
      const extraHeaders = getExraHeaders();
      // eslint-disable-next-line no-param-reassign
      config.headers = { ...extraHeaders, ...config.headers };
      // eslint-disable-next-line no-param-reassign
      config.params = { ...config.params, timestamp: Date.now() };

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    response => {
      response.data.data = responseContentFormat(response.data.data);

      const isOk = response.data.status === 200 && codeWhiteList.includes(response.data.code);
      if (isOk) {
        return Promise.resolve(response.data);
      }

      response.data.message = response.data.message || '数据请求失败';
      return Promise.reject(response.data);
    },
    error => {
      if (!error.response) {
        return Promise.reject(new Error('网络连接异常'));
      }

      // eslint-disable-next-line no-param-reassign
      error.response.message = error.response.data.message || errorMessageDict[error.response.status] || error.response.status;
      return Promise.reject(error.response);
    },
  );

  return instance;
};

const fleet_url = 'http://fleet.api.niu.local';
const apiInstance = Axios.create({ baseURL: fleet_url });

export const apiRequest = setInterceptors(apiInstance);
