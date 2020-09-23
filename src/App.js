import React from "react";
import Home from "./pages/Home";
import "./styles/app.scss";

function App() {
  return (
    <>
      <div className="pages">
        <div className="animate-text">
          <span>Haute Couture</span>
        </div>
        <Home />
      </div>
    </>
  );
}

export default App;
