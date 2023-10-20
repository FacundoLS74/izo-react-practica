import React from "react";

function Input1({ value, onChange }) {
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue === 0 || newValue === 1) {
      onChange(newValue);
    } else {
      onChange(0);
    }
  };

  return (
    <input
      id="input1"
      type="number"
      value={value}
      onChange={handleInputChange}
    />
  );
}

export default Input1;
