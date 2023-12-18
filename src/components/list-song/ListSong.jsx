import React from "react";
import "./ListSong.scss";
import { Image, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ListSong = () => {
  return (
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
        <tr className="list-table-row">
          <td className="border-0 list-table-description">1</td>
          <td className="list-song-table-description border-0 d-flex align-items-center">
            <Image
              className="song-playlist-image"
              src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
            />
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
              <NavLink className="link-artist">David Kushner</NavLink>
            </div>
          </td>
          <td className="border-0 list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="border-0 list-table-description">3 weeks ago</td>
          <td className="border-0 list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="border-0 list-table-description">1</td>
          <td className="list-song-table-description border-0 d-flex align-items-center">
            <Image
              className="song-playlist-image"
              src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
            />
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
              <NavLink className="link-artist">David Kushner</NavLink>
            </div>
          </td>
          <td className="border-0 list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="border-0 list-table-description">3 weeks ago</td>
          <td className="border-0 list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="border-0 list-table-description">1</td>
          <td className="list-song-table-description border-0 d-flex align-items-center">
            <Image
              className="song-playlist-image"
              src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
            />
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
              <NavLink className="link-artist">David Kushner</NavLink>
            </div>
          </td>
          <td className="border-0 list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="border-0 list-table-description">3 weeks ago</td>
          <td className="border-0 list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="border-0 list-table-description">1</td>
          <td className="list-song-table-description border-0 d-flex align-items-center">
            <Image
              className="song-playlist-image"
              src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
            />
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
              <NavLink className="link-artist">David Kushner</NavLink>
            </div>
          </td>
          <td className="border-0 list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="border-0 list-table-description">3 weeks ago</td>
          <td className="border-0 list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="border-0 list-table-description">1</td>
          <td className="list-song-table-description border-0 d-flex align-items-center">
            <Image
              className="song-playlist-image"
              src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
            />
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
              <NavLink className="link-artist">David Kushner</NavLink>
            </div>
          </td>
          <td className="border-0 list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="border-0 list-table-description">3 weeks ago</td>
          <td className="border-0 list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="border-0 list-table-description">1</td>
          <td className="list-song-table-description border-0 d-flex align-items-center">
            <Image
              className="song-playlist-image"
              src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
            />
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
              <NavLink className="link-artist">David Kushner</NavLink>
            </div>
          </td>
          <td className="border-0 list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="border-0 list-table-description">3 weeks ago</td>
          <td className="border-0 list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="border-0 list-table-description">1</td>
          <td className="list-song-table-description border-0 d-flex align-items-center">
            <Image
              className="song-playlist-image"
              src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
            />
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
              <NavLink className="link-artist">David Kushner</NavLink>
            </div>
          </td>
          <td className="border-0 list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="border-0 list-table-description">3 weeks ago</td>
          <td className="border-0 list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="border-0 list-table-description">1</td>
          <td className="list-song-table-description border-0 d-flex align-items-center">
            <Image
              className="song-playlist-image"
              src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
            />
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
              <NavLink className="link-artist">David Kushner</NavLink>
            </div>
          </td>
          <td className="border-0 list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="border-0 list-table-description">3 weeks ago</td>
          <td className="border-0 list-table-description">3:32</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListSong;
