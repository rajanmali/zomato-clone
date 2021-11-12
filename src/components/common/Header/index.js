const Header = () => {
  return (
    <header className="header max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header__logo"
      />
      <div className="header__inputs">
        <div className="header__location-search-container">
          <div className="header__location-wrapper">
            <div className="header__location-icon-name">
              <i className="fi fi-rr-marker absolute-center header__location-icon" />
              <span className="header__location-name">Bangalore</span>
            </div>
            <i className="fi fi-rr-caret-down absolute-center" />
          </div>
          <div className="header__inputs-separator" />
          <div className="header__search-wrapper">
            <i className="fi fi-rr-search absolute-center header__search-icon" />
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="header__search-input"
            />
          </div>
        </div>
      </div>
      <div className="header__profile-wrapper">
        <img
          src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
          alt="User rofile"
          className="header__profile-image"
        />
        <span className="header__profile-name">Rajan</span>
        <i className="fi fi-rr-angle-small-down absolute-center header__profile-dropdown-icon" />
      </div>
    </header>
  );
};

export default Header;
