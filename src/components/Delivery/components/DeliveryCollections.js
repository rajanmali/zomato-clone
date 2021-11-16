// Components
import DeliveryItem from './DeliveryItem';

import NextArrow from '../../common/Carousel/components/NextArrow';
import PrevArrow from '../../common/Carousel/components/PrevArrow';

// Constants
import { deliveryItems } from '../../../constants/deliveryItems';
import Slider from 'react-slick';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collection ">
      <div className="max-width">
        <p className="collection-title">Eat what makes you happy</p>
        <Slider {...settings}>
          {deliveryItems.map((item) => (
            <DeliveryItem item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
