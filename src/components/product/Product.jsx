import './Product';

const Product = ({ id, image, name, rate, count, price, onClick }) => {
  // TODO: Add active styles
  return (
    <>
      <div onClick={onClick} key={id} className="product">
        <img className="product__image" src={image} alt="Product image" />
        <p className="product__name">{name}</p>
        <p className="product__price">{price}€</p>
        <div className="product__rating">
          <p className="rating__rate">⭐{rate}</p>
          <p className="rating__count">🗨️{count}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
