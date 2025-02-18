import {
  getTrendingTracks,
  getTrackDetails,
} from "../services/spotifyService.js";

const fetchTrendingTracks = async (req, res) => {
  try {
    const tracks = await getTrendingTracks();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchTrackDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const track = await getTrackDetails(id);
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { fetchTrendingTracks, fetchTrackDetails };
