import React from "react";
import navlogo from "../../images/logo 1.png";
import { useState } from "react";
import "./TT.css";
function TT() {
  return (
    <div className="iul">
      <div>
        <div class="header">
          <nav className="navigation">
            <div className="icon">
              {" "}
              <a href="/" className="brand-name">
                <img className="nav-logo" src={navlogo} />
              </a>
            </div>

            <div className={"navigation-menu"}>
              <ul>
                <li>
                  <a href="#">Post Job</a>
                </li>
                <li>
                  <a href="#">Programs</a>
                </li>
                <li>
                  <a className="nav-spec" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#">Prices</a>
                </li>
              </ul>
            </div>

            <div className="gh">
              <ul>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>{" "}
        </div>
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
        <label for="openSidebarMenu" class="sidebarIconToggle">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>

        <div id="sidebarMenu">
          <ul class="sidebarMenuInner">
            <li>Post Job</li>
            <li>
              <a href="#" target="_blank">
                Programs
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Services
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Prices
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Login
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TT;
