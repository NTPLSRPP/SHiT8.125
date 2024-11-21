// components/AgendaTable.js
import { useState } from 'react';

export default function AgendaTable1() {
  const [schedules, setSchedules] = useState([
    { time: "09:00 - 09:30", event: "Registration" },
    { time: "09:30 - 09:45", event: "Opening Speech" },
    { time: "09:45 - 10:00", event: "Icebreaking Time" },
    { time: "10:00 - 10:30", event: "How to Come Up with Dumb Ideas" },
    { time: "10:30 - 11:00", event: "Snack Time" },
    { time: "11:00 - 12:00", event: "Brainstorming but Wrong" },
    { time: "12:00 - 13:00", event: "Lunch" },
    { time: "13:00 - 14:00", event: "Hack Time: Let's Make the Useless Happen" },
    { time: "14:00 - 14:45", event: "Nap Time" },
    { time: "14:45 - 17:00", event: "Continued Hacking, Now with More Pointless Features" },
    { time: "17:00 - 17:30", event: "Wrap-Up of Day 1" }
  ]);

  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleSchedules = () => {
    setIsShuffling(true);
    setSchedules(prevSchedules => [...prevSchedules].sort(() => Math.random() - 0.5));
    setTimeout(() => setIsShuffling(false), 900);
  };

  return (
    <div className="overflow-x-auto border rounded-xl bg-slate-50 dark:bg-black pb-3 text-sm">
      <p 
        className={`text-3xl p-4 cursor-pointer hover:text-blue-500 transition-transform w-fit ${
          isShuffling ? 'scale-x-110 scale-y-150' : ''
        }`}
        onClick={shuffleSchedules}
      >
        Day 1 - November 23 2024
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
        </tbody>
      </table>
    </div>
  );
}
  