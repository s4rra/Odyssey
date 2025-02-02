import { Home, User, Book, Target, ShoppingCart, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow-md p-4">
      <h1 className="text-xl font-bold mb-6 flex items-center">
        <span className="mr-2">🎮</span> Odyssey
      </h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-green-500">
              <Home size={20} /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center space-x-2 hover:text-green-500">
              <User size={20} /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/courses" className="flex items-center space-x-2 hover:text-green-500">
              <Book size={20} /> <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/missions" className="flex items-center space-x-2 hover:text-green-500">
              <Target size={20} /> <span>Missions</span>
            </Link>
          </li>
          <li>
            <Link to="/shop" className="flex items-center space-x-2 hover:text-green-500">
              <ShoppingCart size={20} /> <span>Shop</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center space-x-2 hover:text-green-500">
              <Settings size={20} /> <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
