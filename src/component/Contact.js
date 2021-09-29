import React from "react";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div class="section form-contact">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-5 col-top">
              <div class="text">
                <h4 class="section-title">Feel free to contact us</h4>
                <p class="sub-text">
                  We are the team of experts that will support your business at
                  all stages
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-7">
              <form
                class="form-default-desctop"
                action="submit.php"
                method="post"
                novalidate="novalidate"
              >
                <input type="hidden" name="lang-source" value="en"></input>
                <div class="first-row d-flex justify-content-between">
                  <div class="input-wrap">
                    <input
                      type="text"
                      name="name"
                      placeholder="How can we call you?"
                    ></input>
                  </div>
                  <div class="input-wrap">
                    <input
                      type="text"
                      name="telegram"
                      placeholder="WhatsApp / Telegram"
                    ></input>
                  </div>
                </div>
                <div class="second-row">
                  <input name="email" type="email" placeholder="Email"></input>
                </div>
                <div class="third-row">
                  <input
                    class="desktop-text"
                    name="message"
                    type="text"
                    placeholder="Describe your situation. How can we help you?"
                  ></input>
                </div>
                <button type="submit" class="btn btn-default" style={styles.text} >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const styles = {
  text: {
    color: "DodgerBlue",
    backgroundColor: " white",
    fontWeight:700
  }
}

export default Contact;
