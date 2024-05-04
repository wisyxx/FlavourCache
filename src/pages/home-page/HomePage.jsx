import Header from '../../components/header/Header';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import Footer from '../../components/footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="home-main">
        <h1 className="home-main__title">Welcome to Shopping Cart!</h1>
        <p className="home-main__info">Check out some of or best products:</p>

        <CarouselComponent />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
