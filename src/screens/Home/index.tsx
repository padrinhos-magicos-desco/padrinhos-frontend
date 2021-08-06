import BenefitsSection from './sections/benefits';
import LastCallSection from './sections/last-call';
import HowItWorksSection from './sections/how-it-works/how-it-works';
import SocialProofSection from './sections/social-proof';
import GetToKnowSection from './sections/get-to-know';
import Footer from './sections/footer';

import './home.css';
import MainSection from './sections/main/main';

const HomeScreen: React.FC = () => {
  return (
    <div className="Home_container">
      <MainSection />
      <HowItWorksSection />
      <BenefitsSection />
      <GetToKnowSection />
      <SocialProofSection />
      <LastCallSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
