import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface NavbarProps {
  title: string;
  user?: {
    name: string;
    avatar?: React.ReactNode;
  };
}

const Navbar: React.FC<NavbarProps> = ({ title, user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    console.log("User logged out");
  };
  const handlepasswordchange = () => {
    console.log("password change");
  };

  return (
    <nav className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      {user && (
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleDropdownToggle}
          >
            <span className="text-gray-700 mr-3">{user.name}</span>
            {user.avatar ? (
              <div className="text-gray-600">{user.avatar}</div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">{user.name[0]}</span>
              </div>
            )}
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <Link to="/login">
                <button
                  className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  <CiLogout className="mr-2 text-xl inline" />
                  Logout
                </button>
              </Link>
              <Link to="/forgotpw">
                <button
                  className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
                  onClick={handlepasswordchange}
                >
                  <RiLockPasswordLine className="mr-2 text-x inline" />
                  Change Passoword
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
