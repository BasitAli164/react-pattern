import React from "react";
import { useToggle } from "./useToggle";

const ThemeSwitcher = () => {
  // const [value,toggle]=useToggle();
  const [isDark, toggleTheme] = useToggle();
  return (
    <div
      className={`w-full h-screen ${
        isDark ? "bg-white" : "bg-gray-700"
      } flex justify-center items-center`}
    >
      <button
        onClick={toggleTheme}
        className={`px-6 py-3 rounded-lg text-xl cursor-pointer font-bold ${
          isDark ? "bg-gray-800 text-white " : "bg-amber-100"
        }`}
      >
        Click Me
      </button>
    </div>
  );
};

export default ThemeSwitcher;
