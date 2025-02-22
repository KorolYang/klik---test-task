import { useEffect, useState } from 'react';
import { TCardList, fetchCardList } from '@/api/Cards';

export const useFetchCardList = () => {
  const [cards, setCards] = useState<TCardList>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setError(null);
    setIsLoading(true);
    await fetchCardList()
      .then((data) => {
        setCards(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { cards, isLoading, error, refetch: fetchData };
};
