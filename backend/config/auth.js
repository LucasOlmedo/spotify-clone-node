import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function getAccessToken() {
  const auth = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${auth}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getAccessToken };
