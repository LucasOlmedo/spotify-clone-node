import axios from "axios";
import { getAccessToken } from "../config/auth.js";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

const getTrendingArtists = async () => {
  const token = await getAccessToken();
  const response = await axios.get(`${SPOTIFY_API_URL}/artists`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const getArtistTopTracks = async (artistId) => {
  const token = await getSpotifyToken();
  const response = await axios.get(
    `${SPOTIFY_API_URL}/artists/${artistId}/top-tracks`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

const getTrendingTracks = async () => {
  const token = await getSpotifyToken();
  const response = await axios.get(`${SPOTIFY_API_URL}/tracks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const getTrackDetails = async (trackId) => {
  const token = await getSpotifyToken();
  const response = await axios.get(`${SPOTIFY_API_URL}/tracks/${trackId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export {
  getTrendingArtists,
  getArtistTopTracks,
  getTrendingTracks,
  getTrackDetails,
};
