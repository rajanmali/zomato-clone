import { useState } from 'react';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import TabOptions from '../../components/common/TabOptions';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case 'Delivery':
        return <div>Delivery</div>;
      case 'Dining Out':
        return <div>Dining Out</div>;
      case 'Night Life':
        return <div>Night Life</div>;
      default:
        return <div>Delivery</div>;
    }
  };

  return (
    <>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </>
  );
};

export default HomePage;
