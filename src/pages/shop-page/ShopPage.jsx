import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import Header from '../../components/header/Header';
import Product from '../../components/product/Product';
import Modal from '../../components/modal/Modal';
import './ShopPage.css';

const ShopPage = () => {
  const { products } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Avoid scroll
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; // Enable scroll
  };

  return (
    <>
      <Header />
      <main className="shop-page">
        <h1 className="shop-page__title">Shop</h1>
        <section className="products">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                name={product.title}
                image={product.image}
                rate={product.rating.rate}
                count={product.rating.count}
                price={product.price}
                onClick={() => handleProductClick(product)}
              />
            );
          })}
          {selectedProduct && (
            <Modal onClose={handleCloseModal}>
              <div className="popover-content">
                <h2>{selectedProduct.name}</h2>
                <img src={selectedProduct.image} alt="Product image" />
                <p>Price: {selectedProduct.price}€</p>
                <p>Rating: ⭐{selectedProduct.rate}</p>
                <p>Reviews: 🗨️{selectedProduct.count}</p>
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </Modal>
          )}
        </section>
      </main>
    </>
  );
};

export default ShopPage;
