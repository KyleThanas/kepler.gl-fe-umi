import React from 'react';
import classnames from 'classnames';

export interface CombineOptions {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 拼接 `className` 字符串 && 合并 `style` 对象
 *
 * @param {CombineOptions} source
 * @param {CombineOptions} target
 * @returns
 */
export const combineProps = (source: CombineOptions, target: CombineOptions) => {
  const className = classnames(target.className, source.className);
  const style: React.CSSProperties = { ...target.style, ...source.style };
  return { ...target, className, style };
};
