// Components
import FilterItem from './components/FilterItem';

const Filter = ({ filterList }) => {
  return (
    <div className="filter">
      {filterList?.map((listItem) => (
        <FilterItem filter={listItem} key={listItem.id} />
      ))}
    </div>
  );
};

export default Filter;
