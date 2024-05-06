import './Product.css';

const Product = ({ id, image, name, rate, count, price, onClick }) => {
  // TODO: Add active styles
  return (
    <>
      <div onClick={onClick} key={id} className="product">
        <img className="product__image" src={image} alt="Product image" />
        <p className="product__name">{name}</p>
        <p className="product__price">{price}€</p>
        <p className="product__rating">Rating: {`${rate}/5 (${count})`}</p>
      </div>
    </>
  );
};

export default Product;
