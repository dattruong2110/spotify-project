import React, { useState } from "react";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import { Button, Modal } from "react-bootstrap";
import "../account-manage-privacy-page/AccountPrivacy.scss";

const AccountPrivacy = () => {
  //backpage
  const handleGoBackPage = () => {
    window.history.back();
  };
 
  //ads
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [showModal, setShowModal] = useState(false);
  const [adsEnabled, setAdsEnabled] = useState(false);
  const handleTurnOffAds = () => {
    //logic để tắt quảng cáo
    setAdsEnabled(true);
    handleCloseModal();
  };

  //facebook
  const handleShowFacebookModal = () => setShowFacebookModal(true);
  const handleCloseFacebookModal = () => setShowFacebookModal(false);
  const [showFacebookModal, setShowFacebookModal] = useState(false);
  const [facebookDataEnabled, setFacebookDataEnabled] = useState(false);
  const handleTurnOffFacebookData = () => {
    //logic để tắt dữ liệu Facebook
    setFacebookDataEnabled(true);
    handleCloseFacebookModal();
  };

  //check checkbox
  const [isAccountDataChecked, setAccountDataChecked] = useState(false);
  const [isExtendedListeningLogChecked, setExtendedListeningLogChecked] =
    useState(false);
  const [isTechnicalLogInfoChecked, setTechnicalLogInfoChecked] =
    useState(false);
  const handleRequestData = () => {
    //xử lý khi nhấn nút Request Data
  };
  const isAnyCheckboxChecked =
    isAccountDataChecked ||
    isExtendedListeningLogChecked ||
    isTechnicalLogInfoChecked;

  return (
    <>
      <HeaderAccount />
      <div className="container-account-manage-privacy">
        <Button className="btn-back-page" onClick={handleGoBackPage}>
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
        <div className="account-manage-privacy-content">
          <h1 className="title-account-privacy">Security settings</h1>
          <p className="document-privacy">
            We want to make it easier for you to manage and understand your
            Privacy Settings so you can use the Spotify service the way you
            want.
          </p>
          <p className="document-privacy">
            The controls on this site allow you to:
          </p>
          <ul>
            <li>
              Manage reserved ads that you watch and listen to on Spotify.
            </li>
            <li>Manage Facebook data that Spotify processes about you.</li>
            <li>Download copies of personal data on your Spotify.</li>
          </ul>
          <h2>Manage your data</h2>
          <p className="document-privacy">
            You can access other data controls from the device or directly from
            the Spotify service. For more information about your data rights
            (including how and why Spotify collects collect personal data) as
            well as other information about how you can To manage your personal
            data, please see our Rights Policy Our privacy policy or learn more
            in the Q&A about data rights and privacy settings.
          </p>
          <div className="account-manage-privacy-ads">
            <h2>Exclusive advertising</h2>
            <p className="document-privacy">
              The personalized ads toggle button below controls the ad
              personalized reporting you experience on our services Spotify, as
              well as Spotify's advertising targeting you on other platforms.
            </p>
            <p className="document-privacy">
              When you use Spotify services, we may use data certain personal
              data about you in order to deliver tailored advertising you than
              on Spotify. This data may contain captured information collects
              about your Spotify usage over time and/or data about Your
              interests are obtained from third party advertising partners. If
              If you opt out of receiving personalized advertising, we will stop
              using it uses that data to show you personalized advertising and
              will also not share your information with advertising partners
              third parties to easily deliver personalized advertising. Although
              However, please note that you may still receive ad-based
              advertising Spotify subscription information and Spotify usage
              over time your reality, but that ad may be more relevant to you.
            </p>
            <p className="document-privacy">
              Additionally, Spotify may share limited data with platforms other
              to market promotions, features or releases Spotify's new releases
              on those other platforms. If you from opt out of personalized
              advertising below, we will not share your information with these
              platforms.
            </p>
            <div className="btn-ads">
              <input type="checkbox" id="checkbox" checked={adsEnabled} />
              <label onClick={handleShowModal}></label>
              <p>Processing my personal data for personalized advertising</p>
            </div>
          </div>
          <div className="account-manage-privacy-facebook">
            <h2>Facebook data</h2>
            <p className="document-privacy">
              When you choose not to allow Spotify to process your Facebook data
              you, we will stop processing any Facebook data shared with
              Spotify, except for personal data that allows you to post Login to
              Spotify using your Facebook account. For more information, please
              see data permissions and privacy settings.
            </p>

            <div className="btn-facebook">
              <input
                type="checkbox"
                id="facebookCheckbox"
                checked={facebookDataEnabled}
              />
              <label onClick={handleShowFacebookModal}></label>
              <p>Processing my Facebook data</p>
            </div>
          </div>
          <h2>Download data</h2>
          <p className="document-privacy">
            When you use the Data Download tool, you can request a copy of your
            personal data. You can download 3 different data packages,
            separately or at the same time. Please see below for what's included
            in your data plan (if applicable to you) and select what you want to
            download.
          </p>
          <p className="document-privacy">
            For more details about the data categories in your data plan, please
            see Learn about my data or contact us.
          </p>
          <div className="account-manage-privacy-data">
            <div className="left-box">
              <div className="title">
                <i class="fa-regular fa-folder"></i>
                <h2>Download data</h2>
              </div>
              <ul>
                <li>Playlist</li>
                <li>Diary of online listening over the past year</li>
                <li>List of assets saved in your library</li>
                <li>Search terms</li>
                <li>
                  Number of followers, accounts you follow, and blocked accounts
                </li>
                <li>Billing and subscription data</li>
                <li>User data</li>
                <li>Customer Service contact history</li>
                <li>Family package data</li>
                <li>Speculative information</li>
                <li>Voice input</li>
                <li>Podcast engagement activities</li>
                <li>Spotify for Artists data</li>
              </ul>
              <div className="time-pre">
                <i class="fa-regular fa-clock"></i>
                <h2>Preparation time 5 days</h2>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  onChange={() => setAccountDataChecked(!isAccountDataChecked)}
                />
                <p>Select Account data</p>
              </div>
            </div>
            <div id="right-box-container">
              <div className="top-right-box">
                <div className="title">
                  <i class="fa-solid fa-headphones"></i>
                  <h2>Extensive online listening log</h2>
                </div>
                <p>
                  Listening logs extend over the life of your account, including
                  information about tracks and when and how you listen to
                  content.
                </p>
                <div className="time-pre">
                  <i class="fa-regular fa-clock"></i>
                  <h2>Preparation time 30 days</h2>
                </div>
                <div className="check-box">
                  <input
                    type="checkbox"
                    onChange={() =>
                      setAccountDataChecked(!isAccountDataChecked)
                    }
                  />
                  <p>Select Extended Listening Log</p>
                </div>
              </div>
              <div className="bottom-right-box">
                <div className="title">
                  <i class="fa-solid fa-gear"></i>
                  <h2>Technical log information</h2>
                </div>
                <p>
                  Technical log information we have collected about your account
                  to provide the Spotify service and troubleshoot problems
                  related to the service.
                </p>
                <div className="time-pre">
                  <i class="fa-regular fa-clock"></i>
                  <h2>Preparation time 30 days</h2>
                </div>
                <div className="check-box">
                  <input
                    type="checkbox"
                    onChange={() =>
                      setAccountDataChecked(!isAccountDataChecked)
                    }
                  />
                  <p>Select Technical Log Information</p>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-request">
            <button
              className={`btn-request-data ${
                !isAnyCheckboxChecked ? "disabled" : ""
              }`}
              disabled={!isAnyCheckboxChecked}
            >
              Request data
              {!isAnyCheckboxChecked && (
                <span className="tooltip">
                  Please select at least one option
                </span>
              )}
            </button>
          </div>
        </div>

        {/* modal */}
        <Modal
          className="modal-ads custom-modal"
          show={showModal}
          onHide={handleCloseModal}
          centered
        >
          <Modal.Header closeButton={false}>
            <Modal.Title>Exclusive advertising</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to opt out of receiving targeted advertising
            based on third-party data?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              No
            </Button>
            <Button variant="primary" onClick={handleTurnOffAds}>
              Yes - off
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          className="modal-facebook custom-modal"
          show={showFacebookModal}
          onHide={handleCloseFacebookModal}
          centered
        >
          <Modal.Header closeButton={false}>
            <Modal.Title>Facebook Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to opt out of sharing data with Facebook?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseFacebookModal}>
              No
            </Button>
            <Button variant="primary" onClick={handleTurnOffFacebookData}>
              Yes - off
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <FooterDefauft />
    </>
  );
};

export default AccountPrivacy;
