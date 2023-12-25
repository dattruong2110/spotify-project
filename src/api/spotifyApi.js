import axios from "axios";
import { useState } from "react";
import { Credentials } from "../constants/Credentials";

const SpotifyAPI = () => {
  const spotify = Credentials();
  const [token, setToken] = useState("");
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });
  const [loading, setLoading] = useState(false);

  const getSpotifyToken = async () => {
    try {
      setLoading(true);
      const response = await axios("https://accounts.spotify.com/api/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
        },
        data: "grant_type=client_credentials",
        method: "POST",
      });

      setToken(response.data.access_token);
    } catch (error) {
      console.error("Error fetching Spotify token:", error);
    } finally {
      setLoading(false);
    }
  };

  const getGenres = async () => {
    try {
      setLoading(true);
      const response = await axios(
        "https://api.spotify.com/v1/browse/categories?locale=sv_US",
        {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        }
      );

      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromAPI: response.data.categories.items,
      });
    } catch (error) {
      console.error("Error fetching genres:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPlaylistAndTracks = async () => {
    try {
      setLoading(true);
      const categoriesResponse = await axios(
        "https://api.spotify.com/v1/browse/categories?locale=sv_US",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const categoryIds = categoriesResponse.data.categories.items.map(
        (category) => category.id
      );
      const selectedCategoryId = categoryIds[0];
      const playlistResponse = await axios(
        `https://api.spotify.com/v1/browse/categories/${selectedCategoryId}/playlists?limit=10`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        }
      );

      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
      });

      const playlistId = playlistResponse.data.playlists.items[0].id;

      const tracksResponse = await axios(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPlaylistAndTracksByView = async (view) => {
    try {
      setLoading(true);
      const categoriesResponse = await axios(
        "https://api.spotify.com/v1/browse/categories?locale=sv_US",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const categoryIds = categoriesResponse.data.categories.items.map(
        (category) => category.id
      );
      const selectedCategoryId = categoryIds[0];
      const playlistResponse = await axios(
        `https://api.spotify.com/v1/browse/categories/${selectedCategoryId}/playlists?limit=10`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        }
      );

      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
      });

      let playlistId;

      if (view === "compact") {
        playlistId = playlistResponse.data.playlists.items[0].id;
      } else if (view === "list") {
        playlistId = playlistResponse.data.playlists.items[0].id;
      }

      const tracksResponse = await axios(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    token,
    genres,
    playlist,
    tracks,
    getSpotifyToken,
    getGenres,
    getPlaylistAndTracks,
    getPlaylistAndTracksByView,
  };
};

export default SpotifyAPI;