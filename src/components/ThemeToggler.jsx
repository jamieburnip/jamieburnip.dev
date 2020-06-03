import React from "react";
import useDarkMode from "use-dark-mode";
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

const ThemeToggler = () => {
  const darkMode = useDarkMode();

  return (
    <button
      id="dark-mode-toggler"
      type="button"
      aria-label={
        darkMode.value ? "Switch to dark mode" : "Switch to light mode"
      }
      onClick={darkMode.toggle}
    >
      {darkMode.value ? (
        <FaRegLightbulb title="Switch to dark mode" />
      ) : (
        <FaLightbulb title="Switch to light mode" />
      )}
    </button>
  );
};

export default ThemeToggler;
