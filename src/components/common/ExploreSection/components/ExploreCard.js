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
      <div className="expore-card__wrapper">
        <img src={coverImage} className="explore-card__image" alt={name} />
        <p className="explore-card__delivery-time">{deliveryTime}</p>
        {proOffer && <p className="explore-card__pro-offer">{proOffer}</p>}
        {goldOffer && <p className="explore-card__gold-offer">{goldOffer}</p>}
        {discount && <p className="explore-card__discount">{discount}</p>}
      </div>
    </div>
  );
};

export default ExploreCard;
