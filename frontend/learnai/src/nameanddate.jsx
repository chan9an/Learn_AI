import React from "react";
import { motion } from "framer-motion";

function NameD() {
  const today = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = daysOfWeek[today.getDay()];
  const monthsOfYear = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const date = today.getDate();
  const month = monthsOfYear[today.getMonth()];
  const year = today.getFullYear();

  return (
    <motion.div 
      whileHover={{ scale: 1.02, boxShadow: "0px 8px 16px rgba(255, 215, 0, 0.4)" }}
      className="w-full h-full p-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg flex flex-col justify-center items-center transition-all"
      style={{ minHeight: "150px" }} // Ensures consistent height
    >
      <p className="font-bold text-3xl text-gray-900 text-center">Hello, Mr. Abhishek</p>
      <p className="font-semibold italic text-gray-800">{day}, {date} {month} {year}</p>
    </motion.div>
  );
}

export default NameD;
