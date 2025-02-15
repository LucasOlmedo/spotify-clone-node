import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { artistArray } from "../assets/data/artists.js";
import { Link } from "react-router-dom";
import SongList from "../components/SongList.jsx";
import { songsArray } from "../assets/data/songs.js";

const Artist = () => {

  const { id } = useParams();
  const { name, banner } = artistArray.find(item => item.id === Number(id));
  const songsFromArtist = songsArray.filter(item => item.artist === name);

  const randomIndex = Math.floor(
    Math.random() * (songsFromArtist.length - 1)
  );
  const randomIdFromArtist = songsFromArtist[randomIndex].id;

  return (
    <div className="artist">
      <div className="artist__header"
        style={{ backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`, }}>
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songs={songsFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Artist;
