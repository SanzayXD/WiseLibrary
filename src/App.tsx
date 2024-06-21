import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import { Books } from "./components/pages/books";
import { Readers } from "./components/pages/readers";
import { Authors } from "./components/pages/authors";
import { Borrow } from "./components/pages/borrow";
import {
  MdLibraryBooks,
  MdPeople,
  MdPerson,
  MdSwapHoriz,
  MdAccountCircle,
} from "react-icons/md";
function App() {
  const sidebarItems = [
    { id: 1, label: "Books", path: "/", icon: <MdLibraryBooks /> },
    { id: 2, label: "Readers", path: "/readers", icon: <MdPeople /> },
    { id: 3, label: "Authors", path: "/authors", icon: <MdPerson /> },
    { id: 4, label: "Book Borrow", path: "/borrow", icon: <MdSwapHoriz /> },
  ];

  const user = {
    name: "Nishanta Paudel",
    avatar: <MdAccountCircle size={32} />,
  };

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen">
        <Sidebar items={sidebarItems} />
        <div className="flex-1 flex flex-col">
          <Navbar title="Dashboard" user={user} />
          <main className="flex-1 bg-gray-100 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="/readers" element={<Readers />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/borrow" element={<Borrow />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
