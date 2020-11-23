import React from 'react';
import MaskBasic from '@/components/Mask/Basic';
import MaskCenter from '@/components/Mask/Center';
import { MountPoint } from '@/utils/dom';
import styles from './index.less';

const MessageComponent: React.FC<{
  message: string;
  onClick: () => void;
}> = ({ message, onClick }) => (
  <MaskBasic isTransparent>
    <MaskCenter>
      <div className={styles.messageContent} onClick={onClick}>
        {message}
      </div>
    </MaskCenter>
  </MaskBasic>
);

const LoadingComponent: React.FC = () => (
  <MaskBasic isTransparent>
    <MaskCenter>
      <div className={styles.loadingContent} />
    </MaskCenter>
  </MaskBasic>
);

class GlobalToast extends MountPoint {
  hide = () => {
    this.removeMountPoint();
  };

  /**
   * 提示信息
   *
   * @param {string} [message='提示信息']
   * @param {number} [delay=2000]
   */
  show = (message: string = '提示信息', delay: number = 2000) => {
    this.render((<MessageComponent message={message} onClick={this.hide} />) as any);
    setTimeout(this.hide, delay);
  };

  loading = () => {
    this.render((<LoadingComponent />) as any);
  };
}

export default new GlobalToast();
