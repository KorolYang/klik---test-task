import { FC, useState } from 'react';
import Logo from '@/assets/icons/logo.svg?react';
import { Button } from '../Button/Button';
import { SearchButton } from '../SearchButton/SearchButton';
import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';
import s from './Header.module.css';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerModal = () => {
    setIsOpen(true);
  };

  return (
    <header className={s.header}>
      <a href="#">
        <Logo className={s.headerLogo} />
      </a>
      <nav className={s.headerNav}>
        <a href="#">Партнеры</a>
        <a href="#">Производство</a>
        <a href="#">Контакты</a>
      </nav>
      <Button onClick={handlerModal} className={s.headerButton} text="Заказать звонок" />

      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Form setIsOpen={setIsOpen} />
        </Modal>
      )}

      <input type="text" className={s.searchInput} placeholder="Поиск по сайту" />
      <SearchButton />
    </header>
  );
};
