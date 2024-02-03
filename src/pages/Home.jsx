import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">MacBookPro14Six</Link>
        </li>
        <li>
          <Link to="/desktopone">DesktopOne</Link>
        </li>
        <li>
          <Link to="/desktoptwo">DesktopTwo</Link>
        </li>
        <li>
          <Link to="/desktopseven">DesktopSeven</Link>
        </li>
        <li>
          <Link to="/desktopfour">DesktopFour</Link>
        </li>
        <li>
          <Link to="/desktopfive">DesktopFive</Link>
        </li>
        <li>
          <Link to="/desktopsix">DesktopSix</Link>
        </li>
        <li>
          <Link to="/desktopone1">DesktopOne1</Link>
        </li>
        <li>
          <Link to="/macbookpro14sixone">MacBookPro14SixOne</Link>
        </li>
        <li>
          <Link to="/desktoptwo1">DesktopTwo1</Link>
        </li>
        <li>
          <Link to="/desktopthree">DesktopThree</Link>
        </li>
        <li>
          <Link to="/desktopfour1">DesktopFour1</Link>
        </li>
        <li>
          <Link to="/desktopfive1">DesktopFive1</Link>
        </li>
        <li>
          <Link to="/desktopsix1">DesktopSix1</Link>
        </li>
        <li>
          <Link to="/macbookpro14four">MacBookPro14Four</Link>
        </li>
        <li>
          <Link to="/macbookpro14three">MacBookPro14Three</Link>
        </li>
        <li>
          <Link to="/macbookpro14seven">MacBookPro14Seven</Link>
        </li>
        <li>
          <Link to="/macbookpro14five">MacBookPro14Five</Link>
        </li>
        <li>
          <Link to="/macbookpro14one">MacBookPro14One</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;