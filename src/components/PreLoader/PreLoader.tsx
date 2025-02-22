import { FC } from 'react';
import s from './PreLoader.module.css';

export const PreLoader: FC = () => {
  return (
    <div>
      <div className={s.loaderOverlay}>
        <div className={s.loaderIcon}></div>
      </div>
    </div>
  );
};
