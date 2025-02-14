import ItemList from './ItemList.jsx';
import { artistArray } from "../assets/data/artists.js";
import { songsArray } from "../assets/data/songs.js";

const Main = () => {
  return (
    <div className="main">
      <ItemList title="Top Artistas" items={artistArray} size={6} path="/artists" itemPath="/artist"  />
      <ItemList title="Músicas em Alta" items={songsArray} size={12} path="/songs" itemPath="/song" />
    </div>
  );
};

export default Main;
