import Player from '../../../../components/icon/Player';
import './get-to-know.css';

const GetToKnow: React.FC = () => {
  return (
    <section className="GetToKnow_container">
      <div className="GetToKnow_column-1">
        <div className="GetToKnow_title">
          Conheça a facul e a pós descomplica
        </div>
        <div className="GetToKnow_subtitle">
          Estude com quem tem ensino de alto padrão por um preço que cabe no
          bolso
        </div>
      </div>

      <div>
        <div className="GetToKnow_player">
          <div className="GetToKnow_background">
            <Player />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnow;
