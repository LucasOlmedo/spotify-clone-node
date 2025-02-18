import express from "express";
import {
  getTrendingArtists,
  getArtistTopTracks,
} from "../services/spotifyService.js";

const artistRoutes = express.Router();

artistRoutes.get("/artists", async (req, res) => {
  try {
    const artists = await getTrendingArtists();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

artistRoutes.get("/artists/:id/top-tracks", async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await getArtistTopTracks(id);
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default artistRoutes;
