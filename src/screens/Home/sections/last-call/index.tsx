import Button from '../../../../components/button';

import './last-call.css';

const LastCall: React.FC = () => {
  return (
    <div className="LastCall_container">
      <h1>
        Um título bem chamativo de last call. Não pode perder essa oportunidade
      </h1>
      <div className="LastCall_subtitle">
        <p>
          Um subtítulo que ajude esse título bem maneiro de last call. Trazer
          pessoas uhul. Projeto 20k
        </p>
      </div>
      <Button
        buttonText="Quero participar"
        buttonColor="#00e88f"
        borderColor="#00e88f"
        buttonTextColor="#000"
      />
    </div>
  );
};

export default LastCall;
