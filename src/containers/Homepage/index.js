import { useState } from 'react';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import TabOptions from '../../components/common/TabOptions';

import Delivery from '../../components/Delivery';
import DiningOut from '../../components/DiningOut';
import NightLife from '../../components/NightLife';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case 'Delivery':
        return <Delivery />;
      case 'Dining Out':
        return <DiningOut />;
      case 'Night Life':
        return <NightLife />;
      default:
        return <Delivery />;
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
