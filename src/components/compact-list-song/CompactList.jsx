import React from "react";
import "./CompactList.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { formatDuration, formatWeeksAgo } from "../list-song/ListSong";
import { Button, Image, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentlyPlaying,
  selectIsLoading,
  setCurrentSongIndex,
  setIsPlaying,
} from "../../features/songSlice";

const CompactList = ({
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
  setCurrentSongIndex,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentlyPlaying = useSelector(selectCurrentlyPlaying);
  const isLoading = useSelector(selectIsLoading);
  const isCurrentSongPlaying =
    currentlyPlaying && currentlyPlaying.id === index;

  const playSong = (track) => {
    if (isAuthenticated) {
      if (isSongPlaying && isSongPlaying.id === track.id) {
        onPlayPause(null);
        dispatch(setIsPlaying(false));
      } else {
        onPlayPause(track);
        dispatch(setIsPlaying(track));
        dispatch(setCurrentSongIndex(index));
      }
    } else {
      setShowLoginModal({ show: true, songInfo: { name, album } });
    }
  };

  return (
    <>
      <tr
        className="list-table-row"
        onClick={() => playSong({ id: index, name, previewUrl })}
      >
        <td className="border-0 list-table-description index-table">
          <span className="index">{index + 1}</span>
          {previewUrl && (
            <button
              className="play-button"
              onClick={(e) => {
                e.stopPropagation();
                playSong({ id: index, name, previewUrl });
              }}
            >
              <i
                className={`fa-solid ${
                  isCurrentSongPlaying ? "fa-pause" : "fa-play"
                }`}
              ></i>
            </button>
          )}
        </td>
        <td className="list-song-table-description border-0">
          <div className="song-artist-name d-grid">
            <NavLink
              className={`link-song ${
                isCurrentSongPlaying ? "song-active" : ""
              }`}
            >
              {name}
            </NavLink>
          </div>
        </td>
        <td className="border-0 list-table-description list-song-table-description__tablet list-song-table-description__mobile">
          {artists[0].name}
        </td>
        <td className="border-0 list-table-description list-song-table-description__tablet list-song-table-description__mobile">
          <NavLink className="link-album">{album.name}</NavLink>
        </td>
        <td className="border-0 list-table-description list-song-table-description__tablet list-song-table-description__mobile">
          {formatWeeksAgo(addedAt)}
        </td>
        <td className="border-0 list-table-description list-song-table-description__mobile">
          {formatDuration(duration)}
        </td>
      </tr>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        showLoginModal && (
          <Modal
            show={showLoginModal.show}
            onHide={() => setShowLoginModal(false)}
            centered
          >
            <div className="modal-body-custom d-flex align-items-center">
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
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowLoginModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )
      )}
    </>
  );
};

export default CompactList;
