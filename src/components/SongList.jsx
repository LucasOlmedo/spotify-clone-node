import PropTypes from "prop-types";
import SongItem from "./SongItem.jsx";
import { useState } from "react";

const SongList = ({ songs }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songs
        .filter((value, index) => index < items)
        .map((song, index) => (
          <SongItem key={song.id} {...song} index={index} />
        ))}

      <p className="song-list__see-more" onClick={() => setItems(items + 5)}>
        Ver mais
      </p>
    </div>
  );
};

SongList.propTypes = {
  songs: PropTypes.array.isRequired,
};

export default SongList;
