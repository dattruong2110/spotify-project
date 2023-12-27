import React, { useState } from "react";
import HeaderAccount from "../header/hearder-account/HeaderAccount";
import FooterDefauft from "../footer/footer-defauft/FooterDefauft";
import { Button } from "react-bootstrap";
import "../account-manage-edit-profile/AccountManageEditProfile.scss";
import { NavLink } from "react-router-dom";

const AccountManageEditProfile = () => {
  const handleGoBackPage = () => {
    window.history.back();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
  ];

  return (
    <>
      <HeaderAccount />
      <div className="container-account-manage-edit">
        <Button className="btn-back-page" onClick={handleGoBackPage}>
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
        <h1 className="title-account-manage-edit">Edit your profile</h1>
        <div className="account-manage-edit-content">
          <div className="account-manage-edit-username">
            <h2>Username</h2>
            <h2>314xgsu6aea7k2h6ejviy5c5b2je</h2>
          </div>

          <div className="account-manage-edit">
            <h2>Email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="account-manage-edit">
            <h2>Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="account-manage-edit-select-gender">
            <h2>Gender</h2>
            <select value={selectedGender} onChange={handleGenderChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Gay">Gay</option>
              <option value="Lesbian">Lesbian</option>
              <option value="Bisexual">Bisexual</option>
              <option value="Transgender">Transgender</option>
            </select>
          </div>

          <div className="account-manage-edit-birthday">
            <h2>Birthday</h2>
            <input
              className="date"
              placeholder="Day"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <select value={selectedMonth} onChange={handleMonthChange}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <input
              className="year"
              placeholder="Year"
              value={selectedYear}
              onChange={handleYearChange}
            />
          </div>

          <div className="account-manage-edit-country">
            <h2>Country</h2>
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Việt Nam</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="account-manage-edit-checkbox">
            <label class="container">
              <input className="checkbox" type="checkbox" />
              Chia sẻ dữ liệu đăng ký của tôi với các nhà cung cấp nội dung
              Spotify cho mục đích tiếp thị.
            </label>
          </div>

          <div className="btn-submit">
            <Button className="cancel">
              <NavLink>Cancel</NavLink>
            </Button>
            <Button className="submit">
              <NavLink>Save file</NavLink>
            </Button>
          </div>
        </div>
      </div>
      <FooterDefauft />
    </>
  );
};

export default AccountManageEditProfile;
