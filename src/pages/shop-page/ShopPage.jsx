import Header from '../../components/header/Header';
import { useProducts } from '../../hooks/useProducts';
import './ShopPage.css';

const ShopPage = () => {
  const { products } = useProducts();
  return (
    <>
      <Header />
      <h1>Shop</h1>
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <h3 className="product__name">{product.title}</h3>
            <p className="product__price">{product.price}</p>
            <div className="product__rating">
              <p className="rating__rate">⭐{product.rating.rate}</p>
              <p className="rating__count">🗨️{product.rating.count}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopPage;
