import React from "react";

const DarkMode = (props) => {
  return (
    <div className="dark-mode">
      <p className="light">Light</p>
      <div className="toggle-btn" onClick={props.onDarkMode}>
        <div className="slider" />
      </div>
      <p className="dark">Dark</p>
    </div>
  );
};

export default DarkMode;
