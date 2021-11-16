// Components
import ExploreCard from './components/ExploreCard';

const ExploreSection = ({ list, collectionName }) => (
  <div className="max-width explore-section">
    <p className="collection-title">{collectionName}</p>
    <div className="explore-section__grid">
      {list.map((el) => (
        <ExploreCard data={el} key={el?.info?.resId} />
      ))}
    </div>
  </div>
);

export default ExploreSection;
