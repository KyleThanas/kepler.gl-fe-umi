// 延迟100毫秒
export const sleep = (timeout: number = 100) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
