import "./Premium.scss"
import React from 'react'

function Premium() {
  return (
    <>
    <div className="container-root">
      <div className="header-premium-UI">
      <nav class="navbar navbar-expand-lg navbar-dark 300px bg-dark">
    <div class="container">
        {/* <!-- Brand/logo --> */}
        <a class="navbar-brand" href="#"><img src="/static/images/spotify-premium-logo-with-text.png" height={30} ></img></a>
        {/* <!-- Toggle button for mobile view --> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Navbar items --> */}
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Premium</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Hỗ trợ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tải xuống</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">---</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                      <img src="/static/images/no-name-face.jpeg" alt="avt" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Hồ sơ</a>
                </li>
            </ul>
        </div>
    </div>
        </nav>
      </div>
      <div className="main-content" >
        <div>
          <section data-component-position="0" className="intro">
            <article className="article">
              <header className="header">
                <div className="text-area">
                  <div className="content">
                    <div className="title">
                    <h1>59,000₫ cho 3 tháng dùng gói Premium</h1>
                    </div>
                    <div className="description">
                    <h2>Tận hưởng trải nghiệm nghe nhạc không quảng cáo, không cần kết nối mạng và nhiều lợi ích khác. 
                        Hủy bất cứ lúc nào.
                    </h2>
                    </div>
                    <div className="button">
                    <a href="/#" aria-label="Pay for Premium Individual plan">
                      <span className="purchase-btn">
                        <span>Dùng 3 tháng với giá 59,000₫</span>
                      </span>
                    </a>
                    <a href="/#" aria-label="Go to a list of all Spotify Premium plans">
                      <span className="list-plans">
                        <span>Xem các gói</span>
                      </span>
                    </a>
                    </div>
                    <footer className="footer">
                      <p className="text">
                        "Chỉ áp dụng cho gói Individual. Sau đó là 59,000₫/tháng."
                        <a href="/#">Có áp dụng các điều khoản và điều kiện.</a>
                        " Ưu đãi không dành cho người đã dùng thử gói Premium. 
                        Ưu đãi kết thúc vào ngày 31/12/2023."
                      </p>
                    </footer>
                  </div>
                </div>
                <div className="image"></div>
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
              <ul className="exclusive list">
                <li>
                  <div>
                    <i className="download"></i>
                  </div>
                  <div className="text">
                    <p className="title">Tải nhạc xuống.</p>
                    <p className="description">Nghe mọi nơi.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <i className="advertisement"></i>
                  </div>
                  <div className="text">
                    <p className="title">Nghe nhạc không quảng cáo.</p>
                    <p className="description">Thưởng thức âm nhạc không gián đoạn.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <i className="queue"></i>
                  </div>
                  <div className="text">
                    <p className="title">Phát nhạc theo thứ tự bất kỳ.</p>
                    <p className="description">Phát bài hát bất kỳ theo thứ tự tùy thích.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <i className="quality"></i>
                  </div>
                  <div className="text">
                    <p className="title">Chất lượng âm thanh vượt trội.</p>
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
              <h2 className="title">Chọn gói Premium của bạn</h2>
              <h3 className="text">Nghe không giới hạn trên điện thoại, loa và các thiết bị khác.</h3>
              <div className="payment-list">
                <ul className="payment">
                  <li className="Momo">
                    <i href="/#"></i>
                  </li>
                  <li className="Visa"> 
                    <i href="/#"></i>
                  </li>
                  <li className="Mastercard"> 
                    <i href="/#"></i>
                  </li>
                  <li className="Amex"> 
                    <i href="/#"></i>
                  </li>
                  <li className="JCB"> 
                    <i href="/#"></i>
                  </li>
                </ul>
                <div className="another">
                  <div>
                    <span className="text">Và 2 lợi ích khác</span>
                    <ul className="payment">
                      <li className="UnionPay">
                        <i href="/#"></i>
                      </li>
                      <li className="PayPal">
                        <i href="/#"></i>
                      </li>
                    </ul>
                  </div>              
                </div>
              </div>
              <div className="detail-menu">
                <div className="mini-plan">
                  <ul className="slogan">
                    <li>
                        <span>Thanh toán một lần</span>
                    </li>
                  </ul>
                  <h3 className="title">Mini</h3>
                  <p className="text">Từ 2,300₫/ngày</p>
                  <p className="text">1 tài khoản chỉ trên thiết bị di động</p>
                  <hr/>
                  <ul className="description">
                    <li>
                      <i className="check"></i>
                      <p className="text">Nghe nhạc không quảng cáo trên thiết bị di động</p>
                      </li>
                    <li>
                      <i className="check"></i>
                      <p className="text">Nhóm nghe chung</p>
                    </li>
                    <li>
                      <i className="check"></i>
                      <p className="text">Tải 30 bài hát xuống 1 thiết bị di động</p>
                    </li>
                  </ul>
                  <div className="button">
                    <a href="/#">
                    <span>Bắt đầu</span></a>
                      <p><a href="/#">Áp dụng điều khoản và điều kiện</a>"."</p>
                  </div>
                </div>
                {/*  */}
                <div className="individual-plan">
                  <ul className="slogan">
                    <li>
                        <span>3 tháng với giá 59,000₫</span>
                        <span>Thanh toán một lần</span>
                    </li>
                  </ul>
                  <h3 className="title">Individual</h3>
                  <p className="text">59,000₫/tháng sau thời gian ưu đãi</p>
                  <p className="text">1 tài khoản</p>
                  <hr/>
                  <ul className="description">
                    <li>
                      <i className="check"></i>
                      <p className="text">Nghe nhạc không quảng cáo</p>
                      </li>
                    <li>
                      <i className="check"></i>
                      <p className="text">Nghe mọi nơi - ngay cả khi không có kết nối mạng</p>
                    </li>
                    <li>
                      <i className="check"></i>
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
                {/*  */}
                <div className="Student-plan">
                  <ul className="slogan">
                    <li>
                        <span>Miễn phí 1 tháng khi đăng ký</span>
                        <span>Thanh toán một lần</span>
                    </li>
                  </ul>
                  <h3 className="title">Student</h3>
                  <p className="text">29,500₫/tháng sau thời gian ưu đãi</p>
                  <p className="text">1 tài khoản</p>
                  <hr/>
                  <ul className="description">
                    <li>
                      <i className="check"></i>
                      <p className="text">Giảm giá đặc biệt cho sinh viên đủ điều kiện</p>
                      </li>
                    <li>
                      <i className="check"></i>
                      <p className="text">Nghe nhạc không quảng cáo</p>
                    </li>
                    <li>
                      <i className="check"></i>
                      <p className="text">Nghe mọi nơi - ngay cả khi không có kết nối mạng</p>
                    </li>
                    <li>
                      <i className="check"></i>
                      <p className="text">Phát nhạc theo thứ tự bất kỳ</p>
                    </li>
                  </ul>
                  <div className="button">
                    <a href="/#">
                    <span>Bắt đầu</span></a>
                      <p><a href="/#">Áp dụng điều khoản và điều kiện</a>".. Gói chỉ dành cho sinh viên tại các trường cao đẳng và đại học chưa dùng thử gói Premium. Sau thời gian dùng thử, mức phí sẽ là 29,500₫/tháng."</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
      <div className="footer" >
        <nav>
          <div className="brand">
            <span> <i href="/#">Spotify</i></span>
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
              <li><a href="/#"></a><i></i></li>
              <li><a href="/#"></a><i></i></li>
              <li><a href="/#"></a><i></i></li>
            </ul>
          </div>
          <div className="country">
            <a href="/#"><svg></svg>Việt Nam (Tiếng Việt)</a>
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
        </nav>
      </div>
    </div>
    </>
  )
}

export default Premium