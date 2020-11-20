import React from 'react';
import styles from './index.less';

export interface IProps {
  isTransparent?: boolean;
}

const MaskBasic: React.FC<IProps> = () => {
  return <div className={styles.container} />;
};

export default MaskBasic;
