import { useState } from 'react';
import Quantifier from '../quantifier/Quantifier';
import './Popover.css';

const Popover = ({ product, closeBtnAction }) => {
  const [quantity, setQuantity] = useState(0);

  // Product quantity
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

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
        <Quantifier
          onAddClick={handleAdd}
          onRemoveClick={handleRemove}
          quantity={quantity}
        />
        <button className="popover__actions--cart">Add to cart</button>
      </div>
    </div>
  );
};

export default Popover;
