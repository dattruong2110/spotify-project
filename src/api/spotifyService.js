import axios from "axios";
import { useState } from "react";

const baseURL = "https://api.spotify.com/v1";

const SpotifyService = () => {
  const [searchTrack, setSearchTrack] = useState({
    selectedSearch: "",
    listOfSearchFromAPI: [],
  });

  const spotifyApi = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const searchTracks = async (token, searchTerm, offset, limit) => {
    try {
      const response = await spotifyApi.get(
        `/search?q=${encodeURIComponent(
          searchTerm
        )}&type=track&offset=${offset}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSearchTrack({
        selectedSearch: searchTerm.selectedSearch,
        listOfTracksFromAPI: response.data.tracks.items,
      });

      return response.data.tracks.items;
    } catch (error) {
      console.error("Error searching tracks: ", error);
      throw error;
    }
  };

  return {
    searchTrack,
    setSearchTrack,
    searchTracks,
  };
};

export default SpotifyService;
