// Components
import Slider from 'react-slick';

import DeliveryItem from './DeliveryItem';

// Constants
import { deliveryItems } from '../../../constants/deliveryItems';
import { settings } from '../../../constants';

const DeliveryCollections = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <p className="collection-title">Eat what makes you happy</p>
        <Slider {...settings}>
          {deliveryItems.map((item) => (
            <DeliveryItem item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
