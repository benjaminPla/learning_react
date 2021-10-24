import React, { useState, useEffect } from "react";

export default function LinkOne({ activeLink }) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <ul>
        Link {activeLink + " - " + data.name}
        {data.map((e) => {
          console.log(e);
        })}
      </ul>
    </>
  );
}
