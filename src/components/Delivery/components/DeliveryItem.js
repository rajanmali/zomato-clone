const DeliveryItem = ({ item }) => (
  <>
    <div className="delivery-item__image-wrapper">
      <img src={item.cover} className="delivery-item__image" alt={item.title} />
    </div>
    <p className="delivery-item__title">{item.title}</p>
  </>
);

export default DeliveryItem;
