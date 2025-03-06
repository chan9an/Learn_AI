import React from "react";
import Sidebar from "./Sidebar";
import NameD from "./nameanddate";
import Subjects from "./subjects";

function Homepage() {
  return (
    <div className="flex">
      {/* Sidebar (Fixed) */}
      <Sidebar />
      
      {/* Main Content - Adjust margin to prevent overlap */}
      <div className="flex-1 ml-64 p-8">{/*  */}
        {/* Name and Date Section */}
        <NameD />
        
        {/* Subjects Section for 10th Class */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">📚 10th Class Subjects</h2>
          <Subjects classLevel="10th" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
