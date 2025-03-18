import React from "react";
import { motion } from "framer-motion";

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
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg flex items-center space-x-4 transition-all transform hover:shadow-2xl"
        >
          <span className="text-4xl">{subject.icon}</span>
          <p className="text-xl font-semibold">{subject.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Subjects;
