import { useParams } from "react-router-dom";
import { songsArray } from "../assets/data/songs.js";
import { artistArray } from "../assets/data/artists.js";
import { Link } from "react-router-dom";
import Player from "../components/Player.jsx";

const Song = () => {

  const { id } = useParams();
  const { image, name, duration, artist, audio } = songsArray.find(item => item.id === Number(id));
  const artistObject = artistArray.find(item => item.name === artist);

  const randomPrevIndex = Math.floor(Math.random() * (songsArray.length - 1));
  const randomNextIndex = Math.floor(Math.random() * (songsArray.length - 1));

  const randomPrevId = songsArray[randomPrevIndex].id;
  const randomNextId = songsArray[randomNextIndex].id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObject.id}`} className="song__artist-image">
          <img width={75} height={75} src={artistObject.image} alt={`Imagem do Artista ${artist}`} />
        </Link>
        <Player duration={duration} randomPrevId={randomPrevId} randomNextId={randomNextId} />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
