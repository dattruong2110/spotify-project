import React from 'react'
import FooterDefauft from '../footer/footer-defauft/FooterDefauft';
import "./Download.scss";
import HeaderAccount from '../header/hearder-account/HeaderAccount';

function Download() {
  return (
    <>
    {/* Banner */}
    <HeaderAccount/>
    {/* //-----Bắt đầu nội dung của trang Web-----\\ */}
      <div className='main-content'>
      {/* Phần 1 */}
        <section className='layer0'>
          <div className='download container'> 
            <div className='image-laptop container'>
                <span>
                <img className='laptop' src="https://www-growth.scdn.co/static/download/laptop.svg" width={150} alt=""/>
                <img className='circle' src="https://www-growth.scdn.co/static/download/green-circle.svg" width={30} alt=""/>
                <img className='check' src="https://www-growth.scdn.co/static/download/green-success-check.svg" width={15} alt=""/>
                </span>
            </div>
            <h1 className='title'>Download Spotify</h1>
            <p className='description'>Play millions of songs and podcasts on your device.</p>
            <div className='microsoft-store-badge'>
              <img src="https://get.microsoft.com/images/en-us%20dark.svg" width={300} alt="microssoft store" />
              </div>
            <span> <a className='directly-link' href="#">Download directly from Spotify</a></span>
          </div>
        </section>

      {/* Phần 2 */}
        <section className='layer1'>
          <div className='content container'>
            <h3 className='title'>Bring your music to mobile and tablet, too.</h3>
            <p className='description'>Listening on your phone or tablet is free, easy, and fun.</p>
            <div className='more-badge container'>
              <a href="#">
                <img src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg" width={120} height={45} alt="apple" />
              </a>
              <a href="#">
                <img src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg" width={120} height={45} alt="ch-play" />
              </a>
              <a href="#">
                <img src="https://www-growth.scdn.co/static/badges/microsoft-windows/en.png" width={120} height={45} alt="microsoft" />
              </a>
            </div>
          </div>
        </section>
      {/* Phần 3 */}
        <section className='layer2'>
          <div className='platform container'>
            <img src="https://www-growth.scdn.co/static/download/all-devices.svg" width={500} alt="platform" />
            <h3>One account, listen everywhere.</h3>
            <div className='platform-list container'>
              <ul>
                <li><span>MOBILE</span></li>
                <li><span>COMPUTER</span></li>
                <li><span>TABLET</span></li>
                <li>
                    <a href="#">CAR</a>
                </li>
                <li>
                    <a href="#">PLAYSTATION<sup>®</sup></a>
                </li>
                <li>
                    <a href="#">XBOX</a>
                </li>
                <li>
                    <a href="#">TV</a>
                </li>
                <li>
                    <a href="#">SPEAKER</a>
                </li>
                <li>
                    <a href="#">WEB PLAYER</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
        {/* //-----Kết thúc nội dung của trang Web-----\\ */}
    {/* footer của trang web */}
      <FooterDefauft/>
    </>   
  )
}

export default Download;