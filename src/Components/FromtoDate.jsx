import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const FromtoDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      {/*---from date - to date---*/}
      <div className="flex flex-col items-center w-full">
        <label
          className="text-gray-700 text-sm font-bold mb-2 w-full"
          for="dateOfBirth"
        >
          From Date
        </label>
        <div className="relative">
          <DatePicker
            id="dateOfBirth"
            selected={selectedDate || new Date()} // Use selectedDate if available, otherwise use current date
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select Date of Birth"
            className="w-full pl-8 border  border-gray-500 rounded-md shadow-sm py-2 px-4 focus:outline-none text-gray-600"
            dateFormat="dd/MM/yyyy"
            isClearable
            showYearDropdown
            scrollableYearDropdown
          />
          <div className="absolute inset-y-0 left-0 ml-2 py-2 flex items-center  pointer-events-none">
            <FaCalendarAlt
              className="h-5 w-5 text-gray-700 "
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromtoDate;
