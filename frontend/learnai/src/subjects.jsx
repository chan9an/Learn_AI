import React from "react";
import { Link } from "react-router-dom";

const Subjects = ({ classLevel }) => {
  const subjectsFor10th = [
    { name: "Mathematics", icon: "📐", path: "/class-10/math" },
    { name: "Science", icon: "🔬", path: "/class-10/science" },
    { name: "English", icon: "📖", path: "/class-10/english" },
    { name: "Social Studies", icon: "🌍", path: "/class-10/social-studies" },
    { name: "Hindi", icon: "📝", path: "/class-10/hindi" },
    { name: "Computer Science", icon: "💻", path: "/class-10/computer-science" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
      {subjectsFor10th.map((subject, index) => (
        <Link to={subject.path} key={index} className="no-underline">
          <div
            className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center 
            w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <span className="text-5xl">{subject.icon}</span>
            <p className="text-lg font-semibold mt-3 text-center">{subject.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Subjects;
