import { FC } from 'react';
import clsx from 'clsx';
import s from './Button.module.css';

export type TButtonProps = {
  className?: string;
  text?: string;
  onClick?: (e?: React.MouseEvent) => void;
};

export const Button: FC<TButtonProps> = ({ className, text, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(s.button, className)}>
      {text}
    </button>
  );
};
