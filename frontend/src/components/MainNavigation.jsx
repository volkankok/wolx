import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const textArray = ["VK.", "Volkan Kök.", "Wake up, Neo...", "i am the Alpha and the Omega."];
  const period = 2000;
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  
  // Tema değişimini uygulama
  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [isLight]);

  // Başlangıçta temayı ayarlama
  useEffect(() => {
    document.body.classList.add('light-theme');
  }, []);

  useEffect(() => {
    let timer = '';
    const tick = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      if (isDeleting) {
        setTypewriterText(fullText.substring(0, typewriterText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypewriterText(fullText.substring(0, typewriterText.length + 1));
        setTypingSpeed(70);
      }

      if (!isDeleting && typewriterText === fullText) {
        setTimeout(() => {
          setIsDeleting(true);
        }, period);
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, loopNum, typingSpeed, textArray]);

  return (
    <header className="p-4 fixed w-full top-0 left-0 z-[1]">
      <nav className="container mx-auto flex justify-between items-center relative">
        <a className="text-white text-3xl font-bold z-50 hover:text-gray-200 transition-colors duration-300">
          <span style={{ borderRight: '0.08em solid #fff', padding: '0 0.1em', fontFamily: 'Courier, monospace' }}>{typewriterText}</span>
        </a>
        
        {/* Masaüstü menü */}
        <ul className="hidden md:flex md:items-center md:space-x-8 text-2xl ml-[50px]">
          <li className="relative group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium border-b-2 border-white transition-all duration-300"
                  : "text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              }
              end
            >
              ana
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/hakkimda"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium border-b-2 border-white transition-all duration-300"
                  : "text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              }
            >
              hakkımda
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/projeler"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium border-b-2 border-white transition-all duration-300"
                  : "text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              }
            >
              projeler
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/iletisim"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium border-b-2 border-white transition-all duration-300"
                  : "text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              }
            >
              iletişim
            </NavLink>
          </li>
          <li>
            <label className="switch">
              <input
                type="checkbox"
                checked={!isLight}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>

        {/* Mobil menü butonu */}
        <div className="md:hidden z-[100]">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 transition-colors duration-300 focus:outline-none"
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

        {/* Mobil menü */}
        {isOpen && (
          <div className="fixed inset-0 min-h-screen w-screen z-[999]">
            <div 
              className="absolute inset-0 backdrop-blur-lg"
              onClick={closeMenu}
            />
            <div className="relative z-[1000] h-screen w-full flex items-center justify-center">
              <ul className="flex flex-col items-center justify-center space-y-12 text-white">
                <li className="transform transition-all duration-300 hover:scale-105">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-medium text-4xl border-b-2 border-white px-6 py-2 transition-all duration-300"
                        : "text-white hover:text-white text-4xl px-6 py-2 transition-all duration-300"
                    }
                    end
                    onClick={closeMenu}
                  >
                    ana
                  </NavLink>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <NavLink
                    to="/hakkimda"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-medium text-4xl border-b-2 border-white px-6 py-2 transition-all duration-300"
                        : "text-white hover:text-white text-4xl px-6 py-2 transition-all duration-300"
                    }
                    onClick={closeMenu}
                  >
                    hakkımda
                  </NavLink>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <NavLink
                    to="/projeler"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-medium text-4xl border-b-2 border-white px-6 py-2 transition-all duration-300"
                        : "text-white hover:text-white text-4xl px-6 py-2 transition-all duration-300"
                    }
                    onClick={closeMenu}
                  >
                    projeler
                  </NavLink>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <NavLink
                    to="/iletisim"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-medium text-4xl border-b-2 border-white px-6 py-2 transition-all duration-300"
                        : "text-white hover:text-white text-4xl px-6 py-2 transition-all duration-300"
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
                      onChange={toggleTheme}
                    />
                    <span className="slider round"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}