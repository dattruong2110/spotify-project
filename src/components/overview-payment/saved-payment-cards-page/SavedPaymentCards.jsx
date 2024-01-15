import React, { useState } from 'react';
import FooterDefauft from '../../footer/footer-defauft/FooterDefauft';
import HeaderAccount from '../../header/hearder-account/HeaderAccount';
import './SavedPaymentCards.scss'
import ExpiryForm from './ExpiryForm';
import SecurityForm from './SecurityForm';
import CheckBox from './CheckBox';


function SavedPaymentCards() {
    //backpage
    const handleGoBackPage = () => {
        window.history.back();
      };
      
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

    
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleButtonClick = () => {
      setIsDivVisible(!isDivVisible);
      toggleVisibility();
    };

  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
        setTooltipVisible(true);
      };
    
  const handleMouseLeave = () => {
        setTooltipVisible(false);
      };
  
  const [inputValue, setInputValue] = useState('');
  const [icon, setIcon] = useState('search');

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ''); // Chỉ giữ lại số
    value = value.slice(0, 16); // Giới hạn độ dài tối đa là 12 số
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Cách 1 kí tự sau mỗi 4 số
    setInputValue(formattedValue);
    // Xác định icon tương ứng với giá trị nhập vào
      switch (value) {
        case 'a':
          setIcon(<img width={33} height={25} alt="" src="https://paymentsdk.spotifycdn.com/svg/cards/visa.svg"></img>);
          break;
        case 'b':
          setIcon('icon-2');
          break;
        case 'c':
          setIcon('icon-3');
          break;
        case 'd':
          setIcon('icon-4');
          break;
        case 'e':
          setIcon('icon-5');
          break;
        default:
          setIcon(<img width={33} height={25} alt="" src="https://paymentsdk.spotifycdn.com/svg/cards/visa.svg"></img>);
        };}


  return (
    <div className='content'>
        <HeaderAccount/>
        <div className='main-content container'>
          <button className='btn-back-page' onClick={handleGoBackPage}>
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          <div className='text-aera'>
            <h1>Saved payment cards</h1>
            <div className='description container'>
              <p>Manage your payment details for one-time purchases. To manage payment details for your monthly subscription
                , go to {<a href="#">Account overview.</a>}</p>
              
            </div>
          </div>

          <div className='icon'>
            <div className='icon-title container'>
            <h3>My cards</h3>
            <svg width={30} height={30}>
                <path d="M4 4a4 4 0 1 1 8 0v3h1.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 
                1.75 0 0 1 1 14.25v-5.5C1 7.784 1.784 7 2.75 7H4V4zm1.5 3h5V4a2.5 2.5 0 0 0-5 0v3zM2.75 8.5a.25.25 0 
                0 0-.25.25v5.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25H2.75z">
                </path>
            </svg>
            </div>

            <div hidden={isHidden} className='form container'>
              <div className='alt-input'>
                <svg width={30} height={25}><path d="M6 16h5v-2H6v2z"></path>
                    <path d="M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v2h18V6a1 1 0 0 0-1-1H4zM3 18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8H3v8z">
                    </path></svg>
                <svg width={30} height={15}>
                  <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                </svg>
                <span >0000 | MM/YY</span>
              </div>
              <button onClick={handleButtonClick}>
                  <p>Add card</p>
                </button>
            </div>

            {isDivVisible ? (
                <div>
                  {/* Nội dung của thẻ div X */}

                  <p className='choose'>Credit or debit card</p>
                  <ul class="card container">
                    <li><img width={33} height={25} alt="" src="https://paymentsdk.spotifycdn.com/svg/cards/visa.svg"></img></li>
                    <li><img width={33} height={25} alt="" src="https://paymentsdk.spotifycdn.com/svg/cards/mastercard.svg"></img ></li>
                    <li><img width={33} height={25} alt="" src="https://paymentsdk.spotifycdn.com/svg/cards/amex.svg"></img ></li>
                    <li><img width={33} height={25} alt="" src="https://paymentsdk.spotifycdn.com/svg/cards/jcb.svg"></img ></li>
                    <li><img width={33} height={25} alt="" src="https://paymentsdk.spotifycdn.com/svg/cards/cup.svg"></img ></li>
                  </ul>
                  <div className='details'>
                    <div className='title'>
                      <h4>Payment details</h4>
                      <div className='tooltip-icon'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ position: 'relative', display: 'inline-block' }}
                          >
                            <div className='icon' style={{ width: '30px', height: '30px' }}>
                              {/* Thẻ div a */}
                              <svg width={30} height={30}>
                                  <path d="M6 7a6 6 0 1 1 12 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7zm2 3h8V7a4 4 0 0 0-8 0v3zm-3 2v8h14v-8H5z"></path>
                                  </svg>
                            </div>
                            {isTooltipVisible && (
                              <div className='tooltipIs-true'
                                style={{
                                  position: 'absolute',
                                  top: '-30px', // Hiển thị tooltip ở phía trên div a
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                  color: 'white',
                                  padding: '5px',
                                  borderRadius: '5px',
                                  zIndex: '1',
                                  margin:'50px',
                                }}
                              >
                                {/* Nội dung thẻ div b */}
                                <p className='tooltip-content'>Transactions are encrypted and secure.</p>
                              </div>
                            )}
                          </div>
                    </div>

                    <div className='input-card-number'>
                      <p>Card number</p>
                      <div className='input'>
                          <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="0000 0000 0000 0000"
                            autoFocus  // Hiển thị con trỏ khi trang được tải
                          />  
                      </div>
                    </div>
                    <div>
                      <div className='expiry-form'>
                        <ExpiryForm/>
                      </div>
                      <div className='security-form'>
                        <SecurityForm/>
                      </div>
                    </div>
                    <div className='checkbox'>
                      <CheckBox/>
                    </div>
                    <ul>
                      <li><button>Save</button></li>
                      <li><button onClick={handleButtonClick}>Cancel</button></li>
                    </ul>
                  </div>

                </div>
              ) : (
                <p></p>
            )}

          </div>

        </div>



        <FooterDefauft/>
    </div>
  )
};

export default SavedPaymentCards