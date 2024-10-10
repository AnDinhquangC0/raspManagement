import React, { useState } from "react";

const Dropdown = ({ options, onSelect, labelText }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].value ? options[0].value : '');

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onSelect(selectedValue);
    };

  return (
    <div>
      <label htmlFor="dropdown">{labelText}</label>
      <select
        id="dropdown"
        className="form-select"
        onChange={handleSelectChange}
        value={selectedOption}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
