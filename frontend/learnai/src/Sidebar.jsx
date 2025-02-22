import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-gray-800 fixed left-0 top-0 shadow-lg flex flex-col justify-between p-5 transition-all">
      
      {/* Logo */}
      <h1 className="text-orange-600 italic tracking-wider text-3xl font-bold mb-6 text-center">
        📚 Learn AI
      </h1>

      <hr className="border-t border-gray-300 opacity-50 my-4" />


      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <Link 
          to="/home" 
          className="text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
        >
          🏠 Dashboard
        </Link>
        <Link 
          to="/courses" 
          className="text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
        >
          📖 Courses
        </Link>
        <Link 
          to="/ai-learning" 
          className="text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
        >
          🤖 AI Learning
        </Link>
        <Link 
          to="/career-counseling" 
          className="text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
        >
          🎓 Career Counseling
        </Link>
        <Link 
          to="/offline-learning" 
          className="text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
        >
          📶 Offline Mode
        </Link>
        <Link 
          to="/community" 
          className="text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
        >
          🏆 Community
        </Link>
        <Link 
          to="/about" 
          className="text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
        >
          ℹ️ About Us
        </Link>
      </nav>

      {/* Profile & Logout at the Bottom */}
      <div className="mt-auto">
        <hr className="border-t border-gray-300 opacity-50 my-4" />

        <Link 
          to="/profile" 
          className="block text-lg font-medium px-4 py-2 rounded-lg transition-all hover:bg-orange-500 hover:text-white"
        >
          👤 Profile
        </Link>

        <button 
          className="w-full text-lg font-medium px-4 py-2 mt-2 rounded-lg transition-all hover:bg-red-500 hover:text-white"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
