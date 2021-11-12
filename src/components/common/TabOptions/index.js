import { navigationTab } from '../../../constants';

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="max-width tab-options__wrapper">
        {navigationTab.map((tab) => (
          <div
            className={`absolute-center cur-po tab-options__item ${
              activeTab === tab.name && 'tab-options__item--active'
            }`}
            onClick={() => setActiveTab(tab.name)}
            key={tab.id}
          >
            <div
              className="tab-options__image-container absolute-center"
              style={{
                backgroundColor: activeTab === tab.name ? tab.backdrop : '',
              }}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                className="tab-options__image"
                alt={tab.name}
              />
            </div>
            <span className="tab-options__name">{tab.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;
