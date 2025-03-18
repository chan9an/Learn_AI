import React from "react";
import { Link } from "react-router-dom";
import { Home, Book, Cpu, Briefcase, WifiOff, Users, Info, User, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed left-0 top-0 shadow-xl flex flex-col justify-between p-6 transition-all">
      
      {/* Logo */}
      <h1 className="text-orange-400 italic tracking-wider text-3xl font-bold mb-6 text-center">
        Learn AI
      </h1>

      <hr className="border-t border-gray-600 opacity-50 my-4" />

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-3">
        <SidebarLink to="/home" icon={<Home size={20} />} label="Dashboard" />
        <SidebarLink to="/courses" icon={<Book size={20} />} label="Courses" />
        <SidebarLink to="/ai-learning" icon={<Cpu size={20} />} label="AI Learning" />
        <SidebarLink to="/career-counseling" icon={<Briefcase size={20} />} label="Career Counseling" />
        <SidebarLink to="/offline-learning" icon={<WifiOff size={20} />} label="Offline Mode" />
        <SidebarLink to="/community" icon={<Users size={20} />} label="Community" />
        <SidebarLink to="/about" icon={<Info size={20} />} label="About Us" />
      </nav>

      {/* Profile & Logout at the Bottom */}
      <div className="mt-auto">
        <hr className="border-t border-gray-600 opacity-50 my-4" />

        <SidebarLink to="/profile" icon={<User size={20} />} label="Profile" />

        <button className="w-full flex items-center space-x-3 text-lg font-medium px-4 py-2 mt-3 rounded-lg transition-all bg-red-600 hover:bg-red-500 hover:text-white">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

// Reusable Sidebar Link Component
const SidebarLink = ({ to, icon, label }) => (
  <Link 
    to={to} 
    className="flex items-center space-x-3 text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Sidebar;
