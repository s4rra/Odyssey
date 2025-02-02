import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default CalendarComponent;
