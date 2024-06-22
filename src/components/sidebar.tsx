import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

interface SidebarProps {
  items: Array<{
    id: number;
    label: string;
    path: string;
    icon: React.ReactNode;
  }>;
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-[#091E21] text-white">
      <div className="p-4 mb-20 mt-8">
        <h1 className="text-2xl font-bold">
          Wise <span className=" font-bold text-[#1B9876]">Library</span>
        </h1>
      </div>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`block px-4 py-2 hover:bg-[#2A3A4F] cursor-pointer ${
                  location.pathname === item.path
                    ? "bg-[#2A3A4F] border-l-4 border-[##1B9876]"
                    : ""
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-xl">{item.icon}</span>
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
