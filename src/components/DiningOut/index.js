// Components
import Filter from '../common/Filter';
import Collections from '../../components/common/Collections';

// Constants
import { collectionList } from '../../constants/collectionList';

const DiningOut = () => {
  return (
    <div>
      <Collections list={collectionList} />
      <Filter />
    </div>
  );
};

export default DiningOut;
