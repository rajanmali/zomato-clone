// Components
import Slider from 'react-slick';

// Constants
import { settings } from '../../../constants/index';
import { collectionList } from '../../../constants/collectionList';

const Collection = ({ list }) => (
  <div className="collections__wrapper">
    <div className="max-width collections">
      <p className="collection-title">Collections</p>
      <div className="collections__subtitle-wrapper">
        <p className="collections__subtitle-text">
          Explore cureated lists based on top restaurants, cafes, pubs, and bars
          in Lucknow, based on trends
        </p>
        <div className="collections__subtitle-all-locations cur-po">
          <span>All collections in Lucknow</span>
          <i className="fi fi-rr-caret-right absolute-center" />
        </div>
      </div>
      <Slider {...settings}>
        {collectionList.map((el) => (
          <>
            <div key={el.id} className="collections__image-wrapper">
              <img
                src={el.cover}
                alt={el.title}
                className="collections__image"
              />
              <div className="collections__image--gradient"></div>
              <p className="collections__card-title">{el.title}</p>
              <div className="collections__card-subtitle">
                <span>{el.places}</span>
                <i className="fi fi-rr-caret-right absolute-center" />
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  </div>
);

export default Collection;
