import spotifyLogo from "../assets/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={spotifyLogo} alt="logo" />
      </Link>
      <Link to="/">
        <h1>Spotify Clone</h1>
      </Link>
    </div>
  );
};

export default Header;
