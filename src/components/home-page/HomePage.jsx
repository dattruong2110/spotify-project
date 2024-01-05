// import React, { useEffect, useState } from "react";
// import "./HomePage.scss";
// import SideBar from "../side-bar/SideBar";
// import FooterPreview from "../footer/FooterPreview";
// import Header from "../header/Header";
// import HeaderAccount from "../header/hearder-account/HeaderAccount";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsAuthenticated, setUser } from "../../features/authSlice";
// import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";
// import SpotifyAPI from "../../api/spotifyApi";
// import HeaderAfterLogin from "../header/header-after-login/HeaderAfterLogin";

// const HomePage = () => {
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const dispatch = useDispatch();
//   const spotifyAPI = SpotifyAPI();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await spotifyAPI.getSpotifyToken();
//         await spotifyAPI.getGenres();
//         await spotifyAPI.getPlaylistAndTracks();
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");

//     if (storedUser) {
//       const user = JSON.parse(storedUser);
//       dispatch(setUser(user));
//     }
//   }, [dispatch]);

//   const [showAllPlaylists, setShowAllPlaylists] = useState(false);

//   const handleShowAllClick = () => {
//     setShowAllPlaylists(true);
//   };

//   const renderPlaylists = () => {
//     const allPlaylists = spotifyAPI.playlist.listOfPlaylistFromAPI;
//     const playlistsToRender = showAllPlaylists
//       ? allPlaylists
//       : allPlaylists.slice(0, 7);

//     return playlistsToRender.map((playlist) => (
//       <div className="item" key={playlist.id}>
//         <img src={playlist.images[0].url} alt={playlist.name} />
//         <div className="play">
//           <span className="fa fa-play"></span>
//         </div>
//         <h4>{playlist.name}</h4>
//         <p>{playlist.description}</p>
//       </div>
//     ));
//   };

//   return (
//     <>
//       <body>
//         <SideBar />
//         <div className="main-container-homepage">
//           {isAuthenticated ? <HeaderAccount /> : <Header />}
//           <div className="spotify-playlists">
//             <div className="d-flex">
//               <h2>Playlist Hit</h2>
//               {!showAllPlaylists && (
//                 <button
//                   className="btn-display-more"
//                   onClick={handleShowAllClick}
//                 >
//                   Show all
//                 </button>
//               )}
//             </div>
//             <div className="list">{renderPlaylists()}</div>
//           </div>

//           {isAuthenticated ? <FooterPlayMusic /> : <FooterPreview />}
//         </div>
//         <script
//           src="https://kit.fontawesome.com/23cecef777.js"
//           crossOrigin="anonymous"
//         ></script>
//       </body>
//     </>
//   );
// };

// export default HomePage;
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import SideBar from "../side-bar/SideBar";
import FooterPreview from "../footer/FooterPreview";
import Header from "../header/Header";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, setUser } from "../../features/authSlice";
import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";
import SpotifyAPI from "../../api/spotifyApi";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const spotifyAPI = SpotifyAPI();
  const navigate = useNavigate();

  const handlePlaylistClick = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await spotifyAPI.getSpotifyToken();
      } catch (error) {
        console.error("Error fetching Spotify token:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await spotifyAPI.getGenres();
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await spotifyAPI.getPlaylistAndTracks();
      } catch (error) {
        console.error("Error fetching playlist and tracks:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);

  const [showAllPlaylists, setShowAllPlaylists] = useState(false);

  const handleShowAllClick = () => {
    setShowAllPlaylists(true);
  };

  const renderPlaylists = () => {
    const allPlaylists = spotifyAPI.playlist.listOfPlaylistFromAPI;
    if (!allPlaylists || allPlaylists.length === 0) {
      return <p>No playlists available.</p>;
    }
    const playlistsToRender = showAllPlaylists
      ? allPlaylists
      : allPlaylists.slice(0, 7);

    return playlistsToRender.map((playlist) => (
      <div className="item" key={playlist.id}>
        <Link className="" to={`/playlist/${playlist.id}`}>
          <img src={playlist.images[0].url} alt={playlist.name} />
          <div className="play">
            <span className="fa fa-play"></span>
          </div>
          <h4>{playlist.name}</h4>
          <p>{playlist.description}</p>
        </Link>
      </div>
    ));
  };

  return (
    <>
      <body>
        <SideBar />
        <div className="main-container-homepage">
          {isAuthenticated ? <HeaderAccount /> : <Header />}
          <div className="spotify-playlists">
            <div className="d-flex">
              <h2>Playlist Hit</h2>
              {!showAllPlaylists && (
                <button
                  className="btn-display-more"
                  onClick={handleShowAllClick}
                >
                  Show all
                </button>
              )}
            </div>
            <div className="list">{renderPlaylists()}</div>
          </div>

          {isAuthenticated ? <FooterPlayMusic /> : <FooterPreview />}
        </div>
        <script
          src="https://kit.fontawesome.com/23cecef777.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
};

export default HomePage;
