import React from "react";
import Sidebar from "./Sidebar";

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
    <>
      <div className="ml-68 mt-20 w-95 h-30 p-6 rounded-xl bg-amber-300 shadow-md shadow-amber-600 flex flex-col justify-center items-center hover:">
        <p className="font-bold text-2xl">Hello, Mr. Abhishek</p>
        <p className="font-semibold italic text-sky-900">{day}, {date} {month} {year}</p>
      </div>
    </>
  );
}

export default NameD;
