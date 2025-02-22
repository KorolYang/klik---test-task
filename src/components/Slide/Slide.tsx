import { FC } from 'react';
import { Button } from '../Button/Button';
import s from './Slide.module.css';

export type TSlideProps = {
  image: string;
  title: string;
  descr: string;
  index: number;
};

export const Slide: FC<TSlideProps> = ({ image, title, descr, index }) => {
  return (
    <div className={s.slideContent}>
      <img src={image} alt={`Slide ${index + 1}`} />
      <div className={s.slideOverlay}></div>
      <div className={s.slideInfo}>
        <h2 className={s.slideTitle}>{title}</h2>
        <p className={s.slideDescr}>{descr}</p>
        <Button text="Подробнее" />
      </div>
    </div>
  );
};
