import React from "react";
import './case.css';


class Cases extends React.Component {
  render() {
    return (
      <div className="Cases">
        <div className="container">
        <div className="col-12"><h2>Recent Cases</h2></div>
        {/* Recent Cases boxes */}
        <div className="case">
          <div className="case-box" id="box-1">
            {/* Photo Area */}
            <div className="case-box-img" id="img-box-1">
              <img
                src="https://icoda.io/wp-content/uploads/2021/09/Competition.jpg"
                alt="sorry"
              />
            </div>
            <div className="para-logo">
            {/* text area */}
            <div id="box-1-para">
              <p className="h5 text-center">How to Acquire 1500 New Users and Make Your Coin Soar via Trading Competition?</p>
            </div>
            {/* logo area */}
            <div className="cases-logo" id="logo1"><img
                src="https://icoda.io/wp-content/uploads/2021/08/nda-logo.svg"
                alt="sorry"
              /></div>
              </div>
          </div>
          <div className="case-box" id="box-2">
            {/* Photo Area */}
            <div className="case-box-img" id="img-box-2">
              <img
                src="https://icoda.io/wp-content/uploads/2021/07/Vabble-870-600.png"
                alt="sorry"
              />
            </div>
            <div className="para-logo">
            {/* text area */}
            <div id="box-1 para">
              <p className="h5 text-center">Vabble: How to Build a Strong Media Presence and Raise $1.1M During a Private Round?</p>
            </div>
            {/* logo area */}
            <div className="cases-logo" id="logo2"><img
                src="https://icoda.io/wp-content/uploads/2021/07/vabble.png"
                alt="sorry"
              /></div></div>
          </div>
          <div className="case-box" id="box-3">
            {/* Photo Area */}
            <div className="case-box-img" id="img-box-3">
              <img
                src="https://icoda.io/wp-content/uploads/2021/06/BosaGora.jpg"
                alt="sorry"
              />
            </div>
            <div className="para-logo">
            {/* text area */}
            <div id="box-1 para">
              <p className="h5 text-center">Bosagora: How to Hold a Round of the T-FI Lending Service in 9 Seconds?</p>
            </div>
            {/* logo area */}
            <div className="cases-logo" id="logo3"><img
                src="https://icoda.io/wp-content/uploads/2021/07/Bosagora-logo-e1627379892982.png"
                alt="sorry"
              /></div></div>
          </div>
        </div>
        <div className="btn">
        <a href="https://icoda.io/cases/" class="btn btn-blue btn-show-el">Show all cases</a>
        </div>
        </div>
      </div>
    );
  }
}

export default Cases;
