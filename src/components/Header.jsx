import spotifyLogo from "../assets/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={spotifyLogo} alt="logo" />
      <a href="/">
        <h1>Spotify Clone</h1>
      </a>
    </div>
  );
};

export default Header;
