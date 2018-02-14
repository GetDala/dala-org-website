import React, { Component } from 'react';

// styles ans scripts
import '../../utils/styles/boilerplate.css';

// components
import Hero from '../Hero/Hero';
import AboutDala from '../AboutDala/AboutDala';
import DalaEcosystem from '../DalaEcosystem/DalaEcosystem';
import RewardsEngine from '../RewardsEngine/RewardsEngine';
import DalaGovernance from '../DalaGovernance/DalaGovernance';
import ProductTimeline from '../ProductTimeline/ProductTimeline';
import DalaTokenSale from '../DalaTokenSale/DalaTokenSale';
import News from '../News/News';
import BecomePartners from '../BecomePartners/BecomePartners';
import Footer from '../Footer/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Hero />
        <AboutDala />
        <DalaEcosystem />
        <RewardsEngine />
        <DalaGovernance />
        <ProductTimeline />
        <DalaTokenSale />
        <News />
        <BecomePartners />
        <Footer />
      </div>
    );
  }
}

export default App;
