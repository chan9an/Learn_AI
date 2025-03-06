import React from "react";

const Subjects = ({ classLevel }) => {
  const subjectsFor10th = [
    { name: "Mathematics", icon: "📐" },
    { name: "Science", icon: "🔬" },
    { name: "English", icon: "📖" },
    { name: "Social Studies", icon: "🌍" },
    { name: "Hindi", icon: "📝" },
    { name: "Computer Science", icon: "💻" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
      {subjectsFor10th.map((subject, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-xl shadow-lg flex items-center space-x-4 transition-all transform hover:scale-105 hover:shadow-2xl"
        >
          <span className="text-4xl">{subject.icon}</span>
          <p className="text-xl font-semibold">{subject.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
