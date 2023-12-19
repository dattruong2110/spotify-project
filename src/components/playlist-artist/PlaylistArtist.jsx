/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../playlist-artist/PlaylistArtist.scss";
import Header from "../header/Header";
import SideBarAfterLogin from "../side-bar/sidebar-afterlogin/SideBarAfterLogin";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Image, Table } from "react-bootstrap";
import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";

const PlaylistArtist = () => {
  const [showAddFolderDropdown, setShowAddFolderDropdown] = useState(false);
  const [showShareDropdown, setShowShareDropdown] = useState(false);
  return (
    <>
      <SideBarAfterLogin />
      <div className="playlist-artist-container">
        <Header />
        <div>
          <div className="playlist-main-content d-flex align-items-end">
            <div className="playlist-image-background">
              <div className="playlist-artist-description">
                <span className="type">
                  <i class="fa-solid fa-circle-check check-color"></i> Nghệ sĩ
                  được xác minh
                </span>
                <h1 className="artist-name">RPT MCK</h1>
                <span className="description-playlist">
                  1.573.483 monthly listeners
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
                <Button className="follow-artist">Follow</Button>
                <Dropdown className="more-option">
                  <Dropdown.Toggle variant="none" id="dropdownBasic">
                    <i className="fa-solid fa-ellipsis option-icon"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="more-option-menu">
                    <Dropdown.Item className="more-option-menu-item">
                      <Button
                        variant="none"
                        className="more-option-menu-item-btn"
                      >
                        <i className="fa-solid fa-user-tie more-option-menu-item-icon"></i>
                        <span className="more-option-menu-item-text">
                          Follow
                        </span>
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item className="more-option-menu-item">
                      <Button
                        variant="none"
                        className="more-option-menu-item-btn"
                      >
                        <i className="fa-solid fa-wave-square more-option-menu-item-icon"></i>
                        <span className="more-option-menu-item-text">
                          Jump to radio by artist
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
            </div>
            <div className="list-song">
              <h2 className="popolar">Popular</h2>
              <Table hover variant="dark" className="list-table-song">
                <tbody>
                  <tr>
                    <td className="table-description">1</td>
                    <td className="table-description d-flex align-items-center">
                      <Image
                        className="song-playlist-image"
                        src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
                      />
                      <div className="song-artist-name d-grid">
                        <NavLink className="link-song">Chìm Sâu</NavLink>
                      </div>
                    </td>
                    <td className="table-description">33.960.486</td>
                    <td className="table-description">3:32</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="table-description">1</td>
                    <td className="table-description d-flex align-items-center">
                      <Image
                        className="song-playlist-image"
                        src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
                      />
                      <div className="song-artist-name d-grid">
                        <NavLink className="link-song">Chìm Sâu</NavLink>
                      </div>
                    </td>
                    <td className="table-description">33.960.486</td>
                    <td className="table-description">3:32</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="table-description">1</td>
                    <td className="table-description d-flex align-items-center">
                      <Image
                        className="song-playlist-image"
                        src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
                      />
                      <div className="song-artist-name d-grid">
                        <NavLink className="link-song">Chìm Sâu</NavLink>
                      </div>
                    </td>
                    <td className="table-description">33.960.486</td>
                    <td className="table-description">3:32</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="table-description">1</td>
                    <td className="table-description d-flex align-items-center">
                      <Image
                        className="song-playlist-image"
                        src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
                      />
                      <div className="song-artist-name d-grid">
                        <NavLink className="link-song">Chìm Sâu</NavLink>
                      </div>
                    </td>
                    <td className="table-description">33.960.486</td>
                    <td className="table-description">3:32</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="table-description">1</td>
                    <td className="table-description d-flex align-items-center">
                      <Image
                        className="song-playlist-image"
                        src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
                      />
                      <div className="song-artist-name d-grid">
                        <NavLink className="link-song">Chìm Sâu</NavLink>
                      </div>
                    </td>
                    <td className="table-description">33.960.486</td>
                    <td className="table-description">3:32</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="table-description">1</td>
                    <td className="table-description d-flex align-items-center">
                      <Image
                        className="song-playlist-image"
                        src="https://i.scdn.co/image/ab67616d0000485195ca6a9b4083a86c149934ae"
                      />
                      <div className="song-artist-name d-grid">
                        <NavLink className="link-song">Chìm Sâu</NavLink>
                      </div>
                    </td>
                    <td className="table-description">33.960.486</td>
                    <td className="table-description">3:32</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className="container-artist-playlist">
            <div class="spotify-playlist-artist">
              <h2>Discography list</h2>
              <div class="list">
                <div class="item">
                  <img src="data:image/jpeg;base64,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" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>99%</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="data:image/jpeg;base64,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" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>99%</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="data:image/jpeg;base64,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" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>99%</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="data:image/jpeg;base64,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" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>99%</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="data:image/jpeg;base64,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" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>99%</h4>
                  <p>2023 . Album</p>
                </div>
              </div>
            </div>

            <div class="spotify-playlist-artist">
              <h2>MCK appears</h2>
              <div class="list">
                <div class="item">
                  <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/1/9/mck-16101311436801014057430.png" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>RPT MCK Radio</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/1/9/mck-16101311436801014057430.png" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>RPT MCK Radio</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/1/9/mck-16101311436801014057430.png" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>RPT MCK Radio</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/1/9/mck-16101311436801014057430.png" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>RPT MCK Radio</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/1/9/mck-16101311436801014057430.png" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>RPT MCK Radio</h4>
                  <p>2023 . Album</p>
                </div>
              </div>
            </div>

            <div class="spotify-playlist-artist">
              <h2>Fans also like it</h2>
              <div class="list">
                <div class="item">
                  <img src="https://img.vietcetera.com/uploads/images/19-nov-2021/2.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Obito</h4>
                  <p>Artist</p>
                </div>
                <div class="item">
                  <img src="https://img.vietcetera.com/uploads/images/19-nov-2021/2.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Obito</h4>
                  <p>Artist</p>
                </div>
                <div class="item">
                  <img src="https://img.vietcetera.com/uploads/images/19-nov-2021/2.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Obito</h4>
                  <p>Artist</p>
                </div>
                <div class="item">
                  <img src="https://img.vietcetera.com/uploads/images/19-nov-2021/2.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Obito</h4>
                  <p>Artist</p>
                </div>
                <div class="item">
                  <img src="https://img.vietcetera.com/uploads/images/19-nov-2021/2.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Obito</h4>
                  <p>Artist</p>
                </div>
              </div>
            </div>

            <div class="spotify-playlist-artist">
              <h2>Appears above</h2>
              <div class="list">
                <div class="item">
                  <img src="https://i.scdn.co/image/ab67616d0000b27325e6b25d49687cd63f7a034e" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Đánh đổi</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="https://i.scdn.co/image/ab67616d0000b27325e6b25d49687cd63f7a034e" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Đánh đổi</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="https://i.scdn.co/image/ab67616d0000b27325e6b25d49687cd63f7a034e" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Đánh đổi</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="https://i.scdn.co/image/ab67616d0000b27325e6b25d49687cd63f7a034e" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Đánh đổi</h4>
                  <p>2023 . Album</p>
                </div>
                <div class="item">
                  <img src="https://i.scdn.co/image/ab67616d0000b27325e6b25d49687cd63f7a034e" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>Đánh đổi</h4>
                  <p>2023 . Album</p>
                </div>
              </div>
            </div>

            <div class="spotify-playlist-artist">
              <h2>Artist playlists</h2>
              <div class="list">
                <div class="item">
                  <img src="https://static2.yan.vn/YanNews/2167221/202110/mck-1-c2734552.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>MCK ESSENTIALS</h4>
                  <p>Những giai điệu không thể thiếu của MCK</p>
                </div>{" "}
                <div class="item">
                  <img src="https://static2.yan.vn/YanNews/2167221/202110/mck-1-c2734552.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>MCK ESSENTIALS</h4>
                  <p>Những giai điệu không thể thiếu của MCK</p>
                </div>{" "}
                <div class="item">
                  <img src="https://static2.yan.vn/YanNews/2167221/202110/mck-1-c2734552.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>MCK ESSENTIALS</h4>
                  <p>Những giai điệu không thể thiếu của MCK</p>
                </div>{" "}
                <div class="item">
                  <img src="https://static2.yan.vn/YanNews/2167221/202110/mck-1-c2734552.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>MCK ESSENTIALS</h4>
                  <p>Những giai điệu không thể thiếu của MCK</p>
                </div>{" "}
                <div class="item">
                  <img src="https://static2.yan.vn/YanNews/2167221/202110/mck-1-c2734552.jpg" />
                  <div class="play">
                    <span class="fa fa-play"></span>
                  </div>
                  <h4>MCK ESSENTIALS</h4>
                  <p>Những giai điệu không thể thiếu của MCK</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-footer-artist-playlist">
            <div className="content-footer-artist-playlist">
              <h2 className="monthly-listeners-artist-playlist">
                1.283.397 monthly listeners
              </h2>
            </div>
          </div>
        </div>
      </div>
      <FooterPlayMusic />
    </>
  );
};

export default PlaylistArtist;
