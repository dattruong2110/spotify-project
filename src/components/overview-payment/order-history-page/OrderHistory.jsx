import React from 'react'
import FooterDefauft from '../../footer/footer-defauft/FooterDefauft';
import HeaderAccount from '../../header/hearder-account/HeaderAccount';
import './OrderHistory.scss';


function OrderHistory() {
    //backpage
    const handleGoBackPage = () => {
      window.history.back();
    };

  return (
    <>
    <HeaderAccount/>
    <div className='content'>
      <div className='main-content'>
            <button className='btn-back-page' onClick={handleGoBackPage}>
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div className='title'>
                <h1>Order history</h1>
            </div>
            <div className='history-payment container'>
              <p>i</p>
              <p>You have no payments or refunds from the past 2 years.</p>
            </div>
            <div className='another'>
              <div className='title'>
                <h2>Need some help? Try checking our support pages</h2>
              </div>
              <div className='main-another container'>
                <div className='image'>
                  <p>Payment Help</p>
                  <img src="https://wap.spotifycdn.com/fa/_next/static/media/payment-help.5c727f59.webp" role="presentation" alt="" class="sc-e28009c3-0 kAtFfL"></img>
                </div>
                <div className='text'>
                    <p>Payment Help</p>
                    <a href="#">support.spotify.com</a>
                </div>
                <div className='icon-link'>
                  <svg width={30} height={30}>
                  <path d="M3 5a1 1 0 0 1 1-1h8v2H5v14h13v-8h2v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5z"  fill="white"></path>
                  <path d="M22 2v5.95a1 1 0 1 1-2 0V5.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L18.586 4H16.05a1 1 0 0 1 0-2H22z" fill="white"></path>
                  </svg>
                </div>
              </div>
            </div>

      </div>
    </div>
    
    
    
    <FooterDefauft/>
    </>
  )
}

export default OrderHistory