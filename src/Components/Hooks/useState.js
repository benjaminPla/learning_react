import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("White");

  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>Aquamarine</button>
      <button onClick={() => setColor("BlueViolet")}>BlueViolet</button>
      <button onClick={() => setColor("Chartreuse")}>Chartreuse</button>
      <button onClick={() => setColor("CornflowerBlue")}>CornflowerBlue</button>
    </div>
  );
}

// import React, { useState } from 'react';

// const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

// export default function ColorPicker() {
//   const [color, setColor] = useState('Tomato');

//  const divStyle = {backgroundColor: color};

//   return (
//     <div style={divStyle}>
//       <p>Selected color: {color}</p>
//       {colorNames.map((colorName)=>(
//         <button
//           onClick={() => setColor(colorName)}
//           key={colorName}>
//        	     {colorName}
//       	</button>
//       ))}
//     </div>
//   );
// }

// input event
// import React, { useState } from 'react';

// export default function EmailTextInput() {
//   const [email, setEmail] = useState("");

//   const handleChange = (event) => setEmail(event.target.value);
// object destructuring:
// const handleChange = ({target}) => setEmail(target.value);

//   return <input value={email} onChange={handleChange} />;
// }
