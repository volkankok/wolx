import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  useEffect(() => {
    document.body.className = isLight ? 'light-theme' : 'dark-theme';
  }, [isLight]);

  return (
    <header className="p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">VK</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 space-y-4 md:space-y-0 absolute md:static  w-full md:w-auto left-0 md:left-auto top-16 md:top-auto p-4 md:p-0  text-xl mr-60 font-roboto`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }
              end
              onClick={closeMenu}
            >
              ana
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hakkimda"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }
              onClick={closeMenu}
            >
              hakkımda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projeler"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }
              onClick={closeMenu}
            >
              projeler
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/iletisim"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }
              onClick={closeMenu}
            >
              iletişim
            </NavLink>
          </li>
          <li>
            <label className="switch">
              <input
                type="checkbox"
                checked={!isLight}
                onChange={() => {
                  toggleTheme();
                  console.log(isLight);
                }}
              />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}