import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "http://localhost:5173/" },
    { name: "About", path: "/client/src/pages/About" },
    { name: "Projects", path: "/client/src/pages/Projects" },
    { name: "Contact", path: "/client/src/pages/Contact" },
  ];

  return (
    <header className="opacity-80 text-white shadow-md fixed top-8 left-0 right-0 z-50 ml-15 mr-15 backdrop-blur-3xl">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="ml-4">
            Marjan Sadat Mirmohammad
          </Link>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-10 mr-40 text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:underline hover:font-bold transition-transform"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile nav dropdown */}

      <nav
        className={clsx(
          "md:hidden bg-gray-950 px-4 overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-96 py-2" : "max-h-0"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="block py-2 text-white hover:underline "
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Nav;
