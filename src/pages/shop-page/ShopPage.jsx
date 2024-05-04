import Header from '../../components/header/Header';
import { useProducts } from '../../hooks/useProducts';
import './ShopPage.css';

const ShopPage = () => {
  const { products } = useProducts();
  return (
    <>
      <Header />
      <main className="shop-page">
        <h1 className="shop-page__title">Shop</h1>
        <section className="products">
          {products.map((product) => {
            return (
              <div key={product.id} className="product">
                <img className='product__image' src={product.image} alt="Product image" />
                <p className="product__name">{product.title}</p>
                <p className="product__price">{product.price}€</p>
                <div className="product__rating">
                  <p className="rating__rate">⭐{product.rating.rate}</p>
                  <p className="rating__count">🗨️{product.rating.count}</p>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ShopPage;
