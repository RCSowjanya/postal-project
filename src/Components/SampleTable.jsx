import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import Settings from "./Settings";
import TableContent from "./TableContent";
import FromtoDate from "./FromtoDate";
import ShareExport from "./ShareExport";
const SampleTable = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      {/*----Sample Table#1-----*/}
      <div className="flex justify-between gap-11">
        <div>
          <h1 className="text-2xl mb-5">Sample Table#1</h1>
        </div>
        <ShareExport />
      </div>
      {/*----Quick links and dropdown-close---*/}
      <div className="flex gap-5 mt-[5%]">
        {/*---from date - to date---*/}
        <FromtoDate />
        <FromtoDate />

        {/*---settings---*/}
        <div>
          <Settings />
        </div>
      </div>
      {/*---from date - to date- close--*/}
      {/*-----Table----*/}
      <TableContent />
    </div>
  );
};

export default SampleTable;
