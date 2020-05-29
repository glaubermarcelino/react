import "./Switch.css";
import React from "react";

export default ({ isOn, handleToggle, onColor }) => {
  return (
    <div>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
        id={`react-switch-new`}
      />
      <label
        htmlFor={`react-switch-new`}
        className="react-switch-label"
        style={{ background: isOn && onColor }}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};
