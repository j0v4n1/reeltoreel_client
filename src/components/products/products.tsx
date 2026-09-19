import './products.css';

export default function Products() {
  return (
    <section className={'products'}>
      <div className={'products__tabs'}>
        <button className={'products__tab'}>
          Хиты продаж
          <span className={'products__count'}>252</span>
        </button>
        <button className={'products__tab'}>
          Новинки
          <span className={'products__count'}>252</span>
        </button>
        <button className={'products__tab'}>
          Распродажа
          <span className={'products__count'}>252</span>
        </button>
        <button className={'products__tab'}>Смотреть все товары</button>
      </div>
      <div className={'products__content'}>
        <article className={'products__article'}>
          <button className={'products__button--favor'}>
            <img className={'products__image--favor'} src="/images/favor.svg" alt="" />
          </button>
          <img className={'products__image'} src="/images/vinil_player.png" alt="" />
          <span className={'products__category'}>Audio-Technica</span>
          <h3 className={'products__name'}>AT-LPW40WN</h3>
          <p className={'products__price'}>110 000 ₽</p>
          <button className={'products__button-cart'}>В корзину</button>
        </article>
        <article className={'products__article'}>
          <button className={'products__button--favor'}>
            <img className={'products__image--favor'} src="/images/favor.svg" alt="" />
          </button>
          <img className={'products__image'} src="/images/player.png" alt="" />
          <span className={'products__category'}>WiiM</span>
          <h3 className={'products__name'}>Amp Pro Space Grey</h3>
          <p className={'products__price'}>49 970 ₽</p>
          <button className={'products__button-cart'}>В корзину</button>
        </article>
        <article className={'products__article'}>
          <button className={'products__button--favor'}>
            <img className={'products__image--favor'} src="/images/favor.svg" alt="" />
          </button>
          <img className={'products__image'} src="/images/microphone.png" alt="" />
          <span className={'products__category'}>shure</span>
          <h3 className={'products__name'}>SM7B</h3>
          <p className={'products__price'}>46 490 ₽</p>
          <button className={'products__button-cart'}>В корзину</button>
        </article>
        <article className={'products__article'}>
          <button className={'products__button--favor'}>
            <img className={'products__image--favor'} src="/images/favor.svg" alt="" />
          </button>
          <img className={'products__image'} src="/images/cable.png" alt="" />
          <span className={'products__category'}>HeadMade</span>
          <h3 className={'products__name'}>Pro 2RCA - 3.5mm Black 1m</h3>
          <p className={'products__price'}>2 630 ₽</p>
          <button className={'products__button-cart'}>В корзину</button>
        </article>
      </div>
      <div className={'products__navigation'}>
        <button className="products__navigation-button">НАЗАД</button>
      </div>
    </section>
  );
}
