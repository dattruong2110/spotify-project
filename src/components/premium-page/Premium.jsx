import "./Premium.scss"
import React from 'react'
import { useNavigate } from "react-router-dom";

function Premium() {
  const navigate = useNavigate();
  return (
    <>
    <div className="container-root">
      
{/* //-----Banner trang-----// */}
      <div className="banner">
        <nav class="navbar navbar-expand-lg navbar-dark 300px bg-dark container-fluid">
          <div class="logo">
            <a href="/#">
              <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
              alt="Logo" width={130}/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="/premium" onClick={() => navigate("/premium")}>Premium</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Hỗ trợ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Tải xuống</a>
              </li>
              <li class="nav-item">
                <p className="vertical-bar">|</p>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">
                <img src="https://scontent.ftrz1-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=810bd0&_nc_ohc=CBL2599yVccAX-DrBTl&_nc_ht=scontent.ftrz1-1.fna&edm=AP4hL3IEAAAA&oh=00_AfBmbP_9XRY7Ph8geF5bZwDj_PViw0ltFgdDQKdodYheCQ&oe=65A1E499" alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">Hồ sơ</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
{/* //-----Banner trang-----// */}

{/* //-----Phần nội dung chính-----//  */}
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
                      <p><a href="/#">Áp dụng điều khoản và điều kiện</a>"."</p>
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
                      Chỉ áp dụng cho gói Individual. Sau đó là 59,000₫/tháng. 
                    </p>
                    <p><a href="/#">Áp dụng điều khoản và điều kiện</a>" Ưu đãi không dành cho người đã dùng thử gói Premium. Ưu đãi kết thúc vào ngày 31/12/2023."</p>
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
                      <p><a href="/#">Áp dng điều khoản và điều kiện</a>".. Gói chỉ dành cho sinh viên tại các trường cao đẳng và đại học chưa dùng thử gói Premium. Sau thời gian dùng thử, mức phí sẽ là 29,500₫/tháng."</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
{/* //-----Phần nội dung chính-----// */}

{/* //-----Footer của trang-----// */}
      <div className="footer container-fluid" >
        <div>
          <div className="layer0">
            <div className="brand">
            <span> 
              <a href="/#">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="logo" width={130} />
              </a>
            </span>
            </div>
            <div className="top-links">
            <dl>
              <dt>Công ty</dt>
            <dd> <a href="/#">Giới thiệu</a></dd>
            <dd> <a href="/#">Việc làm</a></dd>
            <dd> <a href="/#">For the Record</a></dd>
            </dl>
            <dl>
              <dt>Cộng đồng</dt>
              <dd><a href="/#">Dành cho các Nghệ sĩ</a></dd>
              <dd> <a href="/#">Nhà phát triển</a></dd>
              <dd> <a href="/#">Quảng cáo</a></dd>
              <dd> <a href="/#">Nhà đầu tư</a></dd>
              <dd> <a href="/#">Nhà cung cấp</a></dd>
            </dl>
            <dl>
              <dt>Liên kết hữu ích</dt>
              <dd><a href="/#">Hỗ trợ</a></dd>
              <dd> <a href="/#">Trình phát Web</a></dd>
              <dd> <a href="/#">Ứng dụng di động Miễn phí</a></dd>
            </dl>
            </div>
            <div className="social-icons">
            <ul>
              <li><a href="/#" className="ins"></a><i class="fa-brands fa-square-instagram fa-beat-fade fa-xl"></i></li>
              <li><a href="/#" className="twr"></a><i class="fa-brands fa-twitter fa-xl"></i></li>
              <li><a href="/#" className="fb"></a><i class="fa-brands fa-facebook fa-xl"></i></li>
            </ul>
            </div>
          </div>
           <div className="country">
            <a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-asia-australia" viewBox="0 0 16 16">
                <path d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z"/>
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z"/>
              </svg>Việt Nam (Tiếng Việt)</a>
          </div>
          <div className="bottom-links">
            <ul>
              <li><a href="/#">Pháp lý</a></li>
              <li><a href="/#">Trung tâm bảo mật</a></li>
              <li><a href="/#">Chính sách quyền riêng tư</a></li>
              <li><a href="/#">Cookie</a></li>
              <li><a href="/#">Giới thiệu Quảng cáo</a></li>
              <li><a href="/#">Hỗ trợ tiếp cận</a></li>
            </ul>
            <span className="coppy-right">© 2023 Spotify AB</span>
          </div>
        </div>
      </div>
    </div>
{/* //-----Footer của trang-----// */}
    </>
  )
}
export default Premium