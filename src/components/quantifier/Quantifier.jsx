import './Quantifier.css';

const Quantifier = ({ onAddClick, onRemoveClick, quantity }) => {
  return (
    <div className="quantity">
      <button onClick={onRemoveClick} className="quantity__remove">
        -
      </button>
      <p className="quantity__number">{quantity}</p>
      <button onClick={onAddClick} className="quantity__add">
        +
      </button>
    </div>
  );
};

export default Quantifier;
