import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = ({ data }) => {
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
      centerSlidePercentage={80}
      centerMode={true}
    >
      <div>
        <img src="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/pass/Cul-Reveal_ReactorA_VALORANT.jpg" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKjTMSLXUNCq2j0fYA9KgZKnfuudUX5Q6Pg&s" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXK6JvBZoUFVJcxC1AhS_Tp1e0TOjLru7S6g&s" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
