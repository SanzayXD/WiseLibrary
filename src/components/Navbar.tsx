import React from "react";

interface NavbarProps {
  title: string;
  user?: {
    name: string;
    avatar?: React.ReactNode;
  };
}

const Navbar: React.FC<NavbarProps> = ({ title, user }) => {
  return (
    <nav className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      {user && (
        <div className="flex items-center">
          <span className="text-gray-700 mr-3">{user.name}</span>
          {user.avatar ? (
            <div className="text-gray-600">{user.avatar}</div>
          ) : (
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">{user.name[0]}</span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
