import React from 'react'
import { combineProps } from '@/utils/props';
import styles from './index.less';

export interface IProps {
  text: string;
}

const ButtonBasic: React.FC<IProps & JSX.IntrinsicElements['div']> = (props) => {
  const { text = '确认', ...restProps } = props;

  const localProps = combineProps(
    {
      className: styles.container,
    },
    restProps,
  );

  return <div {...localProps}>{text}</div>
}

export default ButtonBasic;
