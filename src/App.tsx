import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import { Books } from "./components/pages/books";
import { Readers } from "./components/pages/readers";
import { Authors } from "./components/pages/authors";
import Login from "./components/pages/Authentication pages/login";
import Register from "./components/pages/Authentication pages/Register";
import {
  MdLibraryBooks,
  MdPeople,
  MdPerson,
  MdAccountCircle,
} from "react-icons/md";
import ForgotPassword from "./components/pages/Authentication pages/forgetpassword";

interface SidebarItem {
  id: number;
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface User {
  name: string;
  avatar: React.ReactNode;
}

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const sidebarItems: SidebarItem[] = [
    { id: 1, label: "Books", path: "/", icon: <MdLibraryBooks /> },
    { id: 2, label: "Readers", path: "/readers", icon: <MdPeople /> },
    { id: 3, label: "Authors", path: "/authors", icon: <MdPerson /> },
  ];
  const user: User = {
    name: "Nishanta Paudel",
    avatar: <MdAccountCircle size={32} />,
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 flex flex-col">
        <Navbar title="Dashboard" user={user} />
        <main className="flex-1 bg-gray-100 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgotpw"
  ) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpw" element={<ForgotPassword />} />
      </Routes>
    );
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/readers" element={<Readers />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
