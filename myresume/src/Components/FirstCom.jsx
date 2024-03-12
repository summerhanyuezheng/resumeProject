import React from "react";
import "./FirstCom.css";
import mypic from "./me.png";
import flowerpic from "./flower.png";

export default function FirstCom() {
  return (
    <>
      <div className="first-container">
        <img className="sec-flower-pic" src={flowerpic} alt="" />
        <img className="flower-pic" src={flowerpic} alt="" />

        <span className="my-name">
          <span className="letter-h">Hi</span>, I'm Summer
        </span>

        <br />
        <img className="my-pic" src={mypic} alt="" />
        <br />
      </div>
    </>
  );
}
