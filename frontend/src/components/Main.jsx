import ItemList from './ItemList.jsx';
import { artistArray } from "../assets/data/artists.js";
import { songsArray } from "../assets/data/songs.js";
import PropTypes from "prop-types";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList title="Top Artistas" items={artistArray} size={6} path="/artists" itemPath="/artist" />
      ) : (
        <></>
      )}
      {type === "songs" || type === undefined ? (
        <ItemList title="Músicas em Alta" items={songsArray} size={12} path="/songs" itemPath="/song" />
      ) : (
        <></>
      )}
    </div>
  );
};

Main.propTypes = {
  type: PropTypes.string,
};

export default Main;
