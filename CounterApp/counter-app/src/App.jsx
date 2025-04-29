import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="app">
        <div
          className="container"
          style={{
            background:
              "linear-gradient(90deg, rgba(117, 42, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
          }}
        >
        <div className="reset">
          R
        </div>
          
      </div>
       <div className="plusminus">
          <div className="minus switch" >-</div>
          <div className=" plus switch">+</div>
        </div>
        </div>
       
    </>
  );
}

export default App;
