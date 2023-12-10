import React, { useState } from "react";
import Select from "react-select";

const DD2 = () => {
  const [value, setValue] = useState(null);

  const options = [
    { value: "", label: "Select" },
    { value: "MCQ", label: "Mcq" },
    { value: "CODING", label: "Coding" },
    { value: "FILL THE CODE", label: "Fill the code" },
  ];

  const myStyle = {
    paddingLeft: "20px",
  };

  return (
    <div style={{ margin: 20 }}>
      <h3>Select Type of Question:</h3>
      <Select
        options={options}
        styles={myStyle}
        defaultValue={value}
        placeholder="Select Type of Question"
        onChange={setValue}
      />
    </div>
  );
};

export default DD2;

