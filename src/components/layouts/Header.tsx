import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          BankApp
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/auth/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link to="/auth/signup" className="text-gray-700 hover:text-blue-600">
            Signup
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 py-2 space-y-2">
            <Link
              to="/auth/login"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
