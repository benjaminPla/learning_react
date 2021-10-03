import React from "react";

const Cat = ({ catName, eyeColor, age }) => {
  return (
    <div>
      <span>
        I have a cat called {catName}, he have {eyeColor} eyes and he is {age} years old.
      </span>
    </div>
  );
};

export default Cat;
