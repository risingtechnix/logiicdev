import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);

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
        {/* Logo and Title as Link */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img className="block h-8 w-auto" src="src/assets/logo.png" alt="Logo" />
          <span className="ml-2 font-bold text-lg text-gray-900 dark:text-white">
            Logiicdev
          </span>
        </Link>

        {/* Centered Menu Links with Increased Gap */}
        <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
          {["/", "/company", "/solution", "/research"].map((path) => (
            <motion.div key={path} variants={linkVariants} whileHover="hover">
              <Link
                to={path}
                className="text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2) || "Home"}
              </Link>
            </motion.div>
          ))}

          {/* Product Link with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <p
                
                className="text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Product
              </p>
            </motion.div>

            {/* Dropdown menu for products (Desktop) */}
            {isProductDropdownOpen && (
              <div className="absolute left-0 mt-4 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
                <ul>
                  <li>
                    <Link
                      to="/product1"
                      className="block px-4 py-2 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Omnipower-Unleash Your Power lab Potential
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product2"
                      className="block px-4 py-2 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Product 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product3"
                      className="block px-4 py-2 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Product 3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Contact Us Button and Theme Toggle */}
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
            {theme === "light" ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div className="md:hidden" initial="closed" animate={isOpen ? "open" : "closed"} variants={menuVariants}>
        {["/", "/company", "/solution", "/research"].map((path) => (
          <motion.div key={path} variants={linkVariants} whileHover="hover">
            <Link
              to={path}
              className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2) || "Home"}
            </Link>
          </motion.div>
        ))}

        {/* Mobile Product Dropdown */}
        <motion.div
          onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
          className="block px-3 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
		  variants={linkVariants} 
		  whileHover="hover"
        >
          Product
          <motion.div
            className={`pl-4 mt-2 ${isMobileProductOpen ? "block" : "hidden"}`}
          >
            <Link
              to="/product1"
              className="block py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Product 1
            </Link>
            <Link
              to="/product2"
              className="block py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Product 2
            </Link>
            <Link
              to="/product3"
              className="block py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Product 3
            </Link>
          </motion.div>
        </motion.div>

        <Link
          to="/contact"
          className="block mt-2 px-4 py-2 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white underline underline-offset-8 text-center"
        >
          Contact Us
        </Link>
        <button
          onClick={toggleTheme}
          className="mt-4 w-full flex justify-center px-4 py-2 text-gray-900 dark:text-gray-100"
        >
          {theme === "light" ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
