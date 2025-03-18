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
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(255, 215, 0, 0.5)" }}
      className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg flex flex-col justify-center items-center transition-all"
    >
      <p className="font-bold text-3xl text-gray-900">Hello, Mr. Abhishek</p>
      <p className="font-semibold italic text-gray-700">{day}, {date} {month} {year}</p>
    </motion.div>
  );
}

export default NameD;
