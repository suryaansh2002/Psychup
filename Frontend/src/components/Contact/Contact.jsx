import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div id="#contact-h">
      <div className="contact-main">
        <div className="contact-container">
          <div className="main-title">
            <h2>Get In Touch With Us!</h2>
          </div>
          

          <div className="form-box">
            <form action="https://formsubmit.co/contact@psychup.com">
              <input
                type="hidden"
                name="_subject"
                value="Contact form Submission!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <label className="contact-label">NAME :</label>
              <div>
                {props.cookie.user ? (
                  <input
                    type="text"
                    name="name"
                    className="contact-input"
                    value={props.cookie.user.name}
                  ></input>
                ) : (
                  <input
                    type="text"
                    name="name"
                    className="contact-input"
                  ></input>
                )}
              </div>
              <label className="contact-label">EMAIL :</label>
              <div>
                {props.cookie.user ? (
                  <input
                    type="email"
                    name="email"
                    className="contact-input"
                    value={props.cookie.user.email}
                  ></input>
                ) : (
                  <input
                    type="email"
                    name="email"
                    className="contact-input"
                  ></input>
                )}
              </div>
              <label className="contact-label">MESSAGE :</label>
              <div>
                <textarea
                  type="text"
                  name="message"
                  rows="5"
                  className="contact-input"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="contact-submit btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="home-img"><div className="contact-img-content"></div></div>
      </div>
      
    </div>
  );
};

export default Contact;
