// Components
import Filter from '../common/Filter';
import DeliveryCollections from './components/DeliveryCollections';
import ExploreSection from '../common/ExploreSection';
import TopBrands from './components/TopBrands';

// Constants
import { deliveryFilters } from '../../constants';

const Delivery = () => {
  return (
    <>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <ExploreSection />
      <TopBrands />
    </>
  );
};

export default Delivery;
