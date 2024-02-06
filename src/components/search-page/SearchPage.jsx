import React, { useEffect, useRef, useState } from "react";
import "./SearchPage.scss";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../side-bar/SideBar";
import Header from "../header/Header";
import FooterPreview from "../footer/FooterPreview";
import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";
import { selectIsAuthenticated } from "../../features/authSlice";
import HeaderAfterLogin from "../header/header-after-login/HeaderAfterLogin";
import SpotifyAPI from "../../api/spotifyApi";
import SpotifyService from "../../api/spotifyService";
import axios from "axios";
import {
  selectCurrentSong,
  selectCurrentSongIndex,
  selectCurrentlyPlaying,
  selectIsLoading,
  selectIsPlaying,
  selectSearchResults,
  selectSearchTerm,
  setCurrentSong,
  setCurrentSongIndex,
  setCurrentTrackDuration,
  setCurrentlyPlaying,
  setIsLoading,
  setIsPlaying,
  setSearchResults,
  togglePlaybackState,
  updatePlaybackTime,
} from "../../features/songSlice";
import { Button, Image, Modal, Spinner, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";

const SearchPage = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const audioRef = useRef(new Audio());
  const spotifyAPI = SpotifyAPI();
  const { tracks } = SpotifyAPI();
  const { token } = spotifyAPI;
  const { searchTracks, searchTrack } = SpotifyService();
  const searchResults = useSelector(selectSearchResults);
  const searchTerm = useSelector(selectSearchTerm);
  const isLoading = useSelector(selectIsLoading);
  const isPlaying = useSelector(selectIsPlaying);
  const currentSong = useSelector(selectCurrentSong);
  const currentlyPlaying = useSelector(selectCurrentlyPlaying);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const currentSongIndex = useSelector(selectCurrentSongIndex);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const filteredSearchResults = searchResults.filter(
    (track) => track.preview_url
  );
  const predefinedColors = [
    "#dc148c",
    "#148a08",
    "#8400e7",
    "#eb1e32",
    "#0d72ed",
  ];

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
    const fetchSearchResults = async () => {
      dispatch(setIsLoading(true));
      try {
        const offset = 10;
        const limit = 50;
        const tracks = await searchTracks(token, searchTerm, offset, limit);

        dispatch(setSearchResults(tracks));
      } catch (error) {
        console.error("Error fetching search results:", error);
        dispatch(setSearchResults([]));
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    if (searchTerm.trim() !== "") {
      fetchSearchResults();
    } else {
      dispatch(setSearchResults([]));
    }
  }, [searchTerm, dispatch]);

  const handleTimeUpdate = (newTime) => {
    dispatch(updatePlaybackTime(newTime));

    if (newTime > 30) {
      console.log("The playback has reached 30 seconds.");
    }
  };

  const playSong = async (track, index) => {
    if (isAuthenticated) {
      if (currentlyPlaying && currentlyPlaying.id === track.id) {
        dispatch(setCurrentlyPlaying(null));
        dispatch(setCurrentSongIndex(null));
        audioRef.current.pause();
        setCurrentPlayingIndex(null);
        document.title = "Spotify - Web Player: Music for everyone";
      } else {
        audioRef.current.src = track.preview_url;
        dispatch(setIsPlaying(true));
        dispatch(setCurrentlyPlaying(track));
        dispatch(setCurrentTrackDuration(track.duration_ms));
        dispatch(setCurrentSongIndex(index));
        document.title = `${track.name} - Web Player: Music for everyone`;
        audioRef.current.play();
        setCurrentPlayingIndex(index);
      }
    } else {
      const name = track.name;
      const album = track.album;
      setShowLoginModal({ show: true, songInfo: { name, album } });
    }
    dispatch(setCurrentSong(track));
    dispatch(togglePlaybackState());
  };

  const pauseSong = () => {
    audioRef.current.pause();
    dispatch(setIsPlaying(false));
  };

  const renderPlaylists = () => {
    const allGenres = spotifyAPI.genres.listOfGenresFromAPI;
    const allPlaylists = spotifyAPI.playlist.listOfPlaylistFromAPI;

    if (
      !allGenres ||
      allGenres.length === 0 ||
      !allPlaylists ||
      allPlaylists.length === 0
    ) {
      return <p>No genres or playlists available.</p>;
    }

    const allItemsToRender = [...allGenres, ...allPlaylists];

    return allItemsToRender.map((item, index) => (
      <Link
        to={`/playlist/${item.id}`}
        className="item-music"
        key={item.id}
        style={{
          backgroundColor: predefinedColors[index % predefinedColors.length],
        }}
      >
        <div>
          <img
            src={item.images && item.images[0] && item.images[0].url}
            alt={item.name}
            className="img-list"
          />
          <span className="span-list">{item.name}</span>
        </div>
      </Link>
    ));
  };

  return (
    <>
      <SideBar />
      <div className="main-search">
        {isAuthenticated ? (
          <HeaderAfterLogin isSearchPage={true} />
        ) : (
          <Header isSearchPage={true} />
        )}
        <div className="search-soptify-playlist">
          {filteredSearchResults?.length > 0 ? (
            <>
              <h2>Search results for "{searchTerm}"</h2>
              {isLoading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <>
                  {filteredSearchResults.length > 0 && (
                    <Table hover variant="dark" className="list-table-song">
                      <tbody>
                        {filteredSearchResults.map((result, index) => (
                          <tr key={result.id} className="list-table-row">
                            <td
                              className="list-song-table-description border-0 d-flex align-items-center"
                              onClick={() => playSong(result, index)}
                            >
                              {result.preview_url && (
                                <button className="play-button-search-page">
                                  <i
                                    className={`fa-solid ${
                                      currentPlayingIndex === index
                                        ? "fa-pause"
                                        : "fa-play"
                                    }`}
                                  ></i>
                                </button>
                              )}
                              <Image
                                src={result.album.images[0].url}
                                alt={result.name}
                                className="song-playlist-image"
                              />
                              <div className="song-artist-name d-grid">
                                <span
                                  className={`link-song ${
                                    currentPlayingIndex === index
                                      ? "song-active"
                                      : ""
                                  }`}
                                >
                                  {result.name}
                                </span>
                                <span className="link-artist">
                                  {result.artists.map((artist, index) => (
                                    <span key={index}>
                                      {artist.name}
                                      {index < result.artists.length - 1 &&
                                        ", "}
                                    </span>
                                  ))}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {showLoginModal && (
                          <Modal
                            show={showLoginModal.show}
                            onHide={() => setShowLoginModal(false)}
                            centered
                          >
                            <Modal.Body>
                              <div className="d-flex align-items-center">
                                <div className="left-modal">
                                  <Image
                                    className="modal-song-playlist-image"
                                    src={
                                      showLoginModal.songInfo.album.images[0]
                                        .url
                                    }
                                    alt={showLoginModal.songInfo.name}
                                  />
                                </div>
                                <div className="right-modal d-grid">
                                  <h4 className="modal-song-playlist-title">
                                    Start listening with a free Spotify account
                                  </h4>
                                  <Button
                                    className="modal-button-sign-up"
                                    onClick={() => navigate("/signup")}
                                  >
                                    Sign up free
                                  </Button>
                                  <br />
                                  <span className="text-center already-account">
                                    Already have an account?{" "}
                                    <Link to={"/login"} className="login-link">
                                      Log in here
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={() => setShowLoginModal(false)}
                              >
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        )}
                      </tbody>
                    </Table>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <h2>Browse all</h2>
              <div className="list">{renderPlaylists()}</div>
            </>
          )}
          <FooterDefauft isSearchPage={true} />
        </div>
        {isAuthenticated ? (
          <>
            <FooterPlayMusic
              isSongPlaying={isPlaying}
              onPlayPause={
                isPlaying
                  ? pauseSong
                  : () => playSong(currentlyPlaying, currentSongIndex)
              }
              currentSong={currentSong}
              audioRef={audioRef}
              searchTrack={searchTrack}
              tracks={tracks.listOfTracksFromAPI}
              onTimeUpdate={handleTimeUpdate}
              setCurrentTrackDuration={setCurrentTrackDuration}
            />
          </>
        ) : (
          <FooterPreview />
        )}
      </div>
    </>
  );
};

export default SearchPage;
