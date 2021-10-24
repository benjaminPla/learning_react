import React from "react";

export default function NavBar({ handleClick }) {
  return (
    <>
      <nav>
        <ul>
          <li>LOGO</li>
          <li link="1" onClick={handleClick}>
            LINK_1
          </li>
          <li link="2" onClick={handleClick}>
            LINK_2
          </li>
          <li link="3" onClick={handleClick}>
            LINK_3
          </li>
        </ul>
      </nav>
    </>
  );
}
