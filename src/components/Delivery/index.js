// Components
import Filter from '../common/Filter';

// Constants
import { deliveryFilters } from '../../constants';

const Delivery = () => {
  return (
    <div className="max-width">
      <Filter filterList={deliveryFilters} />
      This is Delivery
    </div>
  );
};

export default Delivery;
