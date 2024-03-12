import React from "react";
import fullstack from "./fullstack.jpg";
import "./HomeCom.css";

export default function HomeCom() {
  return (
    <>
      <div className="whole-home-com">
       
        <div className="full-stack-img">
          <img src={fullstack} alt="" />
        </div>
        <div className="a-line"></div>
        <div className="roles-list">
        <span>I'm a...</span>
          
          <ul>
          
            <li>WEB DEVELOPER</li>
            <li>FRONTEND ENGINEER</li>
            <li>REACT NATIVE DEVELOPER</li>
            <li>BACKEND ENGINEER</li>
            <li>FULLSTACK DEVELOPER</li>
          </ul>
        </div>
      </div>
    </>
  );
}
