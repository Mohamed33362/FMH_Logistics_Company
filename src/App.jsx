import React, {useState } from "react"
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import HomeAboutSec from "./components/Home-about-sec";
import HomeServicesSec from "./components/Home-Service-Sec";
import HomeQuoteSec from "./components/Home-Quote-Sec";
import HomeContactSec from "./components/Home-Contact-sc";
import Footer from "./components/Footer";
import { Data } from "./components/Data";


function App() {
  const change = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div>
      <Navbar change={change} />
      <div className="container">
        <Landing Images={Data} />
        <HomeAboutSec />
        <HomeServicesSec />
        <HomeQuoteSec />
        <HomeContactSec />
        <Footer />
      </div>
    </div>
  );
}

export default App
