import Logo from "../../assets/icons/logo.svg?react";
import Button from "../Button/Button";
import { SearchButton } from "../SearchButton/SearchButton";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo className={s.headerLogo} />
      <nav className={s.headerNav}>
        <a href="#">Партнеры</a>
        <a href="#">Производство</a>
        <a href="#">Контакты</a>
      </nav>
      <Button className={s.headerButton} text="Заказать звонок" />
      <input
        type="text"
        className={s.searchInput}
        placeholder="Поиск по сайту"
      />
      <SearchButton />
    </header>
  );
};

export default Header;
