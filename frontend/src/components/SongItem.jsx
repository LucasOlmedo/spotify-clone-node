import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SongItem = ({ image, name, duration, id, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

SongItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.string,
  id: PropTypes.number,
  index: PropTypes.number,
};

export default SongItem;