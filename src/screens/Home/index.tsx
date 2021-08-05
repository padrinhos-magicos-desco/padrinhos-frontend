import BenefitsSection from './sections/benefits';
import LastCallSection from './sections/last-call';
import HowItWorksSection from './sections/how-it-works/how-it-works';
import SocialProofSection from './sections/social-proof';

import './home.css';
import MainSection from './sections/main/main';

const Home: React.FC = () => {
  return (
    <div className="Home_container">
      <MainSection />
      <HowItWorksSection />
      <section className="Home_section Home_benefits-section">
        <BenefitsSection />
      </section>
      <section className="Home_section Home_get-to-know-section" />
      <SocialProofSection />
      <section className="Home_section Home_last-call-section">
        <LastCallSection />
      </section>
      <section className="Home_section Home_screen-footer-section" />
    </div>
  );
};

export default Home;
