import Database from '../../../gateways/database';
import './sponsor.css';

const containerStyles = {
  height: 20,
  width: '100%',
  backgroundColor: '#DDDDDD',
  borderRadius: 50,
};

const fillerStyles = {
  height: '100%',
  backgroundColor: '#00E88F',
  borderRadius: 'inherit',
};

const labelStyles = {
  padding: 5,
  color: 'white',
};

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
            <div className="LoggedSponsor_sponsored-card">
              <div className="LoggedSponsor_sponsored-progress">
                <div style={containerStyles}>
                  <div
                    style={{ ...fillerStyles, width: `${s.Progress}%` || 0 }}
                  >
                    <span style={labelStyles}>{`${s.Progress || 0}%`}</span>
                  </div>
                </div>
                <h1 className="LoggedSponsor_title">{s.DesiredCourse}</h1>
              </div>

              <p className="LoggedSponsor_description">{s.Biography}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsor;
