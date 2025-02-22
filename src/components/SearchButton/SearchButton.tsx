import { FC } from 'react';
import Search from '../../assets/icons/search.svg?react';
import s from './searchButton.module.css';

export const SearchButton: FC = () => {
  return (
    <button className={s.searchButton}>
      <Search />
    </button>
  );
};
