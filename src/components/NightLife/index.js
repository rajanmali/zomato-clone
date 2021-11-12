// Components
import Filter from '../common/Filter';

// Constants
import { nightLifeFilters } from '../../constants';

const NightLife = () => {
  return (
    <div className="max-width">
      <Filter filterList={nightLifeFilters} />
      This is the NightLife
    </div>
  );
};

export default NightLife;
