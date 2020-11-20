import ReactDOM from 'react-dom';
import * as uuid from 'uuid';

// 判断是否为 HTMl 元素
export const isHtmlElement = dom => {
  const isObject = Boolean(typeof dom === 'object' && dom !== null);
  return isObject && dom.nodeType === 1;
};

// 获取视窗高度
export const getClientHeight = () => {
  return document.documentElement.clientHeight || window.innerHeight;
};

// 获取视窗 宽度
export const getClientWidth = () => {
  return document.documentElement.clientWidth || window.innerWidth;
};

// 获取页面高度
export const getDocumentHeight = () => {
  const { body } = document;
  const html = document.documentElement;
  const height = Math.max(body.offsetHeight, body.scrollHeight, html.clientHeight, html.offsetHeight, html.scrollHeight);
  return height;
};

// 获取元素距离页面顶部高度
export const getOffsetTop = dom => {
  if (!isHtmlElement(dom)) {
    return 0;
  }
  const box = dom.getBoundingClientRect();
  return box.top + window.pageYOffset - document.documentElement.clientTop;
};

// 获取滚动条垂直位置
export const getScrollTop = () => {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
};

// 当前节点在页面视窗内是否可见
export const isVisibleDom = dom => {
  if (!isHtmlElement(dom)) {
    return false;
  }

  const visibleTop = getScrollTop();
  const clientHeight = getClientHeight();
  const visibleBottom = visibleTop + clientHeight;

  const domTop = dom.offsetTop;
  const domBottom = dom.offsetTop + dom.offsetHeight;

  return !(domBottom < visibleTop || domTop > visibleBottom);
};

// 随机生成挂载点
export class MountPoint {
  private id: string;

  private node: HTMLElement | null;

  constructor() {
    this.id = uuid.v4();
    this.node = null;
  }

  // 创建挂载点
  createMountPoint() {
    const node = document.createElement('aside');
    node.id = this.id;
    document.body.appendChild(node);
    this.node = node;
  }

  // 移除挂载点
  removeMountPoint() {
    if (this.node) {
      this.node.remove();
    }
  }

  // 直接渲染
  render(component: React.DOMElement<any, any>) {
    this.removeMountPoint();
    this.createMountPoint();
    ReactDOM.render(component, this.node);
  }
}
