// Components
import Filter from '../common/Filter';
import Collections from '../common/Collections';
import ExploreSection from '../common/ExploreSection';

// Constants
import { nightLifeFilters } from '../../constants';
import { nightLifeData } from '../../constants/nightLifeData';
import { nightLifeCollectionList } from '../../constants/collectionList';

const NightLife = () => {
  return (
    <>
      <Collections list={nightLifeCollectionList} />
      <div className="max-width">
        <Filter filterList={nightLifeFilters} />
      </div>
      <ExploreSection
        list={nightLifeData}
        collectionName="Nightlife Restaurants in Bangalore"
      />
    </>
  );
};

export default NightLife;
