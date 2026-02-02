import { useEffect, useState } from "react";


const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="px-4 py-2 rounded-full cursor-pointer bg-gray-200 outline-none font-semibold dark:bg-gray-700
                 text-gray-900 dark:text-white shadow-lg transition"
    >
      {darkMode ? "Light ☀️" : "Dark 🌑"}
    </button>
  );
};

export default DarkMode;
