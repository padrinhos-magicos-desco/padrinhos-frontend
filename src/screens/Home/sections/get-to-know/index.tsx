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
          Um copy que fale sobre os produtos que estão sendo contemplados nesse
          rolê todo
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
