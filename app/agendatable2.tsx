// components/AgendaTable.js

export default function AgendaTable2() {
    return (
      <div className="overflow-x-auto border rounded-xl bg-primary dark:bg-black pb-3 text-sm flex flex-col">
        <p className="text-3xl p-4">Day 2 - November 24 2024</p>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className=" p-3 text-left">Time</th>
              <th className=" p-3 text-left">Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" p-3">09:00 - 09:30</td>
              <td className=" p-3">Registration</td>
            </tr>
            <tr>
              <td className=" p-3">09:30 - 12.00</td>
              <td className=" p-3">Hack Time: Let’s Make the Useless Happen</td>
            </tr>
            <tr>
              <td className=" p-3">12:00 - 13:00</td>
              <td className=" p-3">Lunch</td>
            </tr>
            <tr>
              <td className=" p-3">13:00 - 16:00</td>
              <td className=" p-3">Pitching time!</td>
            </tr>
            <tr>
              <td className=" p-3">16:00 - 16:15</td>
              <td className=" p-3">Nap Time
              </td>
            </tr>
            <tr>
              <td className=" p-3">16.15 - 17:00</td>
              <td className="p-3">Wrap-up and Networking</td>
            </tr>
            <tr>
            <td className="p-3 pb-56"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  