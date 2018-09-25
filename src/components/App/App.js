import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// styles ans scripts
import '../../utils/styles/boilerplate.css';

// components
import Hero from '../Hero/Hero';
import AboutDala from '../AboutDala/AboutDala';
import DalaEcosystem from '../DalaEcosystem/DalaEcosystem';
import DalaToday from '../DalaToday/DalaToday';
import Partnerships from '../Partnerships/Partnerships';
import DalaProtocols from '../DalaProtocols/DalaProtocols';
import Team from '../Team/Team';
import DalaTokenSale from '../DalaTokenSale/DalaTokenSale';
import News from '../News/News';
import BecomePartners from '../BecomePartners/BecomePartners';
import Footer from '../Footer/Footer';
import HeroNavBar from '../Navbars/HeroNavbar/HeroNavBar';
import PrivacyPolicy from '../Legal/PrivacyPolicy/PrivacyPolicy';
import Terms from '../Legal/Terms/Terms';
import EmailDisclaimer from '../Legal/EmailDisclaimer/EmailDisclaimer';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-78909073-2');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  render() {
    const MainSite = () => {
      return(
        <div>
          <div className="hero-head">
            <HeroNavBar/>
          </div>
          <Hero />
          <AboutDala />
          <DalaEcosystem />
          <DalaToday />
          <Partnerships />
          <DalaProtocols />
          <Team />
          <DalaTokenSale />
          <News />
          <BecomePartners />
          <Footer />
        </div>
      );
    };

    const Privacy = () => {
      return(
        <div>
          <div className="hero-head">
            <HeroNavBar legalSection />
          </div>
          <PrivacyPolicy />
          <BecomePartners legalSection />
          <Footer legalSection />
        </div>
      );
    };

    const TsAndCs = () => {
      return(
        <div>
          <div className="hero-head">
            <HeroNavBar legalSection />
          </div>
          <Terms />
          <BecomePartners legalSection />
          <Footer legalSection />
        </div>
      );
    };

    const EmailLegal = () => {
      return(
        <div>
          <div className="hero-head">
            <HeroNavBar legalSection />
          </div>
          <EmailDisclaimer />
          <BecomePartners legalSection />
          <Footer legalSection />
        </div>
      );
    };

    const ScrollToTop = () => {
      window.scrollTo(0, 0);
      return null;
    };

    return (
      <Router>
        <div>
          <Route component={ScrollToTop} />
          <Route exact path="/" component={MainSite} />
          <Route exact path="/privacypolicy" component={Privacy} />
          <Route exact path="/terms" component={TsAndCs} />
          <Route exact path="/emailDisclaimer" component={EmailLegal} />
        </div>
      </Router>
    );
  }
}

export default App;
