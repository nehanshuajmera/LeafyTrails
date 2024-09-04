import { useState } from "react";
import "./custom-dropdown.styles.scss";

import dropIcon from "../../../assets/down-arrow.png";

export const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {value ? (
          <div className="custom-placeholder">
            <span className="custom-placeholder-value">{value}</span>
            <span className="custom-placeholder-icon">
              <img src={dropIcon} alt="dropdown icon" />
            </span>
          </div>
        ) : (
          <div className="custom-placeholder">
            <span className="custom-placeholder-text">Select an option</span>
            <span className="custom-placeholder-icon">
              <img src={dropIcon} alt="dropdown icon" />
            </span>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
            key={option.value}
            className="dropdown-item"
            onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
