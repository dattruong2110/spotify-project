/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPlaying,
  setCurrentSong,
  setIsPlaying,
} from "../../../features/songSlice";
import "../footer-playmusic/FooterPlayMusic.scss";

const FooterPlayMusic = ({
  isSongPlaying,
  currentSong,
  audioRef,
  playlist,
  onTimeUpdate,
}) => {
  const isPlaying = useSelector(selectIsPlaying);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    audioRef.current = new Audio();
    const handleSongEnd = () => {
      playNextSong();
    };
    audioRef.current.addEventListener("ended", handleSongEnd);

    return () => {
      audioRef.current.removeEventListener("ended", handleSongEnd);
    };
  }, [audioRef]);

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
      audioRef.current.src = playlist[currentSongIndex].url;
      dispatch(setCurrentSong(playlist[currentSongIndex]));
      dispatch(setIsPlaying(true));
    }
  }, [currentSongIndex, dispatch, playlist, audioRef]);

  const playPauseHandler = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => dispatch(setIsPlaying(true)));
    } else {
      audioRef.current.pause();
      dispatch(setIsPlaying(false));
    }
  };

  const playNextSong = () => {
    console.log("playNextSong - Before:", currentSongIndex, playlist);
    if (playlist && playlist.length > 0) {
      setCurrentSongIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % playlist.length;
        dispatch(setIsPlaying(true));
        dispatch(setCurrentSong(playlist[newIndex]));
        return newIndex;
      });
    }
  };

  const playPreviousSong = () => {
    console.log("playPreviousSong - Before:", currentSongIndex, playlist);
    if (playlist && playlist.length > 0) {
      setCurrentSongIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + playlist.length) % playlist.length;
        dispatch(setIsPlaying(true));
        dispatch(setCurrentSong(playlist[newIndex]));
        return newIndex;
      });
    }
  };

  const volumeChangeHandler = (e) => {
    if (audioRef.current) {
      const newVolume = parseFloat(e.target.value);

      if (newVolume === 0) {
        audioRef.current.muted = true;
        setIsMuted(true);
      } else {
        audioRef.current.muted = false;
        setIsMuted(false);
        setVolume(newVolume);
      }
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
      <div className="music-info d-flex">
        {currentSong && (
          <>
            <img
              src={currentSong.image}
              alt={`${currentSong.name} - ${currentSong.artist}`}
              className={`${currentSong.image ? "d-block" : "d-none"}`}
            />
            <div className="song-details">
              <span>{currentSong ? currentSong.name : ""}</span>
              <span>{currentSong ? currentSong.artist : ""}</span>
            </div>
          </>
        )}
      </div>
      <div className="controls">
        <div className="control-button-bar d-flex justify-content-center">
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
      <div className="volume-control d-flex">
        <div className="volume-control-container d-flex align-items-center">
          <span role="img" aria-label="Volume" onClick={toggleMute}>
            {isMuted ? "🔇" : "🔊"}
          </span>
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
