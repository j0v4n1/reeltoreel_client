import './header.css';
import { useState } from 'react';
import Catalog from '../catalog/catalog.tsx';
import * as React from 'react';
import { useAppSelector } from '../../store/hook.ts';
import FavoritesMiniMenu from '../favorites-mini-menu/favorites-mini-menu.tsx';

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsOpen }: HeaderProps) {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const [isOpenFavorites, setIsOpenFavorites] = useState(false);
  const [isOpenCollections, setIsOpenCollections] = useState(false);

  const favoritesCount: number = useAppSelector(
    (state) => state.favorites.ids
  ).length;

  return (
    <header className={'header'}>
      <Catalog isOpen={isOpenCatalog} />
      <FavoritesMiniMenu isOpen={isOpenFavorites} />
      <div className={'header__top'}>
        <a className={'header__logo'} href={'#'}>
          Reel to real
        </a>
        <nav className="header__navbar">
          <a className="header__link" href="#">
            Магазины
          </a>
          <a className="header__link" href="#">
            контакты
          </a>
        </nav>
        <div className={'header__actions'}>
          <button
            className={'header__action'}
            onClick={() => setIsOpenFavorites(!isOpenFavorites)}>
            <span className={'header__action-count'}>{favoritesCount}</span>
            <img src="/images/favor.svg" alt="Избранное" />
          </button>
          <button className={'header__action'}>
            <span className={'header__action-count header__action-count--cart'}>
              4
            </span>
            <img src="/images/cart.svg" alt="Корзина" />
          </button>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className={'header__login'}>
            войти
          </button>
        </div>
      </div>
      <div className={'header__bottom'}>
        <button
          className={'header__catalog'}
          onClick={() => setIsOpenCatalog(!isOpenCatalog)}>
          <img src="/images/burger.svg" alt="меню" />
          <span className={'header__catalog--text'}>Каталог</span>
          <img
            className={`header__image-arrow ${isOpenCatalog ? 'header__image-arrow--open' : ''}`}
            src="/images/angle_down.svg"
            alt="стрелка вниз"
          />
        </button>
        <button
          className={'header__collections'}
          onClick={() => setIsOpenCollections(!isOpenCollections)}>
          <span className={'header__collections--text'}>Коллекции</span>
          <img
            className={`header__image-arrow ${isOpenCollections ? 'header__image-arrow--open' : ''}`}
            src="/images/angle_down.svg"
            alt="стрелка вниз"
          />
        </button>
        <div className={'header__search'}>
          <img
            className={'header__search-image'}
            src="/images/search.svg"
            alt="поиск"
          />
          <input
            id={'header__search-input'}
            className={'header__search-input'}
            type="search"
            placeholder="Найти винил или аппаратуру"
          />
        </div>
        <a className={'header__phone'} href="tel:88004567890">
          8-800-456-78-90
        </a>
      </div>
    </header>
  );
}
