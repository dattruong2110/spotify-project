import React from "react";
import "./CompactList.scss";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CompactList = () => {
  return (
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
        <tr className="list-table-row">
          <td className="list-table-description">1</td>
          <td className="list-song-table-description border-0">
            <div className="song-artist-name d-grid">
              <NavLink className="link-song">Daylight</NavLink>
            </div>
          </td>
          <td className="list-table-description">David Kushner</td>
          <td className="list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="list-table-description">3 weeks ago</td>
          <td className="list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="list-table-description">1</td>
          <td className="list-song-table-description border-0">
            <NavLink className="link-song">Daylight</NavLink>
          </td>
          <td className="list-table-description">David Kushner</td>
          <td className="list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="list-table-description">3 weeks ago</td>
          <td className="list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="list-table-description">1</td>
          <td className="list-song-table-description border-0">
            <NavLink className="link-song">Daylight</NavLink>
          </td>
          <td className="list-table-description">David Kushner</td>
          <td className="list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="list-table-description">3 weeks ago</td>
          <td className="list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="list-table-description">1</td>
          <td className="list-song-table-description border-0">
            <NavLink className="link-song">Daylight</NavLink>
          </td>
          <td className="list-table-description">David Kushner</td>
          <td className="list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="list-table-description">3 weeks ago</td>
          <td className="list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="list-table-description">1</td>
          <td className="list-song-table-description border-0">
            <NavLink className="link-song">Daylight</NavLink>
          </td>
          <td className="list-table-description">David Kushner</td>
          <td className="list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="list-table-description">3 weeks ago</td>
          <td className="list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="list-table-description">1</td>
          <td className="list-song-table-description border-0">
            <NavLink className="link-song">Daylight</NavLink>
          </td>
          <td className="list-table-description">David Kushner</td>
          <td className="list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="list-table-description">3 weeks ago</td>
          <td className="list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="list-table-description">1</td>
          <td className="list-song-table-description border-0">
            <NavLink className="link-song">Daylight</NavLink>
          </td>
          <td className="list-table-description">David Kushner</td>
          <td className="list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="list-table-description">3 weeks ago</td>
          <td className="list-table-description">3:32</td>
        </tr>
        <tr>
          <td className="list-table-description">1</td>
          <td className="list-song-table-description border-0">
            <NavLink className="link-song">Daylight</NavLink>
          </td>
          <td className="list-table-description">David Kushner</td>
          <td className="list-table-description">
            <NavLink className="link-album">Daylight</NavLink>
          </td>
          <td className="list-table-description">3 weeks ago</td>
          <td className="list-table-description">3:32</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CompactList;
