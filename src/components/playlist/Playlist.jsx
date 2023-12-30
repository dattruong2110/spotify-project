import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Dropdown, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CompactList from "../compact-list-song/CompactList";
import FooterPreview from "../footer/FooterPreview";
import Header from "../header/Header";
import ListSong from "../list-song/ListSong";
import SideBar from "../side-bar/SideBar";
import "./Playlist.scss";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import SpotifyAPI from "../../api/spotifyApi";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, setUser } from "../../features/authSlice";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";
import axios from "axios";
import { Credentials } from "../../constants/Credentials";
import HeaderAfterLogin from "../header/header-after-login/HeaderAfterLogin";

const Playlist = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddFolderDropdown, setShowAddFolderDropdown] = useState(false);
  const [showShareDropdown, setShowShareDropdown] = useState(false);
  const [selectedView, setSelectedView] = useState("list");
  const [showPlayButton, setShowPlayButton] = useState(false);

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
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
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

          const categoryIds = genresResponse.data.categories.items.map(
            (category) => category.id
          );
          const selectedCategoryId = categoryIds[0];
          const playlistResponse = await axios(
            `https://api.spotify.com/v1/browse/categories/${selectedCategoryId}/playlists?limit=10`,
            {
              method: "GET",
              headers: { Authorization: "Bearer " + fetchedToken },
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
                Authorization: "Bearer " + fetchedToken,
              },
            }
          );

          setTracks({
            selectedTrack: tracks.selectedTrack,
            listOfTracksFromAPI: tracksResponse.data.items,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [spotify.ClientId, spotify.ClientSecret]);

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

  const playSong = (track) => {
    if (currentlyPlaying && currentlyPlaying.id === track.id) {
      setCurrentlyPlaying(null);
      audioRef.current.pause();
    } else {
      setCurrentlyPlaying(track);
      audioRef.current.src = track.previewUrl;
      audioRef.current.play();
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

  return (
    <div className="playlist-page">
      <SideBar />
      <div className="playlist-container">
        {isAuthenticated ? (
          <HeaderAfterLogin
            isPlaylistPage={true}
            showPlayButton={showPlayButton}
          />
        ) : (
          <Header isPlaylistPage={true} showPlayButton={showPlayButton} />
        )}
        <div className="playlist-main">
          <div className="playlist-main-content d-flex align-items-end">
            <div className="playlist-image-space">
              <Image
                src={
                  playlist.listOfPlaylistFromAPI[0]?.images[0]?.url ||
                  "fallback_image_url"
                }
                className="playlist-image"
              />
            </div>
            <div className="playlist-description">
              <span className="type">Playlist</span>
              <h1 className="playlist-title">
                {playlist.listOfPlaylistFromAPI[0]?.name || "Fallback Title"}
              </h1>
              <span className="description-playlist">
                {playlist.listOfPlaylistFromAPI[0]?.description ||
                  "Fallback Description"}
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
                  {playlist.listOfPlaylistFromAPI[0]?.followers?.total || 0}{" "}
                  likes
                </span>
                <span className="songs-over-24-hr">
                  {playlist.listOfPlaylistFromAPI[0]?.tracks?.total || 0} songs,{" "}
                  , <span className="over-24-hr">over 24 hr</span>
                </span>
              </div>
            </div>
          </div>
          <div className="song-playlist">
            <div className="play-react-option-list-song d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <Button
                  className="play-btn"
                  onClick={() => playSong(tracks.listOfTracksFromAPI[0])}
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
                          <span className="list-menu-item-text">Compact</span>
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
              {console.log("Tracks data:", tracks.listOfTracksFromAPI)}
              {selectedView === "list" && (
                <Table hover variant="dark" className="list-table-song">
                  <thead>
                    <tr>
                      <th className="list-table-head">#</th>
                      <th className="list-table-head">Title</th>
                      <th className="list-table-head">Album</th>
                      <th className="list-table-head">Date added</th>
                      <th className="list-table-head">
                        <i className="fa-regular fa-clock"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tracks.listOfTracksFromAPI.length > 0 ? (
                      tracks?.listOfTracksFromAPI?.map((track, index) => (
                        <ListSong
                          key={index}
                          index={index + 1}
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
                        />
                      ))
                    ) : (
                      <p>No tracks available in this playlist.</p>
                    )}
                  </tbody>
                </Table>
              )}
              {selectedView === "compact" && (
                <Table hover variant="dark" className="list-compact-table-song">
                  <thead>
                    <tr>
                      <th className="list-table-head">#</th>
                      <th className="list-table-head">Title</th>
                      <th className="list-table-head">Artist</th>
                      <th className="list-table-head">Album</th>
                      <th className="list-table-head">Date added</th>
                      <th className="list-table-head">
                        <i className="fa-regular fa-clock"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tracks.listOfTracksFromAPI.length > 0 ? (
                      tracks?.listOfTracksFromAPI?.map((track, index) => (
                        <CompactList
                          key={index}
                          index={index + 1}
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
          <footer className="playlist-footer">
            <FooterDefauft />
          </footer>
        </div>
      </div>
      {isAuthenticated ? <FooterPlayMusic /> : <FooterPreview />}
    </div>
  );
};

export default Playlist;
