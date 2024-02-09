/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentSongIndex,
  selectCurrentlyPlaying,
  selectIsPlaying,
  selectIsRepeating,
  setCurrentSong,
  setCurrentSongIndex,
  setCurrentlyPlaying,
  setIsPlaying,
  setIsRepeating,
} from "../../../features/songSlice";
import "../footer-playmusic/FooterPlayMusic.scss";

const FooterPlayMusic = ({
  isSongPlaying,
  currentSong,
  audioRef,
  playlist,
  searchTrack,
  tracks,
  onTimeUpdate,
}) => {
  const isPlaying = useSelector(selectIsPlaying);
  const isRepeating = useSelector(selectIsRepeating);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const currentSongIndex = useSelector(selectCurrentSongIndex);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const currentlyPlaying = useSelector(selectCurrentlyPlaying);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   audioRef.current = new Audio();
  //   const handleSongEnd = () => {
  //     playNextSong();
  //   };
  //   audioRef.current.addEventListener("ended", handleSongEnd);

  //   return () => {
  //     audioRef.current.removeEventListener("ended", handleSongEnd);
  //   };
  // }, [audioRef]);

  useEffect(() => {
    if (isSongPlaying !== isPlaying) {
      dispatch(setIsPlaying(isSongPlaying));
    }
  }, [isSongPlaying, isPlaying]);

  useEffect(() => {
    const handlePlay = () => {
      dispatch(setIsPlaying(true));
    };

    const handlePause = () => {
      dispatch(setIsPlaying(false));
    };

    audioRef.current.addEventListener("play", handlePlay);
    audioRef.current.addEventListener("pause", handlePause);

    return () => {
      audioRef.current.removeEventListener("play", handlePlay);
      audioRef.current.removeEventListener("pause", handlePause);
    };
  }, [audioRef]);

  useEffect(() => {
    if (playlist && playlist.length > 0) {
      const newSong = playlist[currentSongIndex];
      audioRef.current.src = newSong.url;
      dispatch(setCurrentSong(newSong));
      dispatch(setIsPlaying(true));
    }
  }, [currentSongIndex, dispatch, playlist, audioRef]);

  useEffect(() => {
    if (searchTrack && searchTrack.length > 0) {
      const newSong = searchTrack[currentSongIndex];
      audioRef.current.src = newSong.url;
      dispatch(setCurrentSong(newSong));
      dispatch(setIsPlaying(true));
    }
  }, [currentSongIndex, currentlyPlaying, dispatch, searchTrack, audioRef]);

  useEffect(() => {
    const handleSongEnd = () => {
      if (isRepeating) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        dispatch(setIsPlaying(false));
      }
    };
    audioRef.current.addEventListener("ended", handleSongEnd);

    return () => {
      audioRef.current.removeEventListener("ended", handleSongEnd);
    };
  }, [audioRef, isRepeating, dispatch]);

  const playPauseHandler = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => dispatch(setIsPlaying(true)));
      document.title = `${currentSong.name} - Web Player: Music for everyone`;
    } else {
      audioRef.current.pause();
      dispatch(setIsPlaying(false));
      document.title = "Spotify - Web Player: Music for everyone";
    }
  };

  const playNextSong = async () => {
    if (searchTrack && "listOfTracksFromAPI" in searchTrack) {
      const filteredSongs = searchTrack.listOfTracksFromAPI.filter(
        (song) => song.preview_url
      );
      const newIndex = (currentSongIndex + 1) % filteredSongs.length;

      dispatch(setCurrentSongIndex(newIndex));
      const newSong = filteredSongs[newIndex];

      audioRef.current.src = newSong.preview_url;
      dispatch(setCurrentSong(newSong));
      audioRef.current.play();
      dispatch(setIsPlaying(true));
      document.title = `${newSong.name} - Web Player: Music for everyone`;
    } else {
      const filteredSongs = tracks.filter((song) => song.track.preview_url);
      const newIndex = (currentSongIndex + 1) % filteredSongs.length;

      dispatch(setCurrentSongIndex(newIndex));
      const newSong = filteredSongs[newIndex].track;

      audioRef.current.src = newSong.preview_url;
      dispatch(setCurrentSong(newSong));
      audioRef.current.play();
      dispatch(setIsPlaying(true));
      document.title = `${newSong.name} - Web Player: Music for everyone`;
    }
  };

  const playPreviousSong = async () => {
    if (searchTrack && "listOfTracksFromAPI" in searchTrack) {
      const filteredSongs = searchTrack.listOfTracksFromAPI.filter(
        (song) => song.preview_url
      );
      const newIndex =
        (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;

      dispatch(setCurrentSongIndex(newIndex));
      const newSong = filteredSongs[newIndex];

      audioRef.current.src = newSong.preview_url;
      dispatch(setCurrentSong(newSong));
      audioRef.current.play();
      dispatch(setIsPlaying(true));
      document.title = `${newSong.name} - Web Player: Music for everyone`;
    } else {
      const filteredSongs = tracks.filter((song) => song.track.preview_url);
      const newIndex =
        (currentSongIndex - 1 + filteredSongs.length) % filteredSongs.length;

      dispatch(setCurrentSongIndex(newIndex));
      const newSong = filteredSongs[newIndex].track;

      audioRef.current.src = newSong.preview_url;
      dispatch(setCurrentSong(newSong));
      audioRef.current.play();
      dispatch(setIsPlaying(true));
      document.title = `${newSong.name} - Web Player: Music for everyone`;
    }
  };

  const handleRepeatToggle = () => {
    dispatch(setIsRepeating(!isRepeating));
  };

  const volumeChangeHandler = (e) => {
    if (audioRef.current) {
      const newVolume = parseFloat(e.target.value);

      audioRef.current.volume = newVolume;
      audioRef.current.muted = newVolume === 0;

      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted((prevMuted) => !prevMuted);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
      onTimeUpdate(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioRef, onTimeUpdate]);

  return (
    <div className="footer-play-music">
      <div className="music-info">
        {currentSong && (
          <div className="d-flex align-items-center">
            <img
              src={currentSong ? currentSong.image : null}
              alt={`${currentSong.name} - ${currentSong.artist}`}
              className={`${
                currentSong.image ? "d-block" : "d-none"
              } footer-song-image`}
            />
            <div className="song-details d-grid">
              <span className="song-name">
                {currentSong ? currentSong.name : ""}
              </span>
              <span className="artist-names">
                {currentSong &&
                currentSong.artists &&
                currentSong.artists.length > 0
                  ? currentSong.artists.map((artist, index) => (
                      <span key={index} className="artist-name">
                        {artist.name}
                        {index < currentSong.artists.length - 1 && ", "}
                      </span>
                    ))
                  : ""}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="controls">
        <div className="control-button-bar d-flex justify-content-center align-items-center">
          <button className="control-button">
            <span>
              <svg role="img" height="16" width="16" viewBox="0 0 16 16">
                <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path>
                <path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
              </svg>
            </span>
          </button>
          <button className="control-button">
            <i className="fa-solid fa-backward" onClick={playPreviousSong}></i>
          </button>
          <button
            onClick={playPauseHandler}
            className="control-button footer-play-button"
          >
            {isPlaying ? (
              <i className="fa-solid fa-pause"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </button>
          <button className="control-button">
            <i className="fa-solid fa-forward" onClick={playNextSong}></i>
          </button>
          <button className="control-button" onClick={handleRepeatToggle}>
            {isRepeating ? (
              <span className="repeat-icon-active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-repeat-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z" />
                  <path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0z" />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                </svg>
              </span>
            )}
          </button>
        </div>
        <div className="time-bar d-flex align-items-center">
          <div className="current-time">{formatTime(currentTime)}</div>
          <input
            type="range"
            min="0"
            max={duration}
            step="1"
            value={currentTime}
            onChange={(e) => {
              const newTime = parseInt(e.target.value, 10);
              setCurrentTime(newTime);
              audioRef.current.currentTime = newTime;
            }}
            className="time-slider"
          />
          <div className="total-time">{formatTime(duration)}</div>
        </div>
      </div>
      <div className="volume-control">
        <div className="volume-control-container d-flex align-items-center">
          <div className="tooltip-container" onClick={toggleMute}>
            <span role="img" aria-label={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? "🔇" : "🔊"}
            </span>
            <div className={`tooltip-text ${isMuted ? "mute" : "unmute"}`}>
              {isMuted ? "Unmute" : "Mute"}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={volumeChangeHandler}
            className="volume-slider"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterPlayMusic;
