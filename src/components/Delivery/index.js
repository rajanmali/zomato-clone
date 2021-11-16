// Components
import Filter from '../common/Filter';
import DeliveryCollections from './components/DeliveryCollections';
import ExploreSection from '../common/ExploreSection';
import TopBrands from './components/TopBrands';

// Constants
import { deliveryFilters } from '../../constants';
import { restaurantData } from '../../constants/restaurantData';

const Delivery = () => {
  return (
    <>
      <div className="max-width">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantData}
        collectionName="Delivery Restaurants in your area"
      />
    </>
  );
};

export default Delivery;
