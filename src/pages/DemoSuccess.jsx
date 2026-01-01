import React from "react";
import "../styles/DemoSuccess.css";

import phone from "../assets/phone.svg";
import calendar from "../assets/calendar.svg";
import rocket from "../assets/rocket.svg";
import globe from "../assets/globe.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import logo from "../assets/logo.png"; // company logo





const DemoSuccess = () => {
  return (
    <div className="success-wrapper">
      <div className="success-card">

        {/* Company Logo */}
        <img src={logo} alt="Company Logo" className="company-logo" />

        {/* Success Icon */}
        <div className="check-icon">
  <span>✓</span>
</div>


        <h1>Demo Booked Successfully!</h1>
        <div className="paragraph">
          <p>
          Thank you for booking your demo with <span>Oratrics</span>.
          <br />
          Our expert will connect with you shortly.
        </p>

        </div>

        {/* Next Steps */}
        <div className="next-box">
          <h3>What happens next?</h3>

          <div className="steps">
            <div className="step">
              <div className="icon-box">
                <img src={phone} alt="Phone" />
              </div>
              <p>Our team will call you</p>
            </div>

            <div className="step">
              <div className="icon-box">
                <img src={calendar} alt="Calendar" />
              </div>
              <p>Demo at scheduled time</p>
            </div>

            <div className="step">
              <div className="icon-box">
                <img src={rocket} alt="Rocket" />
              </div>
              <p>Unlock growth with Oratrics</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="primary"><a href="http://oratrics.com">Visit Website →</a></button>
          <button className="outline">Contact Support</button>
        </div>

        {/* Social Icons */}
        <div className="social">
  <p>Connect with us:</p>

  <div className="icons">
    <a href="https://oratrics.com" target="_blank" rel="noreferrer">
      <div className="icon-box">
        <img src={globe} alt="Website" />
      </div>
    </a>

    <a href="https://instagram.com/oratrics" target="_blank" rel="noreferrer">
      <div className="icon-box">
        <img src={instagram} alt="Instagram" />
      </div>
    </a>

    <a href="https://facebook.com/oratrics" target="_blank" rel="noreferrer">
      <div className="icon-box">
        <img src={facebook} alt="Facebook" />
      </div>
    </a>

    <a href="https://linkedin.com/company/oratrics" target="_blank" rel="noreferrer">
      <div className="icon-box">
        <img src={linkedin} alt="LinkedIn" />
      </div>
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default DemoSuccess;
