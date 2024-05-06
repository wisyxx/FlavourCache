import { useState } from 'react';
import './Quantifier.css';

const Quantifier = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="quantity">
      <button className="quantity__remove">-</button>
      <p className="quantity__number">{quantity}</p>
      <button className="quantity__add">+</button>
    </div>
  );
};

export default Quantifier;
