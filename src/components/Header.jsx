import React from "react";

function Header() {
  return (
    <header>
      <ul>
        <li><a href="/home">Keeper</a></li>
        <li><a className="about" href="/about">About</a></li>
      </ul>
    </header>
  );
}

export default Header;
