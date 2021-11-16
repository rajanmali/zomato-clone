const ExploreCard = ({ data }) => {
  const name = data?.info?.name ?? '';
  const coverImage = data?.info?.image?.url ?? data?.info?.o2FeaturedImage?.url;
  const deliveryTime = data?.order?.deliveryTime;
  const rating = data?.info?.rating?.rating_text;
  const approxPrice = data?.info?.cfo?.text;
  const offers = data?.bulkOffers ?? [];
  const cuisines = data?.info?.cuisine?.map((item) => item.name).slice(0, 3);
  const bottomContainers = data?.bottomContainers;
  const goldOffer = data?.gold?.text;
  const proOffer = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card cur-po">
      <div className="expore-card__image-wrapper">
        <img src={coverImage} className="explore-card__image" alt={name} />
        <p className="explore-card__delivery-time">{deliveryTime}</p>
        {discount && (
          <p className="explore-card__offer explore-card__offer--discount">
            {discount}
          </p>
        )}
        {proOffer && (
          <p className="explore-card__offer explore-card__offer--pro">
            {proOffer}
          </p>
        )}
        {goldOffer && (
          <p className="explore-card__offer explore-card__offer--gold">
            {goldOffer}
          </p>
        )}
      </div>
      <div className="explore-card__details-wrapper">
        <p className="expore-card__name">{name}</p>
        {rating && (
          <div className="expore-card__rating absolute-center">
            {rating} <i className="fi fi-rr-star absolute-center" />
          </div>
        )}
      </div>
      <div className="explore-card__details-wrapper">
        {cuisines.length && (
          <div className="explore-card__cuisines">
            {cuisines.map((el, index) => (
              <span
                className="explore-card__cuisine-tag"
                key={`cuisine-el-${index}`}
              >
                {el}
                {index !== cuisines.length - 1 && ', '}
              </span>
            ))}
          </div>
        )}
        {approxPrice && (
          <span className="explore-card__approx-price">{approxPrice}</span>
        )}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="explore-card__separator" />
          <div className="explore-card__bottom-image-text-wrapper">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0].text}
              style={{ height: '18px' }}
            />
            <p className="explore-card__bottom-text">
              {bottomContainers[0].text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
