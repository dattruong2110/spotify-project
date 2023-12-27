import React, { useEffect, useState } from "react";
import "./ListSong.scss";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
}) => {
  return (
    <tr
      className={`list-table-row ${isSongPlaying ? "playing" : ""}`}
      onClick={() => onPlayPause({ id: index, name, previewUrl })}
    >
      <td className="border-0 list-table-description">
        <span className="index">{index}</span>
        {previewUrl && (
          <button
            className={`play-button ${isSongPlaying ? "pause" : "play"}`}
            onClick={(e) => {
              e.stopPropagation();
              onPlayPause({ id: previewUrl, name, previewUrl });
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
          {/* {previewUrl && (
            <button className="play-button" onClick={playPauseHandler}>
              <i className="fa-solid fa-play"></i>
            </button>
          )} */}
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
  );
};

export default ListSong;
