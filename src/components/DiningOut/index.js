// Components
import Filter from '../common/Filter';
import Collections from '../../components/common/Collections';

// Constants
import { collectionList } from '../../constants/collectionList';
import { diningOutFilters } from '../../constants';

const DiningOut = () => {
  return (
    <div>
      <Collections list={collectionList} />
      <div className="max-width">
        <Filter filterList={diningOutFilters} />
      </div>
    </div>
  );
};

export default DiningOut;
