// Components
import Slider from 'react-slick';

// Constants
import { topBrandsList } from '../../../constants/topBrands';
import { settings as reactSlickSettings } from '../../../constants/index';

const settings = { ...reactSlickSettings, slidesToShow: 6 };

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <p className="collection-title">Top brands for you</p>
      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          <div className="top-brands__image-time-wrapper" key={brand.id}>
            <div className="top-brands__image-wrapper">
              <img
                src={brand.cover}
                className="top-brands__image"
                alt={brand.id}
              />
            </div>
            <p className="top-brands__time">{brand.time}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
