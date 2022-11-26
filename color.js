import React, { useState } from "react";
import "./color.css";
export default function DropBox() {
  const [color, setColor] = useState("white");
  const btnHandler = (e) => {
    console.log(color);
    setColor(e.target.value);
  };
  return (
    <>
      <div className="wrap">
        <div className="color" style={{ backgroundColor: color }}>
          <select id="select" onChange={btnHandler}>
            <option>Lime</option>
            <option>Red</option>
            <option>Pink</option>
            <option>Lavender</option>
            <option>DarkBlue</option>
            <option>Teal</option>
            <option>aquamarine</option>
            <option>Crimson</option>
            <option>Black</option>
          </select>
        </div>
      </div>
    </>
  );
}











