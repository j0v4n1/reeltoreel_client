import './header.css';

export default function Header() {
  return (
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
          <a className={'header__login'} href="#">
            войти
          </a>
        </div>
      </div>
      <div className={'header__bottom'}>
        <button className={'header__catalog'}>
          <img src="/images/burger.svg" alt="меню" />
          <span>Каталог</span>
          <img src="/images/angle_down.svg" alt="стрелка вниз" />
        </button>
        <button className={'header__collections'}>
          <img src="/images/burger.svg" alt="меню" />
          <span>Коллекции</span>
          <img src="/images/angle_down.svg" alt="стрелка вниз" />
        </button>
        <div className={'header__search'}>
          <img className={'header__search-image'} src="/images/search.svg" alt="поиск" />
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
