import "./Premium.scss"
import React from 'react'
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
function Premium() {
  return (
    <>
    <div className="container-root">
      
{/* //-----Banner trang-----\\ */}
    <HeaderAccount/>
{/* //-----Banner trang-----\\ */}

{/* //-----Phần nội dung chính-----\\  */}
      <div className="main-content" >
        <div>
          <section data-component-position="0" className="intro">
            <article className="article">
              <header className="header container-fluid">
                  <div className="col">
                    <div className="content">
                    <h1>59,000₫ for 3 months of Premium</h1>
                    <h2>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h2>
                    </div>
                    <div className="button col">
                    <a href="/#">
                      <span className="purchase-btn">
                        <span>Get 3 months for 59,000₫</span>
                      </span></a>
                    <a href="/#">
                      <span className="list-plans">
                        <span>View plans</span>
                      </span>
                    </a>
                    </div>
                    <footer>
                      <p className="text">
                        Individual plan only. 59,000₫/month after.
                        <a href="/#">Terms and conditions apply</a>
                        . Offer not available for users who have already tried Premium. Offer ends 31/12/2023.
                      </p>
                    </footer>
                  </div>
{/* Instert image */}
                <div><img src="https://i.scdn.co/image/ab671c3d0000f430d2978d828938707b9c7b495e" alt="" height={350} /></div>
              </header>
            </article>
          </section>
        </div>
        <div>
          <section data-component-position="1" className="about">
            <article className="article">
              <header className="header">
                <h2>Why go Premium?</h2>
              </header>
              <ul className="exclusive-list container">
                <li>
                  <div>
                    <img src="https://i.scdn.co/image/ab671c3d0000f430df61a7d75be4ed36c0857a61" width={130} alt="" />
                  </div>
                  <div className="text">
                    <p className="slogan">Download music.</p>
                    <p className="description">Listen anywhere.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="https://i.scdn.co/image/ab671c3d0000f430773401f794c2cc9a1f161cdc" width={130} alt="" />
                  </div>
                  <div className="text">
                    <p className="slogan">Ad-free music listening.</p>
                    <p className="description">Enjoy uninterrupted music.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="	https://i.scdn.co/image/ab671c3d0000f430d5f682f0043198ce409efaab" width={130} alt="" />
                  </div>
                  <div className="text">
                    <p className="slogan">Play songs in any order.</p>
                    <p className="description">Any song, any order.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="	https://i.scdn.co/image/ab671c3d0000f430311a399af710a733778c610c" width={130} alt="" />
                  </div>
                  <div className="text">
                    <p className="slogan">Higher sound quality.</p>
                    <p className="description">Feel the sound.</p>
                  </div>
                </li>
              </ul>
            </article>
          </section>
        </div>
        <div>
          <section data-component-position="2" className="menu">
            <article className="article">
              <h2>Pick your Premium</h2>
              <h3>Listen without limits on your phone, speaker, and other devices.</h3>
              <div className="payment-list container">
                {/* Các phương thức thanh toán */}
                <ul className="payment">
                  <li className="Momo">
                    <img src="	https://content-tooling.spotifycdn.com/images/cc962eb4-9f89-41ea-a2b5-81f84fef5a67_momo.svg" width={20} alt="" />
                  </li>
                  <li className="Visa"> 
                    <img src="	https://content-tooling.spotifycdn.com/images/29102201-bcf3-4143-9573-c7f87cbe83fd_visa_(1).svg" width={20} alt="" />
                  </li>
                  <li className="Mastercard"> 
                    <img src="https://content-tooling.spotifycdn.com/images/96d0c657-dbff-4345-ad32-a01aa7a44e79_mastercard_(1).svg" width={20} alt="" />
                  </li>
                  <li className="Amex"> 
                    <img src="	https://content-tooling.spotifycdn.com/images/5a1e07f2-5222-4009-a8ed-1c5904f7b359_amex_(1).svg" width={20} alt="" />
                  </li>
                  <li className="JCB"> 
                    <img src="https://content-tooling.spotifycdn.com/images/2f41970b-9c78-4d6f-b095-c4fef734b7b5_jcb.svg" width={20} alt="" />
                  </li>
                </ul>
                <div className="another">
                  <div>
                    <span>+ 2 more</span>
                      <img src="https://content-tooling.spotifycdn.com/images/618c5a31-e82f-4693-bb61-6d1f8db2295e_unionpay.svg" width={20} alt="" />
                      <img src="	https://content-tooling.spotifycdn.com/images/5e344d86-8390-4dbf-b72a-bd74823cb36c_logo-paypal.svg" width={20} alt="" />
                  </div>              
                </div>
              </div>
              <div className="detail-menu">
                  {/*Menu Mini  */}
                <div className="plan container rounded">
                  <div className="row">
                    <ul className="slogan">
                      <li>
                        <span  id="payOneTime">One-time payment</span>
                      </li>
                    </ul>
                    <h3 className="title">Mini</h3>
                    <p className="text">From 2,300₫/day</p>
                    <p className="text">1 account on mobile only</p>
                    <hr/>
                  </div>
                  <ul className="description">
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Ad-free music listening on mobile</p>
                      </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Group Session</p>
                    </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Download 30 songs on 1 mobile device</p>
                    </li>
                  </ul>
                  <div className="button">
                    <a href="/#"><span>Get started</span></a>
                    <p><a href="/#">Terms and conditions apply.</a></p>
                  </div>
                </div>
                {/*Menu Individual  */}
                <div className="plan container rounded">
                  <div className="row">
                  <ul className="slogan">
                      <li>
                        <span id="payThreeMonth">3 months for 59,000₫</span>
                        <span id="payOneTime" >One-time payment</span>
                      </li>
                    </ul>
                    <h3 className="title">Individual</h3>
                    <p className="text">59,000₫/month after offer period</p>
                    <p className="text">1 account</p>
                    <hr/>
                  </div>
                  <ul className="description">
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Ad-free music listening</p>
                      </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Play anywhere - even offline</p>
                    </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>

                      <p className="text">Play songs in any order</p>
                    </li>
                  </ul>
                  <div className="button">
                    <a href="/#">
                    <span>Get started</span></a>
                    <p className="text" >
                    Individual plan only. 59,000₫/month after.</p>
                      <p>
                        <a href="/#">Terms and conditions apply. </a>
                        Offer not available for users who have already tried Premium. Offer ends 31/12/2023.</p>
                  </div>
                </div>
                {/*Menu Student  */}
                <div className="plan container rounded">
                  <div className="row">
                  <ul className="slogan">
                    <li>
                        <span id="payThreeMonth">1 month free with subscription</span>
                        <span id="payOneTime" >One-time payment</span>
                    </li>
                  </ul>
                  <h3 className="title">Student</h3>
                  <p className="text">29,500₫/month after offer period</p>
                  <p className="text">1 account</p>
                  <hr/>
                  </div>
                  <ul className="description">
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Special discount for eligible students in university</p>
                      </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Ad-free music listening</p>
                    </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Play anywhere - even offline</p>
                    </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Play songs in any order</p>
                    </li>
                  </ul>
                  <div className="button">
                    <a href="/#">
                    <span>Get started</span></a>
                      <p><a href="/#">Terms and conditions apply.</a> Plan available for higher education students who haven't already tried Premium. After the trial period a monthly fee of 29,500₫/month will be charged.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
{/* //-----Hết phần nội dung chính-----\\ */}

{/* //-----Footer của trang-----\\ */}
    <FooterDefauft/>
{/* //-----Footer của trang-----\\ */}
    </div>
  </>
  )
}
export default Premium