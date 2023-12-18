import React, { useEffect, useState } from "react";
import { Button, Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CompactList from "../compact-list-song/CompactList";
import FooterMain from "../footer-main/FooterMain";
import FooterPreview from "../footer/FooterPreview";
import Header from "../header/Header";
import ListSong from "../list-song/ListSong";
import SideBar from "../side-bar/SideBar";
import "./Playlist.scss";

const Playlist = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddFolderDropdown, setShowAddFolderDropdown] = useState(false);
  const [showShareDropdown, setShowShareDropdown] = useState(false);
  const [selectedView, setSelectedView] = useState("list");
  const [showPlayButton, setShowPlayButton] = useState(false);

  const handleViewChange = (view) => {
    setSelectedView(view);
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

  return (
    <div className="playlist-page">
      <SideBar />
      <div className="playlist-container">
        <Header isPlaylistPage={true} showPlayButton={showPlayButton} />
        <div className="playlist-main">
          <div className="playlist-main-content d-flex align-items-end">
            <div className="playlist-image-space">
              <Image
                src="https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037"
                className="playlist-image"
              />
            </div>
            <div className="playlist-description">
              <span className="type">Playlist</span>
              <h1 className="playlist-title">lofi beats</h1>
              <span className="description-playlist">
                chill beats, lofi vibes, new tracks every week...
              </span>
              <div className="playlist-infor d-flex align-items-center">
                <div className="playlist-artist">
                  <Image
                    src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
                    className="playlist-artist-image"
                  />
                  <Link className="playlist-artist-name">Spotify</Link>
                </div>
                <span className="likes">5,168,454 likes</span>
                <span className="songs-over-24-hr">
                  750 songs, <span className="over-24-hr">over 24 hr</span>
                </span>
              </div>
            </div>
          </div>
          <div className="song-playlist">
            <div className="play-react-option-list-song d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <Button className="play-btn">
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
              {selectedView === "list" ? <ListSong /> : <CompactList />}
            </div>
          </div>
          <footer className="playlist-footer">
            <FooterMain />
          </footer>
        </div>
      </div>
      <FooterPreview />
    </div>
  );
};

export default Playlist;
