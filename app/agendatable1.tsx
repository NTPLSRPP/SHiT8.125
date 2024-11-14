
// components/AgendaTable.js
export default function AgendaTable1() {
    return (
      <div className="overflow-x-auto border rounded-xl bg-primary dark:bg-black pb-3 text-sm">
        <p className="text-3xl p-4">Day 1 - November 23 2024</p>
        <table className="min-w-full ">
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
              <td className=" p-3">09:30 - 09:45</td>
              <td className=" p-3">Opening Speech</td>
            </tr>
            <tr>
              <td className=" p-3">09:45 - 10:00</td>
              <td className=" p-3">Icebreaking Time</td>
            </tr>
            <tr>
              <td className=" p-3">10:00 - 10:30</td>
              <td className=" p-3">How to Come Up with Dumb Ideas </td>
            </tr>
            <tr>
              <td className=" p-3">10:30 - 11:00</td>
              <td className=" p-3">Snack Time</td>
            </tr>
            <tr>
              <td className=" p-3">11:00 - 12:00</td>
              <td className=" p-3">Brainstorming but Wrong</td>
            </tr>
            <tr>
              <td className=" p-3">12:00 - 13:00</td>
              <td className=" p-3">Lunch</td>
            </tr>
            <tr>
              <td className=" p-3">13:00 - 14:00</td>
              <td className=" p-3">Hack Time: Let’s Make the Useless Happen</td>
            </tr>
            <tr>
              <td className=" p-3">14:00 - 14:45</td>
              <td className=" p-3">Nap Time
              </td>
            </tr>
            <tr>
              <td className=" p-3">14:45 - 17:00</td>
              <td className=" p-3">Continued Hacking, Now with More Pointless Features
              </td>
            </tr>
            <tr>
              <td className=" p-3">17:00 - 17:30</td>
              <td className=" p-3">Wrap-Up of Day 1
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  