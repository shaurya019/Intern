import React from "react";
import "./map.css";

class Map extends React.Component {
  render() {
    return (
      <div className="Map-section">
        <div className="Map-container container">
          <div className="Map-row">
            <div className="col-12 col-lg-4 pl-lg-5" >
              <div className="Map-text">
                <h3 class="Map-title">Let's meet up in</h3>
              </div>
              <ul className="Map-lists">
                <li>
                  Russia - <strong>Moscow</strong>
                </li>
                <li>
                  Spain - <strong>Valencia</strong>
                </li>
                <li>
                  Venezuela - <strong>Barquisimeto</strong>
                </li>
                <li>
                  China - <strong>Shenzhen</strong>
                </li>
                <li>
                  Belarus - <strong>Minsk</strong>
                </li>
                <li>
                  Germany - <strong>Mainz</strong>
                </li>
                <li>
                  Japan - <strong>Tokyo</strong>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-8 px-0">
              <div className="Map-img"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
