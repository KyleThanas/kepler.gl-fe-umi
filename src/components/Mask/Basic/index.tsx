import React from 'react';
import styles from './index.less';

export interface IProps {
  isTransparent?: boolean;
}

const MaskBasic: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MaskBasic;
