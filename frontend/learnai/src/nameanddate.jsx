import React from "react";
import Sidebar from "./Sidebar";
function NameD(){

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

    return(
        <>
        <p className=" mt-20 ml-100 font-bold text-4xl flex "> Hello, Mr Abhishek </p>
        <p className="  ml-100 font-semibold italic text-sky-900 flex ">{day} , {date} {month}  {year}</p>
        </>

    )

    
}
export default NameD