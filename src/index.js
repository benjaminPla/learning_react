import React, { useState } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar.jsx";
import Link from "./components/Link.jsx";
import "./index.css";

function App() {
  const [activeLink, setLink] = useState("1");
  const handleClick = ({ target }) => {
    setLink(target.getAttribute("link"));
  };
  return (
    <>
      <NavBar handleClick={handleClick} />
      <Link activeLink={activeLink} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
