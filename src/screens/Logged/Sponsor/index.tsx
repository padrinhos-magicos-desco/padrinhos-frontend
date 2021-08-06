import Database from '../../../gateways/database';
import './sponsor.css';

const Sponsor: React.FC = () => {
  if (!Database.getUserLogged()) {
    window.location.href = '/';
  }

  return <div className="Sponsor_container">Área logada do padrinho</div>;
};

export default Sponsor;
