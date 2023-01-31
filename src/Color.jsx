import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function Color() {
  const [color, setColor] = useState("#761187");

  return (
    <div className="App">
      <div style={{ width: "30rem", height: "30rem", background: color }}></div>
    </div>
  );
}

export default Color;
