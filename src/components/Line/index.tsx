import React from 'react';
import styles from './index.less';

export interface IProps {
  /**
   * 默认值 `16px`
   */
  size?: number;
  style?: React.CSSProperties;
}

const Line: React.FC<IProps> = props => {
  const { size = 16, style } = props;

  const styleDisplay: React.CSSProperties = {
    ...style,
    margin: `${size}px 0`,
  };

  return <div className={styles.container} style={styleDisplay} />;
};

export default Line;
