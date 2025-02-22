import { FC } from "react";
import s from "./Button.module.css";
import clsx from "clsx";

export type TButtonProps = {
  className?: string;
  text?: string;
};

const Button: FC<TButtonProps> = ({ className, text }) => {
  return <button className={clsx(s.button, className)}> {text}</button>;
};

export default Button;
