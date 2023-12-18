import React from 'react'
import "./footerPremium.scss"

function footerPremum() {
  return (
    <>
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
{/* //-----Footer của trang-----// */} 
    </>
  )
}

export default footerPremum;