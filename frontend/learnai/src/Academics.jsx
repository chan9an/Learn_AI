import React from "react";
import Subjects from "./subjects";

const Academics = () => {
  return (
    <div className="mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📚 10th Class Academics</h2>

      {/* 10th Class Subjects */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">📖 Subjects</h3>
        <Subjects classLevel="10th" />
      </div>

      {/* Exam Schedule */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">📝 Upcoming Exams</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Mathematics - March 10, 2024</li>
          <li>Science - March 15, 2024</li>
          <li>English - March 20, 2024</li>
        </ul>
      </div>

      {/* Study Resources */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">📂 Study Resources</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li><a href="/notes" className="text-blue-600 hover:underline">Class Notes</a></li>
          <li><a href="/ebooks" className="text-blue-600 hover:underline">E-books</a></li>
          <li><a href="/videos" className="text-blue-600 hover:underline">Video Lectures</a></li>
        </ul>
      </div>

      {/* Timetable */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">⏳ Daily Timetable</h3>
        <p className="text-gray-600">8 AM - 10 AM: Mathematics | 10:30 AM - 12 PM: Science | 2 PM - 4 PM: English</p>
      </div>
    </div>
  );
};

export default Academics;
