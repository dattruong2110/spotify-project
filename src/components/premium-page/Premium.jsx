import "./Premium.scss"
import React from 'react'
import { FOOTER_PREMIUM,NAVIGATION_BAR_PREMIUM } from "../../constants/premiumConstants";
function Premium() {
  return (
    <>
    <div className="container-root">
      
{/* //-----Banner trang-----\\ */}
  <NAVIGATION_BAR_PREMIUM/>
{/* //-----Banner trang-----\\ */}

{/* //-----Phần nội dung chính-----\\  */}
      <div className="main-content" >
        <div>
          <section data-component-position="0" className="intro">
            <article className="article">
              <header className="header container-fluid">
                  <div className="col">
                    <div className="content">
                    <h1>59,000₫ cho 3 tháng dùng gói Premium</h1>
                    <h2>Tận hưởng trải nghiệm nghe nhạc không quảng cáo, không cần kết nối mạng và nhiều lợi ích khác. 
                        Hủy bất cứ lúc nào.
                    </h2>
                    </div>
                    <div className="button col">
                    <a href="/#">
                      <span className="purchase-btn">
                        <span>Dùng 3 tháng với giá 59,000₫</span>
                      </span></a>
                    <a href="/#">
                      <span className="list-plans">
                        <span>Xem các gói</span>
                      </span>
                    </a>
                    </div>
                    <footer>
                      <p className="text">
                        "Chỉ áp dụng cho gói Individual. Sau đó là 59,000₫/tháng.
                        <a href="/#">Có áp dụng các điều khoản và điều kiện.</a>
                        Ưu đãi không dành cho người đã dùng thử gói Premium. 
                        Ưu đãi kết thúc vào ngày 31/12/2023."
                      </p>
                    </footer>
                  </div>
{/* Instert image */}
                <div><img src="https://i.scdn.co/image/ab671c3d0000f430d2978d828938707b9c7b495e" alt="" height={300} /></div>
              </header>
            </article>
          </section>
        </div>
        <div>
          <section data-component-position="1" className="about">
            <article className="article">
              <header className="header">
                <h2>Lý do dùng gói Premium?</h2>
              </header>
              <ul className="exclusive-list container">
                <li>
                  <div>
                    <img src="https://i.scdn.co/image/ab671c3d0000f430df61a7d75be4ed36c0857a61" width={100} alt="" />
                  </div>
                  <div className="text">
                    <p className="slogan">Tải nhạc xuống.</p>
                    <p className="description">Nghe mọi nơi.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="https://i.scdn.co/image/ab671c3d0000f430773401f794c2cc9a1f161cdc" width={100} alt="" />
                  </div>
                  <div className="text">
                    <p className="slogan">Nghe nhạc không quảng cáo.</p>
                    <p className="description">Thưởng thức âm nhạc không gián đoạn.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="	https://i.scdn.co/image/ab671c3d0000f430d5f682f0043198ce409efaab" width={100} alt="" />
                  </div>
                  <div className="text">
                    <p className="slogan">Phát nhạc theo thứ tự bất kỳ.</p>
                    <p className="description">Phát bài hát bất kỳ theo thứ tự tùy thích.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="	https://i.scdn.co/image/ab671c3d0000f430311a399af710a733778c610c" width={100} alt="" />
                  </div>
                  <div className="text">
                    <p className="slogan">Chất lượng âm thanh vượt trội.</p>
                    <p className="description">Phiêu cùng âm nhạc.</p>
                  </div>
                </li>
              </ul>
            </article>
          </section>
        </div>
        <div>
          <section data-component-position="2" className="menu">
            <article className="article">
              <h2>Chọn gói Premium của bạn</h2>
              <h3>Nghe không giới hạn trên điện thoại, loa và các thiết bị khác.</h3>
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
                    <span>Và 2 lợi ích khác</span>
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
                        <span  id="payOneTime">Thanh toán một lần</span>
                      </li>
                    </ul>
                    <h3 className="title">Mini</h3>
                    <p className="text">Từ 2,300₫/ngày</p>
                    <p className="text">1 tài khoản chỉ trên thiết bị di động</p>
                    <hr/>
                  </div>
                  <ul className="description">
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Nghe nhạc không quảng cáo trên thiết bị di động</p>
                      </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Nhóm nghe chung</p>
                    </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Tải 30 bài hát xuống 1 thiết bị di động</p>
                    </li>
                  </ul>
                  <div className="button">
                    <a href="/#">
                    <span>Bắt đầu</span></a>
                      <p><a href="/#">Áp dụng điều khoản và điều kiện</a>.</p>
                  </div>
                </div>
                {/*Menu Individual  */}
                <div className="plan container rounded">
                  <div className="row">
                  <ul className="slogan">
                      <li>
                        <span id="payThreeMonth">3 tháng với giá 59,000₫</span>
                        <span id="payOneTime" >Thanh toán một lần</span>
                      </li>
                    </ul>
                    <h3 className="title">Individual</h3>
                    <p className="text">59,000₫/tháng sau thời gian ưu đãi</p>
                    <p className="text">1 tài khoản</p>
                    <hr/>
                  </div>
                  <ul className="description">
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Nghe nhạc không quảng cáo</p>
                      </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Nghe mọi nơi - ngay cả khi không có kết nối mạng</p>
                    </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>

                      <p className="text">Phát nhạc theo thứ tự bất kỳ</p>
                    </li>
                  </ul>
                  <div className="button">
                    <a href="/#">
                    <span>Bắt đầu</span></a>
                    <p className="text" >
                      Chỉ áp dụng cho gói Individual. Sau đó là 59,000₫/tháng.</p>
                      <p>
                        <a href="/#">Áp dụng điều khoản và điều kiện. </a>
                        Ưu đãi không dành cho người đã dùng thử gói Premium. Ưu đãi kết thúc vào ngày 31/12/2023.</p>
                  </div>
                </div>
                {/*Menu Student  */}
                <div className="plan container rounded">
                  <div className="row">
                  <ul className="slogan">
                    <li>
                        <span id="payThreeMonth">Miễn phí 1 tháng khi đăng ký</span>
                        <span id="payOneTime" >Thanh toán một lần</span>
                    </li>
                  </ul>
                  <h3 className="title">Student</h3>
                  <p className="text">29,500₫/tháng sau thời gian ưu đãi</p>
                  <p className="text">1 tài khoản</p>
                  <hr/>
                  </div>
                  <ul className="description">
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Giảm giá đặc biệt cho sinh viên đủ điều kiện</p>
                      </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Nghe nhạc không quảng cáo</p>
                    </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Nghe mọi nơi - ngay cả khi không có kết nối mạng</p>
                    </li>
                    <li>
                      <svg><path d="M21.707 4.805a1 1 0 0 1 0 1.414L8.024 19.902l-5.731-5.73a1 1 0 1 1 1.414-1.415l4.317 4.317L20.293 4.805a1 1 0 0 1 1.414 0z" ></path></svg>
                      <p className="text">Phát nhạc theo thứ tự bất kỳ</p>
                    </li>
                  </ul>
                  <div className="button">
                    <a href="/#">
                    <span>Bắt đầu</span></a>
                      <p><a href="/#">Áp dụng điều khoản và điều kiện</a>. Gói chỉ dành cho sinh viên tại các trường cao đẳng và đại học chưa dùng thử gói Premium. Sau thời gian dùng thử, mức phí sẽ là 29,500₫/tháng.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
{/* //-----Phần nội dung chính-----\\ */}

{/* //-----Footer của trang-----\\ */}
    <FOOTER_PREMIUM/>
{/* //-----Footer của trang-----\\ */}
    </div>
  </>
  )
}
export default Premium