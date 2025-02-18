import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import artistRoutes from "./routes/artistRoutes.js";
import trackRoutes from "./routes/trackRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", artistRoutes);
app.use("/api", trackRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
