import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li><Link to="/home">Keeper</Link></li>
        <li><Link className="about" to="/about">About</Link></li>
      </ul>
    </header>
  );
}

export default Header;
