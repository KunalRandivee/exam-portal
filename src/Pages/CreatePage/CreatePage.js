import React, { useState } from "react";
import Select from "react-select";
import DD2 from "./DD2";

const DD1 = () => {
  const [value, setValue] = useState(null);

  const options = [
    { value: "JAVA", label: "Java" },
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
  ];

  const myStyle = {
    paddingLeft: "20px",
  };

  return (
    <div style={{ margin: 20, paddingbottom: "50px" }}>
      <h3>Select The Language:</h3>
      <Select
        options={options}
        styles={myStyle}
        defaultValue={value}
        placeholder="Select The Language"
        onChange={setValue}
      />
      <DD2 />
    </div>
  );
};

export default DD1;