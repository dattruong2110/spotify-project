import React from "react";
import "./CompactList.scss";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { formatDuration, formatWeeksAgo } from "../list-song/ListSong";

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
      <td className="list-song-table-description border-0">
        <div className="song-artist-name d-grid">
          <NavLink className="link-song">{name}</NavLink>
        </div>
      </td>
      <td className="border-0 list-table-description">{artists[0].name}</td>
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

export default CompactList;
