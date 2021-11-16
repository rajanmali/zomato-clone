import { deliveryItems } from '../../../constants/deliveryItems';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collection ">
      <div className="max-width">
        <p className="collection-title">Eat what makes you happy</p>
      </div>
    </div>
  );
};

export default DeliveryCollections;
