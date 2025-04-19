
import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay } from "date-fns";
import { FaHeart } from "react-icons/fa";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);
  const [dateNotes, setDateNotes] = useState({});

  const handleDayClick = (day) => {
    const alreadyMarked = markedDates.find((d) => isSameDay(d, day));
    const note = prompt("Enter note for this date (e.g., Birthday, Holiday, etc.):");
    if (alreadyMarked) {
      setMarkedDates(markedDates.filter((d) => !isSameDay(d, day)));
      const newNotes = { ...dateNotes };
      delete newNotes[format(day, "yyyy-MM-dd")];  // Remove note for unmarked date
      setDateNotes(newNotes);
    } else {
      setMarkedDates([...markedDates, day]);
      if (note) {
        setDateNotes({ ...dateNotes, [format(day, "yyyy-MM-dd")]: note });
      }
    }
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center text-pink-800 font-bold text-xl p-4 bg-pink-100 rounded-t-2xl shadow-lg">
      <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>&lt;</button>
      <div>{format(currentDate, "MMMM yyyy")}</div>
      <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>&gt;</button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = new Date();
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-pink-700 font-semibold">
          {format(addDays(startOfWeek(date), i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mt-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const isMarked = markedDates.some((d) => isSameDay(d, day));
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isToday = isSameDay(day, new Date());

        days.push(
          <div
            key={day}
            className={`p-4 text-center border rounded-lg cursor-pointer transition-all duration-300 ${isCurrentMonth ? "text-gray-800" : "text-gray-400"} ${isMarked ? "bg-pink-300" : "hover:bg-pink-100"} ${isToday ? "bg-yellow-100" : ""}`}
            onClick={() => handleDayClick(day)}
          >
            <div className="text-xs">{format(day, "EEE")}</div>
            <div className="font-bold">{formattedDate}</div>
            {isMarked && <FaHeart className="mx-auto text-red-600 mt-1" />}
            {isMarked && dateNotes[format(day, "yyyy-MM-dd")] && (
              <div className="text-xs text-pink-600 mt-1">{dateNotes[format(day, "yyyy-MM-dd")]}</div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1 mb-1" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="mt-2">{rows}</div>;
  };

  return (
    <div className="relative max-w-full h-full bg-pink-50 shadow-xl rounded-2xl p-6 border-2 border-pink-200">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-2xl text-pink-700 font-extrabold">My Lovely Calendar 🐱💕</h2>
      </div>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className="mt-4 text-center text-sm text-pink-700 font-medium">
        Click on any date to mark/unmark something important (e.g., Birthday, Holiday).
      </div>
    </div>
  );
};

export default Calendar;



