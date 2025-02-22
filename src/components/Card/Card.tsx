import { FC } from 'react';
import { TCard } from '../../api/Cards';
import { Button } from '../Button/Button';
import s from './Card.module.css';

export const Card: FC<TCard> = ({ name, description, image }) => {
  return (
    <li className={s.card}>
      <img className={s.cardImage} src={image} alt="картинка конвеера" />
      <h3 className={s.cardTitle}>{name}</h3>
      <p className={s.cardDescription}>{description}</p>
      <Button className={s.cardButton} text="Подробнее" />
    </li>
  );
};
