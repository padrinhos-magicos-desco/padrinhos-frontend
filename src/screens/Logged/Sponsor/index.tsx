import SponsoredCard from '../../../components/sponsored-card';
import Database from '../../../gateways/database';

import './sponsor.css';

const Sponsor: React.FC = () => {
  if (!Database.getUserLogged()) {
    window.location.href = '/';
  }

  const db = Database.getDatabase();
  const sponsoreds = db.getSponsoreds();

  return (
    <div className="LoggedSponsor_container">
      <h1 className="LoggedSponsor_page-title">
        Tem tanta gente que dá pra ajudar...
      </h1>
      <p className="LoggedSponsor_page-subtitle">
        Quae fuerit causa, nollem me ab eo delectu rerum, quem modo dixi,
        constituto. Tum dicere exorsus est primum igitur, quid iudicat, quo
        minus id, quod maxime.
      </p>
      <div className="LoggedSponsor_sponsoreds">
        {sponsoreds.map((s, index) => {
          if (index > 8) {
            return null;
          }
          return (
            <SponsoredCard
              progress={s.Progress}
              desiredCourse={s.DesiredCourse}
              biography={s.Biography}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sponsor;
