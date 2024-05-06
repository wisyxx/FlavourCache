import Quantifier from '../quantifier/Quantifier';
import './Popover.css';

const Popover = ({ product, closeBtnAction }) => {
  return (
    <div className="popover">
      <button className="popover__close" onClick={closeBtnAction}>
        X
      </button>
      <div className="popover__top">
        <h3 className="popover__name">{product.title}</h3>
        <img
          className="popover__image"
          src={product.image}
          alt="Product image"
        />
      </div>

      <p className="popover__price">
        Price: <span>{product.price}€</span>
      </p>
      <p className="popover__rating">
        Rating: {`${product.rating.rate}/5 (${product.rating.count})`}
      </p>
      <div className="popover__actions">
        {/* TODO: button onClick action */}
        <Quantifier />
        <button className="popover__actions--cart">Add to cart</button>
      </div>
    </div>
  );
};

export default Popover;
