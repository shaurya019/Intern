import React from "react";
import "./feature.css";

class Feature extends React.Component {
  render() {
    return (
        <div className="section featured-in">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="section-title">Featured in</h2>
              </div>
            </div>
            <div className="featured-in-slider custom-slider slick-initialized slick-slider">
              <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                // style=""
              >
                Previous
              </button>
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  // style="opacity: 1; width: 30000px; transform: translate3d(-750px, 0px, 0px);"
                >
                  <a
                    href="https://www.einpresswire.com/article/547903325/topdevelopers-co-publishes-a-list-of-finest-blockchain-development-companies-for-july-2021"
                    className="featured-logo slick-slide slick-cloned"
                    target="_blank"
                    data-slick-index="-1"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/top_developers.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://hackernoon.com/making-sense-of-the-decentralized-finance-defi-mania-of-2020-0t1d3wua"
                    className="featured-logo slick-slide"
                    target="_blank"
                    data-slick-index="0"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/hackernoon.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://uk.investing.com/analysis/how-defi-services-will-replace-banking-applications-200457017"
                    className="featured-logo slick-slide"
                    target="_blank"
                    data-slick-index="1"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/investing.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://www.benzinga.com/markets/cryptocurrency/21/08/22451291/best-crypto-pr-services-you-need-to-know-a-comprehensive-list"
                    className="featured-logo slick-slide slick-current slick-active"
                    target="_blank"
                    data-slick-index="2"
                    aria-hidden="false"
                    tabindex="0"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/Benzinga-logo-navy.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://btcpeers.com/top-11-crypto-influencers-on-twitter-youtube-and-tiktok/"
                    className="featured-logo slick-slide"
                    target="_blank"
                    data-slick-index="3"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/btc-peers.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://www.publish0x.com/icoda-agency/marked-never-do-this-harmful-tips-for-promoting-a-crypto-pro-xdgrlqq"
                    className="featured-logo slick-slide"
                    target="_blank"
                    data-slick-index="4"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/publish0x.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://www.einpresswire.com/article/547903325/topdevelopers-co-publishes-a-list-of-finest-blockchain-development-companies-for-july-2021"
                    className="featured-logo slick-slide"
                    target="_blank"
                    data-slick-index="5"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/top_developers.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://hackernoon.com/making-sense-of-the-decentralized-finance-defi-mania-of-2020-0t1d3wua"
                    className="featured-logo slick-slide slick-cloned"
                    target="_blank"
                    data-slick-index="6"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/hackernoon.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://uk.investing.com/analysis/how-defi-services-will-replace-banking-applications-200457017"
                    className="featured-logo slick-slide slick-cloned"
                    target="_blank"
                    data-slick-index="7"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/investing.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://www.benzinga.com/markets/cryptocurrency/21/08/22451291/best-crypto-pr-services-you-need-to-know-a-comprehensive-list"
                    className="featured-logo slick-slide slick-cloned"
                    target="_blank"
                    data-slick-index="8"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/Benzinga-logo-navy.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://btcpeers.com/top-11-crypto-influencers-on-twitter-youtube-and-tiktok/"
                    className="featured-logo slick-slide slick-cloned"
                    target="_blank"
                    data-slick-index="9"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/btc-peers.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://www.publish0x.com/icoda-agency/marked-never-do-this-harmful-tips-for-promoting-a-crypto-pro-xdgrlqq"
                    className="featured-logo slick-slide slick-cloned"
                    target="_blank"
                    data-slick-index="10"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/publish0x.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                  <a
                    href="https://www.einpresswire.com/article/547903325/topdevelopers-co-publishes-a-list-of-finest-blockchain-development-companies-for-july-2021"
                    className="featured-logo slick-slide slick-cloned"
                    target="_blank"
                    data-slick-index="11"
                    id=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <img
                      className="skip_lazy"
                      src="https://icoda.io/wp-content/uploads/2021/09/top_developers.svg"
                      alt="hn-logo"
                    ></img>
                  </a>
                </div>
              </div>

              <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                
              >
                Next
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Feature;
