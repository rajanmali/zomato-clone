const FilterItem = ({ filter }) => (
  <div className="filter__item">
    {filter.icon && filter.icon}
    <span className="filter__name">{filter.title}</span>
  </div>
);

export default FilterItem;
