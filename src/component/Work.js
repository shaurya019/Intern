import React from "react";
import "./work.css";

class Work extends React.Component {
  render() {
    return (
      <div className="section section-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5 pr-0">
              <div className="text-box">
                <div className="text">
                  <h3 className="section-title">For whom do we work?</h3>
                  <p className="sub-text">
                    We attract crypto leads to the following projects
                  </p>
                </div>
                <div className="label-list-desktop">
                  <div className="label-list">
                    <div className="label-list-item">IDO / ICO projects</div>
                    <div className="label-list-item">DeFi projects</div>
                    <div className="label-list-item">AMM &amp; Yield farming</div>
                    <div className="label-list-item">Crypto exchanges</div>
                    <div className="label-list-item">Crypto startups</div>
                    <div className="label-list-item">Crypto wallets</div>
                    <div className="label-list-item">Crypto service companies</div>
                  </div>
                </div>
               </div>
            </div>
            <div class="col-md-12 col-lg-7 col-custom">
              <div class="img-block">
                <img
                  src="https://icoda.io/wp-content/themes/icoda/images/bg-home-s3.jpg"
                  alt="bg-home-s3"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
