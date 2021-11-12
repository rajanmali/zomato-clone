// Components
import Filter from '../common/Filter';
import DeliveryCollections from './components/DeliveryCollections';

// Constants
import { deliveryFilters } from '../../constants';

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
        <DeliveryCollections />
      </div>
    </div>
  );
};

export default Delivery;
