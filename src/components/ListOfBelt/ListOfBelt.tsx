import { FC } from 'react';
import { useFetchCardList } from '@/hooks/useFetchcardList';
import { Card } from '../Card/Card';
import { PreLoader } from '../PreLoader/PreLoader';
import { Button } from '../Button/Button';
import s from './ListOfBelt.module.css';

export const ListOFBelt: FC = () => {
  const { cards, isLoading, error, refetch } = useFetchCardList();

  return (
    <section className={s.container}>
      <h2 className={s.title}>типы конвеерных лент</h2>

      {isLoading && <PreLoader />}

      {error && (
        <div className={s.errorMessage}>
          <p>{error}</p>
          <Button text="Попробовать снова" onClick={refetch} />
        </div>
      )}

      <ul className={s.cardList}>
        {cards?.map((card, index) => (
          <Card key={index} name={card.name} description={card.description} image={card.image} />
        ))}
      </ul>
    </section>
  );
};
