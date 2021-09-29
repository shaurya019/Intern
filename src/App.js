import React from "react";
import Feature from'./component/Feature.js';
import Help from'./component/Help.js';
import Cases from'./component/Cases.js';
import Work from'./component/Work.js';
import Resources from'./component/Resources.js';
import Brands from'./component/Brands.js';
import Map from'./component/Map.js';
// import Leadership from './component/Leadership.js'
import Contact from "./component/Contact.js";
import Footer from'./component/Footer.js';


function App() {
  return (
    <div className="wrap home-page">
      <Feature />
      <Help />
      <Cases />
      <Work />
      <Resources />
      <Brands />
      {/* <Leadership /> */}
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
