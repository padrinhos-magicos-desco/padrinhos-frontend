import Database from '../../../gateways/database';
import './sponsored.css';

const Sponsored: React.FC = () => {
  if (!Database.getUserLogged()) {
    window.location.href = '/';
  }

  return <div className="Sponsored_container">Área logada do apadrinhado</div>;
};

export default Sponsored;
