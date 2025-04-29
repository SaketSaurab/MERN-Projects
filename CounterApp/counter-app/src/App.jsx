import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    if (counter === 0) {
      return 0;
    } else {
      setCounter(counter - 1);
    }
  };
  const handleClick2 = () => {
    setCounter(counter + 1);
  };
  const handleClick3 = () => {
    setCounter(0);
    window.location.reload();
  };

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
            <button onClick={handleClick3} className="reset-btn">
              R
            </button>
          </div>
          <div className="count">
            <h1> {counter}</h1>
          </div>
        </div>
        <div className="plusminus">
          <div className="minus switch">
            <button onClick={handleClick1} className="minus-btn button">
              -
            </button>
          </div>
          <div className=" plus switch">
            <button onClick={handleClick2} className="plust-btn button">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
