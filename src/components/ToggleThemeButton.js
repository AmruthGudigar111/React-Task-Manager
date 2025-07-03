import React from 'react';

const ToggleThemeButton = ({ toggleTheme }) => (
  <button className="btn btn-secondary position-absolute top-0 end-0 m-3" onClick={toggleTheme}>
    🌓 Toggle Theme
  </button>
);

export default ToggleThemeButton;
