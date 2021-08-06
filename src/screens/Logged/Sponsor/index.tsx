import { useState } from 'react';

import Button from '../../../components/button';
import SponsoredCard from '../../../components/sponsored-card';
import Database from '../../../gateways/database';
import Modal from '../../../components/modal';
import Avatar from '../../../components/sponsored-card/avatar';
import ShareButtons from '../../../components/share-buttons';

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
  color: 'black',
};

const Sponsor: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [desiredCourse, setDesiredCourse] = useState('');
  const [biography, setBiography] = useState('');
  const [shouldShowModal, setShouldShowConfirmationModal] = useState(false);

  if (!Database.getUserLogged()) {
    window.location.href = '/';
  }

  const db = Database.getDatabase();
  const sponsoreds = db.getSponsoreds();

  const renderModal = () => {
    if (!shouldShowModal) return null;
    return (
      <Modal onCloseClick={() => setShouldShowConfirmationModal(false)}>
        <>
          <div className="LoggedSponsor_modal-content">
            <div className="LoggedSponsor_flexbox">
              <Avatar />
              <div className="LoggedSponsor_desiredCourse">
                <h1 className="SponsoredCard_title">{desiredCourse}</h1>
                <div style={containerStyles}>
                  <div style={{ ...fillerStyles, width: `${progress}%` || 0 }}>
                    <span style={labelStyles}>{`${progress || 0}%`}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="LoggedSponsor-text">{biography}</p>

            <div className="LoggedSponsor-buttons">
              <Button buttonText="Apadrinhar" onClick={() => null} />
              <div className="LoggedSponsor-buttons-margin">
                <ShareButtons shareText={biography} />
              </div>
            </div>
          </div>
        </>
      </Modal>
    );
  };

  const handleClick = (
    progressParam: number,
    desiredCourseParam: string,
    biographyParam: string
  ) => {
    setProgress(progressParam);
    setDesiredCourse(desiredCourseParam);
    setBiography(biographyParam);
    setShouldShowConfirmationModal(true);
  };

  return (
    <div className="LoggedSponsor_container">
      {renderModal()}
      <h1 className="LoggedSponsor_page-title">Dá pra ajudar muita gente</h1>
      <p className="LoggedSponsor_page-subtitle">
        Veja mais pessoas que precisam de uma forcinha pra estudar de novo
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
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sponsor;
