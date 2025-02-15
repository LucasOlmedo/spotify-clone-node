import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';

const Player = ({ duration, randomPrevId, randomNextId }) => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomPrevId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />
        <Link to={`/song/${randomNextId}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>00:00</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>
    </div>
  );
};

Player.propTypes = {
  duration: PropTypes.string,
  randomPrevId: PropTypes.number,
  randomNextId: PropTypes.number,
};

export default Player;
