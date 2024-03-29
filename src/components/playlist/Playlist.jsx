import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Dropdown, Image, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SpotifyAPI from "../../api/spotifyApi";
import { Credentials } from "../../constants/Credentials";
import { selectIsAuthenticated, setUser } from "../../features/authSlice";
import {
  selectCurrentSong,
  selectCurrentSongIndex,
  selectCurrentlyPlaying,
  selectIsLoading,
  selectIsPlaying,
  selectIsRepeating,
  setCurrentSong,
  setCurrentSongIndex,
  setCurrentTrackDuration,
  setCurrentlyPlaying,
  setIsLoading,
  setIsPlaying,
  setIsRepeating,
  togglePlaybackState,
  updatePlaybackTime,
} from "../../features/songSlice";
import { Link, useParams } from "react-router-dom";
import CompactList from "../compact-list-song/CompactList";
import FooterPreview from "../footer/FooterPreview";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";
import Header from "../header/Header";
import HeaderAfterLogin from "../header/header-after-login/HeaderAfterLogin";
import ListSong from "../list-song/ListSong";
import SideBar from "../side-bar/SideBar";
import "./Playlist.scss";

const Playlist = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddFolderDropdown, setShowAddFolderDropdown] = useState(false);
  const [showShareDropdown, setShowShareDropdown] = useState(false);
  const [selectedView, setSelectedView] = useState("list");
  const [showPlayButton, setShowPlayButton] = useState(false);
  const currentSong = useSelector(selectCurrentSong);
  const isPlaying = useSelector(selectIsPlaying);

  const {
    token,
    setToken,
    genres,
    setGenres,
    playlist,
    setPlaylist,
    tracks,
    setTracks,
    getSpotifyToken,
    getGenres,
    getPlaylistAndTracks,
    getPlaylistAndTracksByView,
  } = SpotifyAPI();
  const spotify = Credentials();
  const currentlyPlaying = useSelector(selectCurrentlyPlaying);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const audioRef = useRef(new Audio());
  const currentSongIndex = useSelector(selectCurrentSongIndex);
  const [playlistDetail, setplaylistDetail] = useState(null);
  const { playlistId } = useParams();
  const [indexPlaylist, setIndexPlaylist] = useState(null);
  const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);
  const filteredTracks = tracks.listOfTracksFromAPI.filter(
    (track) => track.track.preview_url
  );
  const isRepeating = useSelector(selectIsRepeating);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      dispatch(setIsLoading(true));
      try {
        const tokenResponse = await axios(
          "https://accounts.spotify.com/api/token",
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization:
                "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
            },
            data: "grant_type=client_credentials",
            method: "POST",
          }
        );

        const fetchedToken = tokenResponse.data.access_token;

        if (isMounted) {
          setToken(fetchedToken);
          const genresResponse = await axios(
            "https://api.spotify.com/v1/browse/categories?locale=sv_US",
            {
              method: "GET",
              headers: { Authorization: "Bearer " + fetchedToken },
            }
          );

          setGenres({
            selectedGenre: genres.selectedGenre,
            listOfGenresFromAPI: genresResponse.data.categories.items,
          });

          const selectedCategoryId =
            genresResponse.data.categories.items[selectedGenreIndex]?.id ||
            genresResponse.data.categories.items[0]?.id;

          // const categoryIds = genresResponse.data.categories.items.map(
          //   (category) => category.id
          // );
          // const selectedCategoryId = categoryIds[0];
          const playlistResponse = await axios(
            `https://api.spotify.com/v1/browse/categories/${selectedCategoryId}/playlists?limit=50`,
            {
              method: "GET",
              headers: { Authorization: "Bearer " + fetchedToken },
            }
          );

          setPlaylist({
            selectedPlaylist: playlist.selectedPlaylist,
            listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
          });

          // const playlistId = playlistResponse.data.playlists.items[0].id;

          const tracksResponse = await axios(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=50`,
            {
              method: "GET",
              headers: {
                Authorization: "Bearer " + fetchedToken,
              },
            }
          );

          setTracks({
            selectedTrack: tracks.selectedTrack,
            listOfTracksFromAPI: tracksResponse.data.items,
            tracks: tracksResponse.data.items,
          });

          // Xác định index dựa trên playlistId
          const playlistIndex = playlistResponse.data.playlists.items.findIndex(
            (playlist) => playlist.id === playlistId
          );

          if (isMounted) {
            setIndexPlaylist(playlistIndex);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [spotify.ClientId, spotify.ClientSecret]);

  useEffect(() => {
    dispatch(setCurrentSong(tracks.listOfTracksFromAPI[0]));
    dispatch(togglePlaybackState());
  }, [dispatch, tracks.listOfTracksFromAPI]);

  useEffect(() => {
    dispatch(setCurrentSong(tracks.listOfTracksFromAPI[0]));
    dispatch(togglePlaybackState());
  }, [dispatch, tracks.listOfTracksFromAPI]);

  const handleViewChange = async (view) => {
    setSelectedView(view);

    if (view === "list" || view === "compact") {
      try {
        await getPlaylistAndTracksByView(view);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const playSong = async (track, index) => {
    if (isAuthenticated) {
      if (currentlyPlaying && currentlyPlaying.id === track.id) {
        dispatch(setCurrentlyPlaying(null));
        dispatch(setCurrentSongIndex(null));
        audioRef.current.pause();
        document.title = "Spotify - Web Player: Music for everyone";
      } else {
        audioRef.current.src = track.previewUrl;
        dispatch(setIsPlaying(true));
        dispatch(setCurrentlyPlaying(track));
        dispatch(setCurrentTrackDuration(track.duration_ms));
        dispatch(setCurrentSongIndex(index));
        document.title = `${track.name} - Web Player: Music for everyone`;
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

  const playSongPlaylist = async (startIndex) => {
    dispatch(setCurrentSongIndex(startIndex));
    if (isAuthenticated) {
      if (currentlyPlaying && isPlaying) {
        audioRef.current.pause();
        dispatch(setIsPlaying(false));
      } else {
        const playNext = async (index) => {
          if (index < tracks.listOfTracksFromAPI.length) {
            const track = tracks.listOfTracksFromAPI[index];

            if (track.track.preview_url) {
              dispatch(setIsPlaying(true));
              dispatch(setCurrentlyPlaying(track));
              dispatch(setCurrentTrackDuration(track.track.duration_ms));
              dispatch(setCurrentSongIndex(index));
              audioRef.current.src = track.track.preview_url;
              audioRef.current.play();
              document.title = `${track.track.name} - Web Player: Music for everyone`;

              await new Promise((resolve) => {
                audioRef.current.addEventListener("ended", resolve, {
                  once: true,
                });
              });

              dispatch(setIsPlaying(false));
              playNext(index + 1);
            } else {
              playNext(index + 1);
            }
          } else {
            dispatch(setCurrentlyPlaying(null));
            dispatch(setCurrentSongIndex(null));
          }
        };

        playNext(startIndex);
      }
    } else {
      setShowLoginModal(true);
    }
  };

  const handleTimeUpdate = (newTime) => {
    dispatch(updatePlaybackTime(newTime));

    if (newTime > 30) {
      console.log("The playback has reached 30 seconds.");
    }
  };

  const handleDropdownToggle = (isOpen) => {
    setShowDropdown(isOpen);
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300;
      setShowPlayButton(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const getImageUrl = (track) => {
    const defaultImageUrl = "fallback_image_url";

    if (
      track &&
      track.track &&
      track.track.album &&
      track.track.album.images &&
      track.track.album.images.length > 0
    ) {
      return track.track.album.images[0].url || defaultImageUrl;
    }

    return defaultImageUrl;
  };

  return (
    <div className="playlist-page">
      <SideBar />
      <div className="playlist-container">
        {isAuthenticated ? (
          <HeaderAfterLogin
            name={playlist?.listOfPlaylistFromAPI[indexPlaylist]?.name}
            isPlaylistPage={true}
            showPlayButton={showPlayButton}
            playSongPlaylist={playSongPlaylist}
          />
        ) : (
          <Header
            name={playlist?.listOfPlaylistFromAPI[indexPlaylist]?.name}
            isPlaylistPage={true}
            showPlayButton={showPlayButton}
          />
        )}
        <div className="playlist-main">
          {isLoading ? (
            <div className="spinner-container">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <>
              <div className="playlist-main-content d-flex">
                <div className="playlist-image-space">
                  <Image
                    src={
                      playlist.listOfPlaylistFromAPI[indexPlaylist]?.images[0]
                        ?.url || "fallback_image_url"
                    }
                    className="playlist-image"
                  />
                </div>
                <div className="playlist-description">
                  <span className="type">Playlist</span>
                  <h1 className="playlist-title">
                    {playlist.listOfPlaylistFromAPI[indexPlaylist]?.name ||
                      "Fallback Title"}
                  </h1>
                  <span className="description-playlist">
                    {playlist.listOfPlaylistFromAPI[indexPlaylist]
                      ?.description || "Fallback Description"}
                  </span>
                  <div className="playlist-infor d-flex align-items-center">
                    <div className="playlist-artist">
                      <Image
                        src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
                        className="playlist-artist-image"
                      />
                      <Link className="playlist-artist-name">Spotify</Link>
                    </div>
                    <span className="likes">
                      {playlist.listOfPlaylistFromAPI[indexPlaylist]?.followers
                        ?.total || 0}{" "}
                      likes
                    </span>
                    <span className="songs-over-24-hr">
                      {playlist.listOfPlaylistFromAPI[indexPlaylist]?.tracks
                        ?.total || 0}{" "}
                      songs, , <span className="over-24-hr">over 24 hr</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="song-playlist">
                <div className="play-react-option-list-song d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <Button
                      className="play-btn"
                      onClick={() => playSongPlaylist(0)}
                    >
                      <i className="fa fa-play"></i>
                    </Button>
                    <Button className="heart-btn">
                      <i className="fa-regular fa-heart"></i>
                    </Button>
                    <Dropdown
                      className="more-option"
                      show={showDropdown}
                      onToggle={handleDropdownToggle}
                    >
                      <Dropdown.Toggle variant="none" id="dropdownBasic">
                        <i className="fa-solid fa-ellipsis option-icon"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="more-option-menu">
                        <Dropdown.Item className="more-option-menu-item">
                          <Button
                            variant="none"
                            className="more-option-menu-item-btn"
                          >
                            <i className="fa-solid fa-circle-plus more-option-menu-item-icon"></i>
                            <span className="more-option-menu-item-text">
                              Add to Your Library
                            </span>
                          </Button>
                        </Dropdown.Item>
                        <Dropdown.Item className="more-option-menu-item">
                          <Button
                            variant="none"
                            className="more-option-menu-item-btn"
                          >
                            <i className="fa-solid fa-circle-exclamation more-option-menu-item-icon"></i>
                            <span className="more-option-menu-item-text">
                              Report
                            </span>
                          </Button>
                        </Dropdown.Item>
                        <Dropdown.Item className="more-option-menu-item">
                          <Dropdown
                            show={showAddFolderDropdown}
                            onMouseOver={() => {
                              setShowAddFolderDropdown(true);
                            }}
                            onMouseOut={() => {
                              setShowAddFolderDropdown(false);
                            }}
                            drop="end"
                            onToggle={(isOpen, event) => {
                              if (
                                event &&
                                event.type === "click" &&
                                event.type === "keydown"
                              ) {
                                event.preventDefault();
                                event.stopPropagation();
                              }
                              setShowAddFolderDropdown(isOpen);
                            }}
                          >
                            <div className="d-flex justify-content-between">
                              <Button
                                variant="none"
                                className="more-option-menu-item-btn"
                              >
                                <i className="fa-solid fa-folder more-option-menu-item-icon"></i>
                                <span className="more-option-menu-item-text">
                                  Add to folder
                                </span>
                              </Button>
                              <Button
                                variant="none"
                                className="more-option-menu-item-btn"
                              >
                                <i className="fa-solid fa-caret-right"></i>
                              </Button>
                            </div>
                            <Dropdown.Menu className="dropdown-end dropend">
                              <Dropdown.Item className="more-option-menu-item">
                                <Button
                                  variant="none"
                                  className="more-option-menu-item-btn d-flex align-items-center"
                                  type="button"
                                >
                                  <input
                                    className="form-control outline-info mr-sm-2 search-folder"
                                    type="search"
                                    placeholder="Find folder"
                                    onClick={(e) => e.stopPropagation()}
                                    onKeyDown={(e) => e.stopPropagation()}
                                  />
                                </Button>
                              </Dropdown.Item>
                              <Dropdown.Item className="more-option-menu-item">
                                <Button
                                  variant="none"
                                  className="more-option-menu-item-btn"
                                >
                                  <i className="fa-solid fa-plus more-option-menu-item-icon"></i>
                                  <span className="more-option-menu-item-text">
                                    Create folder
                                  </span>
                                </Button>
                              </Dropdown.Item>
                              <Dropdown.Item className="more-option-menu-item">
                                <Button
                                  variant="none"
                                  className="more-option-menu-item-btn"
                                >
                                  <span className="more-option-menu-item-text">
                                    Remove from folder
                                  </span>
                                </Button>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Item>
                        <Dropdown.Item className="more-option-menu-item">
                          <Dropdown
                            show={showShareDropdown}
                            onMouseOver={() => {
                              setShowShareDropdown(true);
                            }}
                            onMouseOut={() => {
                              setShowShareDropdown(false);
                            }}
                            drop="end"
                          >
                            <div className="d-flex justify-content-between">
                              <Button
                                variant="none"
                                className="more-option-menu-item-btn"
                              >
                                <i className="fa-solid fa-share-from-square more-option-menu-item-icon"></i>
                                <span className="more-option-menu-item-text">
                                  Share
                                </span>
                              </Button>
                              <Button
                                variant="none"
                                className="more-option-menu-item-btn"
                              >
                                <i className="fa-solid fa-caret-right"></i>
                              </Button>
                            </div>
                            <Dropdown.Menu className="dropdown-end dropend">
                              <Dropdown.Item className="more-option-menu-item">
                                <Button
                                  variant="none"
                                  className="more-option-menu-item-btn"
                                >
                                  <i className="fa-solid fa-copy more-option-menu-item-icon"></i>
                                  <span className="more-option-menu-item-text">
                                    Copy link to playlist
                                  </span>
                                </Button>
                              </Dropdown.Item>
                              <Dropdown.Item className="more-option-menu-item">
                                <Button
                                  variant="none"
                                  className="more-option-menu-item-btn"
                                >
                                  <i className="fa-solid fa-code more-option-menu-item-icon"></i>
                                  <span className="more-option-menu-item-text">
                                    Embed playlist
                                  </span>
                                </Button>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="d-flex">
                    <Dropdown className="list-view-as">
                      <Dropdown.Toggle variant="none" id="dropdownBasic">
                        <i className="fa-solid fa-list list-icon"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="list-menu">
                        <Dropdown.Item
                          className="list-menu-item"
                          onClick={() => handleViewChange("compact")}
                        >
                          <div className="d-flex align-items-center justify-content-between">
                            <Button
                              variant="none"
                              className={`list-menu-item-btn ${
                                selectedView === "compact" ? "check-active" : ""
                              }`}
                            >
                              <i className="fa-solid fa-bars list-menu-item-icon"></i>
                              <span className="list-menu-item-text">
                                Compact
                              </span>
                            </Button>
                            <Button
                              variant="none"
                              className={`list-menu-item-btn ${
                                selectedView === "compact" ? "check-active" : ""
                              }`}
                            >
                              {selectedView === "compact" && (
                                <i className="fa-solid fa-check check-icon"></i>
                              )}
                            </Button>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="list-menu-item"
                          onClick={() => handleViewChange("list")}
                        >
                          <div className="d-flex align-items-center justify-content-between">
                            <Button
                              variant="none"
                              className={`list-menu-item-btn ${
                                selectedView === "list" ? "check-active" : ""
                              }`}
                            >
                              <i className="fa-solid fa-list list-menu-item-icon"></i>
                              <span className="list-menu-item-text">List</span>
                            </Button>
                            <Button
                              variant="none"
                              className={`list-menu-item-btn ${
                                selectedView === "list" ? "check-active" : ""
                              }`}
                            >
                              {selectedView === "list" && (
                                <i className="fa-solid fa-check check-icon"></i>
                              )}
                            </Button>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="list-song">
                  {selectedView === "list" && (
                    <Table hover variant="dark" className="list-table-song">
                      <thead>
                        <tr>
                          <th className="list-table-head">#</th>
                          <th className="list-table-head">Title</th>
                          <th className="list-table-head list-table-head__tablet list-table-head__mobile">
                            Album
                          </th>
                          <th className="list-table-head list-table-head__tablet list-table-head__mobile">
                            Date added
                          </th>
                          <th className="list-table-head list-table-head__mobile">
                            <i className="fa-regular fa-clock"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTracks.length > 0 ? (
                          filteredTracks.map((track, index) => (
                            <ListSong
                              key={index}
                              index={index}
                              name={track.track.name}
                              image={getImageUrl(track)}
                              album={track.track.album}
                              artists={track.track.artists}
                              addedAt={track.added_at}
                              duration={track.track.duration_ms}
                              previewUrl={track.track.preview_url}
                              isSongPlaying={
                                currentlyPlaying &&
                                currentlyPlaying.id === track.track.id
                              }
                              onPlayPause={playSong}
                              isAuthenticated={isAuthenticated}
                              showLoginModal={showLoginModal}
                              setShowLoginModal={setShowLoginModal}
                              setCurrentSongIndex={setCurrentSongIndex}
                            />
                          ))
                        ) : (
                          <p>No tracks available in this playlist.</p>
                        )}
                      </tbody>
                    </Table>
                  )}
                  {selectedView === "compact" && (
                    <Table
                      hover
                      variant="dark"
                      className="list-compact-table-song"
                    >
                      <thead>
                        <tr>
                          <th className="list-table-head">#</th>
                          <th className="list-table-head">Title</th>
                          <th className="list-table-head list-table-head__tablet list-table-head__mobile">
                            Artist
                          </th>
                          <th className="list-table-head list-table-head__tablet list-table-head__mobile">
                            Album
                          </th>
                          <th className="list-table-head list-table-head__tablet list-table-head__mobile">
                            Date added
                          </th>
                          <th className="list-table-head list-table-head__mobile">
                            <i className="fa-regular fa-clock"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTracks.length > 0 ? (
                          filteredTracks.map((track, index) => (
                            <CompactList
                              key={index}
                              index={index}
                              name={track.track.name}
                              album={track.track.album}
                              artists={track.track.artists}
                              addedAt={track.added_at}
                              duration={track.track.duration_ms}
                              previewUrl={track.track.preview_url}
                              isSongPlaying={
                                currentlyPlaying &&
                                currentlyPlaying.id === track.track.id
                              }
                              onPlayPause={playSong}
                              isAuthenticated={isAuthenticated}
                              showLoginModal={showLoginModal}
                              setShowLoginModal={setShowLoginModal}
                              setCurrentSongIndex={setCurrentSongIndex}
                            />
                          ))
                        ) : (
                          <p>No tracks available in this playlist.</p>
                        )}
                      </tbody>
                    </Table>
                  )}
                </div>
              </div>
            </>
          )}
          <footer className="playlist-footer">
            <FooterDefauft isPlaylistPage={true} />
          </footer>
        </div>
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
            playlist={playlist}
            tracks={tracks.listOfTracksFromAPI}
            onTimeUpdate={handleTimeUpdate}
            setCurrentTrackDuration={setCurrentTrackDuration}
          />
        </>
      ) : (
        <FooterPreview />
      )}
    </div>
  );
};

export default Playlist;
