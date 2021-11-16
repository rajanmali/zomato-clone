// Components
import NextArrow from '../components/common/Carousel/components/NextArrow';
import PrevArrow from '../components/common/Carousel/components/PrevArrow';

export const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export const navigationTab = [
  {
    id: 'navigation-tab-option-1',
    name: 'Delivery',
    active_img:
      'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png',
    backdrop: '#FCEEC0',
    inactive_img:
      'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
  },
  {
    id: 'navigation-tab-option-2',
    name: 'Dining Out',
    active_img:
      'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
    backdrop: '#E5F3F3',
    inactive_img:
      'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
  },
  {
    id: 'navigation-tab-option-3',
    name: 'Night Life',
    active_img:
      'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
    backdrop: '#EDf4FF',
    inactive_img:
      'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
  },
];

export const deliveryFilters = [
  {
    id: 'deliver-filter-1',
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: 'Filters',
  },
  {
    id: 'deliver-filter-2',
    title: 'Rating: 4.0+',
  },
  {
    id: 'deliver-filter-3',
    title: 'Safe and Hygienic',
  },
  {
    id: 'deliver-filter-4',
    title: 'Pure Veg',
  },
  {
    id: 'deliver-filter-5',
    title: 'Delivery Time',
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 'deliver-filter-6',
    title: 'Great Offers',
  },
];

export const diningOutFilters = [
  {
    id: 'dining-out-filter-1',
    icon: (
      <i className="fi fi-rr-settings-slider'dining-out-filter-s' absolute-center"></i>
    ),
    title: 'Filters',
  },
  {
    id: 'dining-out-filter-2',
    title: 'Pro Offers',
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 'dining-out-filter-3',
    title: 'Distance',
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 'dining-out-filter-5',
    title: 'Online Bookings',
  },
  {
    id: 'dining-out-filter-4',
    title: 'Outdoor Seating',
  },
  {
    id: 'dining-out-filter-6',
    title: 'Rating: 4.0+',
  },
  {
    id: 'dining-out-filter-7',
    title: 'Cuisines',
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 'dining-out-filter-8',
    title: 'Cafes',
  },
  {
    id: 'dining-out-filter-9',
    title: 'Open Now',
  },
];

export const nightLifeFilters = [
  {
    id: 'night-life-filter-1',
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: 'Filters',
  },
  {
    id: 'night-life-filter-2',
    title: 'Pro Offers',
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 'night-life-filter-3',
    title: 'Distance',
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 'night-life-filter-5',
    title: 'Rating: 4.0+',
  },
  {
    id: 'night-life-filter-4',
    title: 'Pubs & Bars',
  },
];
