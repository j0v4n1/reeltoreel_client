import './favorites-mini-menu.css';
import { productCards } from '../../mocks/product-card.ts';

interface FavoritesMiniMenuProps {
  isOpen: boolean;
}

export default function FavoritesMiniMenu({ isOpen }: FavoritesMiniMenuProps) {
  const productCardList = productCards.slice(0, 3).map((product) => {
    return (
      <article className="favorites-mini-menu__product-card">
        <div className="favorites-mini-menu__product-card-top">
          <img
            className="favorites-mini-menu__product-card-image"
            src={product.image}
            alt={product.alt}
          />
          <h4 className="favorites-mini-menu__product-card-title">
            {product.name}
          </h4>
          <button className="favorites-mini-menu__product-card-button-remove">
            <img src="/images/close.svg" alt="Закрыть" />
          </button>
        </div>
        <div className="favorites-mini-menu__product-card-bottom">
          <button className="favorites-mini-menu__product-card-increase-count">
            +
          </button>
          <span className="favorites-mini-menu__product-card-count">2</span>
          <button className="favorites-mini-menu__product-card-decrease-count">
            -
          </button>
          <p className="favorites-mini-menu__product-card-price">
            {product.price}
          </p>
        </div>
      </article>
    );
  });

  return (
    <aside className={`favorites-mini-menu ${isOpen ? 'favorites-mini-menu--open' : ''}`}>
      <div className="favorites-mini-menu__top">
        <h3 className="favorites-mini-menu__title">
          Избранное
          <span className="favorites-mini-menu__count">3</span>
        </h3>
        <button className="favorites-mini-menu__button">
          <img src="/images/close.svg" alt="Закрыть" />
        </button>
      </div>
      <div className="favorites-mini-menu__content">{productCardList}</div>
    </aside>
  );
}
