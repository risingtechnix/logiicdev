import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isSolutionDropdownOpen, setIsSolutionDropdownOpen] = useState(false);
  const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false);

  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  const [isMobileSolutionOpen, setIsMobileSolutionOpen] = useState(false);
  const [isMobileResearchOpen, setIsMobileResearchOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const menuVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img
            className="block h-8 w-auto"
            src="src/assets/logo.png"
            alt="Logo"
          />
          <span className="ml-2 font-bold text-lg text-gray-900 dark:text-white">
            Logiicdev
          </span>
        </Link>

        <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              to="/"
              className="text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
          </motion.div>

          {/* Desktop Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCompanyDropdownOpen(true)}
            onMouseLeave={() => setIsCompanyDropdownOpen(false)}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <p className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Company
              </p>
            </motion.div>
            {isCompanyDropdownOpen && (
              <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
                <ul>
                  {[
                    "Join us",
                    "About us",
                    "Legal",
                    "Impressum",
                    "Datenschutz",
                    "Equality plan",
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${item.toLowerCase().replace(/ /g, "")}`}
                        className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Solution, Research, and Product Desktop Dropdowns */}
          {/* Solution Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsSolutionDropdownOpen(true)}
            onMouseLeave={() => setIsSolutionDropdownOpen(false)}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <p className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Solution
              </p>
            </motion.div>
            {isSolutionDropdownOpen && (
              <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
                <ul>
                <li>
                    <Link
                      to="/iot"
                      className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      Iot
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/energyEfficiency"
                      className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      Energy Efficiency and Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mobility"
                      className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      Mobility
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/drones"
                      className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      Drones
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Research Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsResearchDropdownOpen(true)}
            onMouseLeave={() => setIsResearchDropdownOpen(false)}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <p className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Research
              </p>
            </motion.div>
            {isResearchDropdownOpen && (
              <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
                <ul>
                  {["FPGA and AI", "Testing"].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${item.toLowerCase().replace(/ /g, "")}`}
                        className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* (Keep the existing dropdown logic here for desktop view) */}

          <div
            className="relative"
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <p className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Product
              </p>
            </motion.div>
            {isProductDropdownOpen && (
              <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
                <ul>
                  <li>
                    <Link
                      to="/product1"
                      className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      Omnipower-Unleash Your Power lab Potential
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product2"
                      className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      Product 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product3"
                      className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      Product 3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4 gap-4">
          <Link
            to="/contact"
            className="ml-4 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline underline-offset-4 flex items-center gap-2"
          >
            Contact Us <ArrowRightIcon className="h-4 w-5" />
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 text-gray-900 dark:text-gray-100 focus:outline-none"
          >
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Contact us and Theme button */}

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 dark:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <Link
          to="/"
          className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Home
        </Link>

        {/* Mobile Company Dropdown */}
        <div
          className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
          onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
        >
          Company
          {isMobileCompanyOpen && (
            <motion.div
              className="pl-4 mt-2"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
            >
              {[
                "Join us",
                "About us",
                "Legal",
                "Impressum",
                "Datenschutz",
                "Equality plan",
              ].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/ /g, "")}`}
                  className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        {/* Mobile Solution Dropdown */}
        <div
          className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
          onClick={() => setIsMobileSolutionOpen(!isMobileSolutionOpen)}
        >
          Solution
          {isMobileSolutionOpen && (
            <motion.div
              className="pl-4 mt-2"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
            >
              {[
                "IoT",
                "Energy Efficiency and Management",
                "Mobility",
                "Drones",
              ].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/ /g, "")}`}
                  className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        {/* Mobile Research Dropdown */}
        <div
          className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
          onClick={() => setIsMobileResearchOpen(!isMobileResearchOpen)}
        >
          Research
          {isMobileResearchOpen && (
            <motion.div
              className="pl-4 mt-2"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
            >
              {["FPGA and AI", "Testing"].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/ /g, "")}`}
                  className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        {/* Mobile Product Dropdown */}
        <div
          className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
          onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
        >
          Product
          {isMobileProductOpen && (
            <motion.div
              className="pl-4 mt-2"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
            >
              <Link
                to="/product1"
                className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Omnipower-Unleash Your Power lab Potential
              </Link>
              <Link
                to="/product2"
                className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Product 2
              </Link>
              <Link
                to="/product3"
                className="block p-1 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Product 3
              </Link>
            </motion.div>
          )}
        </div>

        <Link
          to="/contact"
          className="block mt-2 px-4 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline text-center"
        >
          Contact Us
        </Link>
        <button
          onClick={toggleTheme}
          className="mt-4 w-full flex justify-center px-4 py-2 text-gray-900 dark:text-gray-100"
        >
          {theme === "light" ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
