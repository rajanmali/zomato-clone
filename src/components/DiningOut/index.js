// Components
import Collections from '../../components/common/Collections';
import Filter from '../common/Filter';
import ExploreSection from '../common/ExploreSection';

// Constants
import { diningOutCollectionList } from '../../constants/collectionList';
import { diningOutFilters } from '../../constants';
import { diningOutData } from '../../constants/diningOutData';

const DiningOut = () => {
  return (
    <>
      <Collections list={diningOutCollectionList} />
      <div className="max-width">
        <Filter filterList={diningOutFilters} />
      </div>
      <ExploreSection
        list={diningOutData}
        collectionName="Dine-Out Restaurants in Bangalore"
      />
    </>
  );
};

export default DiningOut;
