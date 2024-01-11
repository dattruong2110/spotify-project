import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyAPI from "../../api/spotifyApi";
import { selectIsAuthenticated, setUser } from "../../features/authSlice";
import FooterPreview from "../footer/FooterPreview";
import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";
import Header from "../header/Header";
import HeaderAfterLogin from "../header/header-after-login/HeaderAfterLogin";
import SideBar from "../side-bar/SideBar";
import "./HomePage.scss";
import {
  selectCurrentSong,
  selectCurrentSongIndex,
  selectCurrentlyPlaying,
  selectIsPlaying,
  selectPlaybackTime,
  setCurrentSong,
  setCurrentSongIndex,
  setCurrentTrackDuration,
  setCurrentlyPlaying,
  setIsPlaying,
  togglePlaybackState,
  updatePlaybackTime,
} from "../../features/songSlice";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const spotifyAPI = SpotifyAPI();
  const audioRef = useRef(new Audio());
  const currentSong = useSelector(selectCurrentSong);
  const isPlaying = useSelector(selectIsPlaying);
  const currentlyPlaying = useSelector(selectCurrentlyPlaying);
  const currentSongIndex = useSelector(selectCurrentSongIndex);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();


  const handlePlaylistClick = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await spotifyAPI.getSpotifyToken();
      } catch (error) {
        console.error("Error fetching Spotify token:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await spotifyAPI.getGenres();
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await spotifyAPI.getPlaylistAndTracks();
      } catch (error) {
        console.error("Error fetching playlist and tracks:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const [showAllPlaylists, setShowAllPlaylists] = useState(false);

  const handleShowAllClick = () => {
    setShowAllPlaylists(true);
  };

  const playSong = (track, index) => {
    if (isAuthenticated) {
      if (currentlyPlaying && currentlyPlaying.id === track.id) {
        dispatch(setCurrentlyPlaying(null));
        dispatch(setCurrentSongIndex(null));
        audioRef.current.pause();
      } else {
        dispatch(setCurrentlyPlaying(track));
        dispatch(setIsPlaying(true));
        audioRef.current.src = track.previewUrl;
        dispatch(setCurrentTrackDuration(track.duration_ms));
        audioRef.current.play();
      }
    } else {
      setShowLoginModal(true);
    }
    dispatch(setCurrentSong(track));
    dispatch(togglePlaybackState());
  };

  const pauseSong = () => {
    audioRef.current.pause();
    dispatch(setIsPlaying(false));
  };

  const handleTimeUpdateInHomepage = (newTime) => {
    dispatch(updatePlaybackTime(newTime));
  };

  const renderPlaylists = () => {
    const allPlaylists = spotifyAPI.playlist.listOfPlaylistFromAPI;
    if (!allPlaylists || allPlaylists.length === 0) {
      return <p>No playlists available.</p>;
    }
    const playlistsToRender = showAllPlaylists
      ? allPlaylists
      : allPlaylists.slice(0, 7);

    return playlistsToRender.map((playlist) => (
      <div className="item" key={playlist.id}>
        <Link className="" to={`/playlist/${playlist.id}`}>
          <img src={playlist.images[0].url} alt={playlist.name} />
          <div className="play">
            <span className="fa fa-play"></span>
          </div>
          <h4>{playlist.name}</h4>
          <p>{playlist.description}</p>
        </Link>
      </div>
    ));
  };

  const handleGenreChange = async (selectedGenreIndex) => {
    if (spotifyAPI.genres.listOfGenresFromAPI[selectedGenreIndex]) {
      const selectedGenreId =
        spotifyAPI.genres.listOfGenresFromAPI[selectedGenreIndex].id;
      await spotifyAPI.getPlaylistAndTracksByGenre(selectedGenreId);
      setShowAllPlaylists(false);
    }
  };

  console.log(spotifyAPI.genres);
  return (
    <>
      <body>
        <SideBar />
        <div className="main-container-homepage">
          {isAuthenticated ? <HeaderAfterLogin /> : <Header />}
          <div className={`spotify-playlists ${isAuthenticated ? "mt-5" : ""}`}>
            <div className="genres-list d-flex">
              <p>Select Genre:</p>
              <select onChange={(e) => handleGenreChange(e.target.value)}>
                {spotifyAPI.genres.listOfGenresFromAPI.map((genre, index) => (
                  <option key={genre.id} value={index}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex">
              <h2>Playlist Hit</h2>
              {!showAllPlaylists && (
                <button
                  className="btn-display-more"
                  onClick={handleShowAllClick}
                >
                  Show all
                </button>
              )}
            </div>

            <div className="list">{renderPlaylists()}</div>
          </div>

          {isAuthenticated ? (
            <FooterPlayMusic
              isSongPlaying={isPlaying}
              onPlayPause={
                isPlaying
                  ? pauseSong
                  : () => playSong(currentlyPlaying, currentSongIndex)
              }
              audioRef={audioRef}
              currentSong={currentSong}
              onTimeUpdate={handleTimeUpdateInHomepage}
              setCurrentTrackDuration={setCurrentTrackDuration}
            />
          ) : (
            <FooterPreview />
          )}
        </div>
        <script
          src="https://kit.fontawesome.com/23cecef777.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
};

export default HomePage;
