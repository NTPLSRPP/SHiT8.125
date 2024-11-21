// components/AgendaTable.js

import { useState } from 'react';

export default function AgendaTable2() {
  const [schedules, setSchedules] = useState([
    { time: "09:00 - 09:30", event: "Registration" },
    { time: "09:30 - 12.00", event: "Hack Time: Let's Make the Useless Happen" },
    { time: "12:00 - 13:00", event: "Lunch" },
    { time: "13:00 - 16:00", event: "Pitching time!" },
    { time: "16:00 - 16:15", event: "Nap Time" },
    { time: "16.15 - 17:00", event: "Wrap-up and Networking" }
  ]);

  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleSchedules = () => {
    setIsShuffling(true);
    setSchedules(prevSchedules => [...prevSchedules].sort(() => Math.random() - 0.5));
    setTimeout(() => setIsShuffling(false), 800);
  };

  return (
    <div className="overflow-x-auto border rounded-xl bg-slate-50 dark:bg-black pb-3 text-sm flex flex-col">
      <p 
        className={`text-3xl p-4 cursor-pointer w-fit hover:text-blue-500 transition-transform ${
          isShuffling ? 'scale-110' : ''
        }`}
        onClick={shuffleSchedules}
      >
        Day 2 - November 24 2024
      </p>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Event</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr 
              key={index}
              className={`transition-all duration-500 ease-in-out ${
                isShuffling ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`
              }}
            >
              <td className="p-3">{schedule.time}</td>
              <td className="p-3">{schedule.event}</td>
            </tr>
          ))}
          <tr>
            <td className="p-3 pb-56"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
  