import { useState } from 'react';
import Header from '../../components/header/Header';
import { useProducts } from '../../hooks/useProducts';
import './ShopPage.css';
import Product from '../../components/product/Product';

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
              <Product
                name={product.title}
                image={product.image}
                id={product.id}
                rate={product.rating.rate}
                count={product.rating.count}
                price={product.price}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default ShopPage;
