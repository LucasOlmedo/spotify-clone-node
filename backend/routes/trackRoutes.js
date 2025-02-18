import express from "express";
import {
  getTrendingTracks,
  getTrackDetails,
} from "../services/spotifyService.js";

const trackRoutes = express.Router();

trackRoutes.get("/tracks", async (req, res) => {
  try {
    const tracks = await getTrendingTracks();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

trackRoutes.get("/tracks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const track = await getTrackDetails(id);
    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default trackRoutes;
