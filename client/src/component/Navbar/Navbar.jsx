import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Navbar({ isLoggedin, username }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white relative w-full top-0 left-0">
      <div className="flex flex-wrap items-center justify-between mx-auto pt-2 pb-2 pr-4 pl-4">
        <Link to="/" className="flex items-center">
          <img src="./logo.svg" className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
            Extinct Fauna
          </span>
        </Link>
        <div className="flex md:order-2">
          {!isLoggedin ? (
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3"
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="button"
                  className="text-green-500  bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 border-green-500 border-2"
                >
                  SignUp
                </button>
              </Link>
            </>
          ) : (
            <Link
              to="/profile"
              className="text-black text-l mr-3 md:mr-0 font-bold mt-1 hover:text-green-600 cursor-pointer"
            >
              Hi <span>{username}</span>!
            </Link>
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={handleMenuClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div
          className={
            "items-center justify-between w-full md:flex md:w-auto md:order-1" +
            (isMenuOpen ? "" : " hidden")
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 md:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="explore"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 md:text-black"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:p-0 md:text-black"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isLoggedin: PropTypes.bool,
  username: PropTypes.string,
};
