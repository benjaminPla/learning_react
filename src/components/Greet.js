import React from "react";

const Greet = () => <h1>Welcome {sessionStorage.getItem("user-name")}</h1>;

export default Greet;
