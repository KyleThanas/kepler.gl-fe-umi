import { Context } from 'egg';
import { minify } from 'html-minifier';
import pretty from 'pretty';
import { Dictionary } from 'lodash';

export default {
  /**
   * HTML 格式化
   *
   * @param {string} html 网页内容
   * @return {string} 格式化网页内容
   */
  htmlFormat(html: string): string {
    return minify(pretty(html, { ocd: true }), {
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
    });
  },
  /**
   * 拼接前端打包地址
   *
   * @param {Context['helper']} this helper
   * @param {string} chunk 打包名称
   * @return {string} 打包地址
   */
  hybrid(this: Context['helper'], chunk: string): string {
    const { debug, manifest, devServer } = this.app.config.hybrid;

    if (!debug) {
      return String(manifest[chunk]);
    }

    const { protocol, hostname } = this.ctx.request;

    return `${protocol}://${hostname}:${devServer.port}/${chunk}`;
  },
  /**
   * 字符串安全解码
   * base64 decode => url decode
   *
   * @param {string} value 编码数据
   * @return {string} 原始数据
   */
  stringDecode(value: string): string {
    try {
      return decodeURIComponent(Buffer.from(value, 'base64').toString());
    } catch {
      return String();
    }
  },
  /**
   * 字符串安全编码
   * url encode => base64 encode
   *
   * @param {string} value 原始数据
   * @return {string} 编码数据
   */
  stringEncode(value: string): string {
    return Buffer.from(encodeURIComponent(value)).toString('base64');
  },
  /**
   * 数据对象安全解码
   * base64 decode =>  url decode => json parse
   *
   * @param {string} value 编码数据
   * @return {Dictionary<any>} 原始数据
   */
  objectDecode(value: string): Dictionary<any> {
    const defaultValue = {};

    const isOk = this.is.string(value);
    if (!isOk) {
      return defaultValue;
    }

    try {
      return JSON.parse(decodeURIComponent(Buffer.from(value, 'base64').toString()));
    } catch {
      return defaultValue;
    }
  },
  /**
   * 数据对象安全编码
   * json stringify => url encode => base64 encode
   *
   * @param {Dictionary<any>} value 原始数据
   * @return {string} 编码数据
   */
  objectEncode(value: Dictionary<any>): string {
    const defaultValue = {};
    const candidate = this.is.emptyObject(value) ? defaultValue : value;

    return Buffer.from(encodeURIComponent(JSON.stringify(candidate))).toString('base64');
  },
};
