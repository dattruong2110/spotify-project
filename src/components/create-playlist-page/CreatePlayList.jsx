import React,{ useEffect,useState}  from 'react'
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import FooterDefauft from '../footer/footer-defauft/FooterDefauft';
import SideBar from "../side-bar/SideBar";
import FooterPreview from "../footer/FooterPreview";
import FooterPlayMusic from "../footer/footer-playmusic/FooterPlayMusic";
import Header from "../header/Header";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import { selectIsAuthenticated, setUser } from "../../features/authSlice";
import "./CreatePlayList.scss"


function CreatePlayList() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch();
    const MUSIC_ICON    =<path d="M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z" width={30}></path>;
    const PEN_ICON      =<path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z" width={30}></path>;
    
    const COMPACT_LIST = <div class="option">
                            <svg><path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z"></path></svg>
                            Compact
                        </div>;
    const DEFAULT_LIST = <div class="option">
                            <svg><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path></svg>
                            List
                        </div>;

    const [isHovered, setIsHovered] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenuRight = () => {
      setIsMenuOpen(!isMenuOpen);
        };

    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const toggleTypeLeft = () => {
      setIsTypeOpen(!isTypeOpen);
        };
    
    const [selectedIcon, setSelectedIcon] = useState(DEFAULT_LIST); // Giá trị mặc định là 'a'
    const iconList = [COMPACT_LIST,DEFAULT_LIST,]; 
                    // Danh sách icon
    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };


    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        dispatch(setUser(user));
      }
    }, [dispatch]);

  return (
    <>
    <body>
        <SideBar/>
        <div className='main-content-playlist'>
            {isAuthenticated ? <HeaderAccount /> : <Header />}
                <div className='main-view'>
                    <section className='playlist-name container '>
                        <div className="img container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            {isHovered ? (
                            // Hiển thị pen icon khi rê chuột vào
                                <svg scale={2} className="music-icon" width={30} height={30}>{MUSIC_ICON}</svg>) : (
                            // Hiển thị music icon khi không rê chuột
                                 <svg className="pen-icon" width={30} height={30} >{PEN_ICON}</svg>)
                            }
                        </div>
                        <div className='text-area'>
                            <ul>
                                <li className='small-text'>Playlist</li>
                                <li className='name-playlist'>
                                    <button>
                                    My Playlist
                                    </button>
                                </li>
                                <li className='description'>None</li>
                                <li className='profile'>
                                    <img src="#" alt="" width={20} height={20} />
                                    <a href="/#">Truong An</a></li>
                            </ul>
                        </div>
                    </section>
                    <section className='button-layer'>
                        <div className='dropdown-right'>
                            <div className="button-container">
                                <svg width={50} height={50}>
                                <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='dropdown-left'>
                            <div className='btn container'>
                                <button  onClick={toggleTypeLeft}>
                                {/* Hiển thị icon theo giá trị của selectedIcon */}
                                <span role="img" aria-label="icon">{selectedIcon}</span>
                                </button>
                                {isTypeOpen &&(
                                    <div className='dropdown-type'> 
                                        <ul className='menu'>
                                            {/* Tạo danh sách các icon và gắn sự kiện onClick để thay đổi selectedIcon */}
                                            {iconList.map((icon) => (
                                            <li key={icon} onClick={() => handleIconClick(icon)}>
                                                <span role="img" aria-label="icon">{icon}</span>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    <div class="thick-line"></div>
                    <section className='find-item'>
                        <h1>Let's find something for your playlist</h1>
                        <div className="search-container">
                            <input type="text" className="search-input" />
                            <FontAwesomeIcon icon={faSearch} className="search-icon" >
                            </FontAwesomeIcon>
                            
                        </div>
                    </section>
                </div>
            {/* {isAuthenticated ? <FooterPlayMusic /> : <FooterPreview />} */}
            <FooterDefauft/>
        </div>
        <script
          src="https://kit.fontawesome.com/23cecef777.js"
          crossorigin="anonymous">
        </script>

    </body>
    </> 
  )
}

export default CreatePlayList;