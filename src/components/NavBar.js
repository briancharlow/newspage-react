// components/NavBar.js

import React from 'react';

function NavBar() {
  return (
    <div className="nav navBar">
      <img className="logo" src="images/logo.svg" alt="" />
      <div className="navText">
        <span>Home</span>
        <span>New</span>
        <span>Popular</span>
        <span>Trending</span>
        <span>Categories</span>
      </div>
    </div>
  );
}

export default NavBar;
