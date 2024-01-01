import React from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./ListSong.scss";

export const formatWeeksAgo = (timestamp) => {
  const now = new Date();
  const addedDate = new Date(timestamp);
  const timeDifference = now - addedDate;
  const weeksDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 7)
  );

  return `${weeksDifference} ${weeksDifference === 1 ? "week" : "weeks"} ago`;
};

export const formatDuration = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const ListSong = ({
  index,
  name,
  album,
  artists,
  addedAt,
  duration,
  previewUrl,
  isSongPlaying,
  onPlayPause,
  isAuthenticated,
  showLoginModal,
  setShowLoginModal,
}) => {
  const navigate = useNavigate();

  const playSong = (track) => {
    if (isAuthenticated) {
      if (isSongPlaying && isSongPlaying.id === track.id) {
        onPlayPause(null);
      } else {
        onPlayPause(track);
      }
    } else {
      setShowLoginModal({ show: true, songInfo: { name, album } });
    }
  };

  return (
    <>
      <tr
        className={`list-table-row ${isSongPlaying ? "playing" : ""}`}
        onClick={() => playSong({ id: index, name, previewUrl })}
      >
        <td className="border-0 list-table-description index-table">
          <span className="index">{index}</span>
          {previewUrl && (
            <button
              className={`play-button ${isSongPlaying ? "pause" : "play"}`}
              onClick={(e) => {
                e.stopPropagation();
                playSong({ id: previewUrl, name, previewUrl });
              }}
            >
              <i
                className={`fa-solid ${isSongPlaying ? "fa-pause" : "fa-play"}`}
              ></i>
            </button>
          )}
        </td>
        <td className="list-song-table-description border-0 d-flex align-items-center">
          <Image
            className="song-playlist-image"
            src={album.images[0].url}
            alt={name}
          />
          <div className="song-artist-name d-grid">
            <NavLink className="link-song">{name}</NavLink>
            <NavLink className="link-artist">{artists[0].name}</NavLink>
          </div>
        </td>
        <td className="border-0 list-table-description">
          <NavLink className="link-album">{album.name}</NavLink>
        </td>
        <td className="border-0 list-table-description">
          {formatWeeksAgo(addedAt)}
        </td>
        <td className="border-0 list-table-description">
          {formatDuration(duration)}
        </td>
      </tr>
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
                  src={showLoginModal.songInfo.album.images[0].url}
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
    </>
  );
};

export default ListSong;
