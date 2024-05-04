import { Carousel } from 'react-responsive-carousel';
import { useProducts } from '../../hooks/useProducts';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css';

const CarouselComponent = () => {
  const { products } = useProducts();

  return (
    <Carousel
      width={1150}
      emulateTouch={true}
      showThumbs={false}
      stopOnHover={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      autoPlay={true}
      dynamicHeight={false}
    >
      {products.map((product) => {
        return (
          <div key={product.id} className="product-slide">
            <img
              className="product-slide__image"
              src={product.image}
              alt="Product image"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
