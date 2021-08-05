import BenefitsSection from './sections/benefits';
import LastCallSection from './sections/last-call';
import HowItWorksSection from './sections/how-it-works/how-it-works';
import SocialProofSection from './sections/social-proof';
import GetToKnowSection from './sections/get-to-know';

import './home.css';
import MainSection from './sections/main/main';

const Home: React.FC = () => {
  return (
    <div className="Home_container">
      <MainSection />
      <HowItWorksSection />
      <BenefitsSection />
      <section className="Home_section Home_get-to-know-section" />
      <SocialProofSection />
      <LastCallSection />
      <section className="Home_section Home_screen-footer-section" />
    </div>
  );
};

export default Home;
