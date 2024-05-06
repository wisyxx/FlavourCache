import { useState, useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import Header from '../../components/header/Header';
import Product from '../../components/product/Product';
import Modal from '../../components/modal/Modal';
import Popover from '../../components/popover/Popover';
import './ShopPage.css';

const ShopPage = () => {
  const { products } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!modalVisible && selectedProduct) {
      const timer = setTimeout(() => {
        setSelectedProduct(null);
      }, 200); // Depends on @keyframes HideModal (Modal.css)
      return () => clearTimeout(timer);
    }
  }, [modalVisible, selectedProduct]);

  const handleProductClick = (product) => {
    setModalVisible(true);
    setSelectedProduct(product);
    document.body.setAttribute('data-scroll-locked', 1);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    document.body.removeAttribute('data-scroll-locked');
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
            <Modal onClose={handleCloseModal} visible={modalVisible}>
              <Popover product={selectedProduct} closeBtnAction={handleCloseModal} />
            </Modal>
          )}
        </section>
      </main>
    </>
  );
};

export default ShopPage;
