import React from "react";
import "./Header.css";
import logo from "../assists/images/logo.png";
import image1 from "../assists/images/image 1.png";

function Header() {
  return (
    <>
      <section className="Navigation">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Academy</a>
            </li>
            <li>
              <a href="">Strategy</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Players</a>
            </li>
            <li>
              <a href="">Coaches</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="" id="Become A Player">
                Become A Player
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="header-hero">
        <div className="header-left">
          <h2>A Great Learning Progress For Soccer Players</h2>
          <p>
            Dreams Become Possible Or Impossible By Our Actions. Your Dreams Of
            Playing Professional Football Depends On Your Actions Today. Make
            Dream Possible, Join Maids Today.
          </p>
          <span id="Read">
            Read More <i class="fas fa-arrow-right"></i>
          </span>
        </div>
        <div className="header-right">
          <img src={image1} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
