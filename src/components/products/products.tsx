import './products.css';
import { productCards } from '../../mocks/product-card.ts';
import { useAppDispatch, useAppSelector } from '../../store/hook.ts';
import { toggleFavorite } from '../../store/slices/favourite-slice.ts';

export default function Products() {
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector((state) => state.favorites.ids);

  const productCardsList = productCards.map((product) => {
    return (
      <article key={product.id} className={'products__article'}>
        <button
          onClick={() => {
            dispatch(toggleFavorite(product.id));
          }}
          className={'products__button-favorite'}>
          <img
            className={'products__image-favorite'}
            src={
              favoriteIds.includes(product.id)
                ? '/images/favor-checked.svg'
                : '/images/favor.svg'
            }
            alt="Избранное"
          />
        </button>
        <div className="products__badges">
          {product.isHit && <span className="products__badge">Хит продаж</span>}
          {product.isNew && <span className="products__badge">Новинка</span>}
        </div>
        <img
          className={'products__image'}
          src={product.image}
          alt={product.alt}
        />
        <span className={'products__category'}>{product.category}</span>
        <h3 className={'products__name'}>{product.name}</h3>
        <p className={'products__price'}>{product.price} ₽</p>
        <button className={'products__button-cart'}>В корзину</button>
      </article>
    );
  });

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
      <div className={'products__content'}>{productCardsList}</div>
      <div className={'products__navigation'}>
        <button className="products__navigation-button">НАЗАД</button>
      </div>
    </section>
  );
}
