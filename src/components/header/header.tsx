import './header.css';
import { useState } from 'react';
import Catalog from '../catalog/catalog.tsx';
import * as React from 'react';

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsOpen }: HeaderProps) {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const [isOpenCollections, setIsOpenCollections] = useState(false);

  return (
    <>
      <Catalog isOpen={isOpenCatalog} />
      <header className={'header'}>
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
            <button className={'header__action'}>
              <img src="/images/favor.svg" alt="" />
            </button>
            <button className={'header__action'}>
              <img src="/images/cart.svg" alt="" />
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
    </>
  );
}
