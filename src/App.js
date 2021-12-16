import React from "react";

import Header from './components/header';
import Navbar from './components/navbar';
import BananaReport from './components/bananaReport';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="section">
        <Header />
        <BananaReport />
      </div>
    </div>
  );
}

export default App;
