import { getTrendingArtists } from "../services/spotifyService.js";

const fetchTrendingArtists = async (req, res) => {
  try {
    const artists = await getTrendingArtists();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchArtistTracks = async (req, res) => {
  try {
    const { id } = req.params;
    const tracks = await getArtistTopTracks(id);
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { fetchTrendingArtists, fetchArtistTracks };
