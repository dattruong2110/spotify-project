import React, { useState } from 'react'
import HeaderAccount from '../../header/hearder-account/HeaderAccount';
import './RedeemPage.scss';
import ReCAPTCHA from "react-google-recaptcha";


function RedeemPage() {
    const onChange = () => {};
    const [isHidden, setIsHidden] = useState(false);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
        };
    
    return (
        <>
        <HeaderAccount/>
        <div className='content-redeem'>
        <div className='main-content-redeem container'>
            <div className='title'>
                <h2>Redeem your code</h2>
            </div>
    
            <div className='description'>
                <p>Enter the PIN on the back of your gift card, or enter the premium code from your in-store receipt.</p>
            </div>
            
            <div hidden={isHidden} className='alert'>
                <i class="fas fa-exclamation text-white"></i>
                <p>Unfortunately this Premium code does not seem to be valid. Try again or contact customer service.</p>
            </div>
            
            <div className='input'>
                <p>Enter your premium code</p>
                <div className="input-container">
                    <input type="text" className="custom-input" placeholder="" />
                </div>
            </div>
    
            <div className='isRobot'>
            <ReCAPTCHA    
                sitekey="6Le7CE4pAAAAAD8kxCKAwhvVykzsfHgFatnLjPAa"    
                onChange={onChange}/>
            </div>
    
            <div className='continue-btn'>
                    <button onClick={toggleVisibility}>Continue</button>
            </div>
    
            <div className='another-link'>
                <a href="#">
                Want to use another payment option?</a>
                <a href="#">Terms and conditions apply</a>
            </div>
            
    
        </div>
            
        </div>
    
        </>
      )
}

export default RedeemPage


