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
              <th className=" p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" p-3">09:00 - 09:30</td>
              <td className=" p-3">Registration</td>
              <td className=" p-3">Whoever comes late sits in front.</td>
            </tr>
            <tr>
              <td className=" p-3">09:30 - 09:45</td>
              <td className=" p-3">Opening Speech</td>
              <td className=" p-3">The speaker will talk about how to "Be Productively Useless."</td>
            </tr>
            <tr>
              <td className=" p-3">09:45 - 10:00</td>
              <td className=" p-3">Icebreaking Time</td>
              <td className=" p-3">Doing something…</td>
            </tr>
            <tr>
              <td className=" p-3">10:00 - 10:30</td>
              <td className=" p-3">How to Come Up with Dumb Ideas (Talk Show)</td>
              <td className=" p-3">Our panel will teach how to develop ridiculous ideas.</td>
            </tr>
            <tr>
              <td className=" p-3">10:30 - 11:00</td>
              <td className=" p-3">Snack Time</td>
              <td className=" p-3">Wait, do we have snacks?</td>
            </tr>
            <tr>
              <td className=" p-3">11:00 - 12:00</td>
              <td className=" p-3">Brainstorming but Wrong</td>
              <td className=" p-3">Teams compete to come up with the worst possible ideas for apps.</td>
            </tr>
            <tr>
              <td className=" p-3">12:00 - 13:00</td>
              <td className=" p-3">Lunch</td>
              <td className=" p-3">consuming the nutritional (also known as eating).</td>
            </tr>
            <tr>
              <td className=" p-3">13:00 - 14:00</td>
              <td className=" p-3">Hack Time: Let’s Make the Useless Happen</td>
              <td className=" p-3">Start coding the dumbest thing your team has ever thought of.</td>
            </tr>
            <tr>
              <td className=" p-3">14:00 - 14:45</td>
              <td className=" p-3">Nap Time
              </td>
              <td className=" p-3">Yes, this is “required” scheduled.</td>
            </tr>
            <tr>
              <td className=" p-3">14:45 - 17:00</td>
              <td className=" p-3">Continued Hacking, Now with More Pointless Features
              </td>
              <td className=" p-3">It's time to add features no one will use or stupid as possible.</td>
            </tr>
            <tr>
              <td className=" p-3">17:00 - 17:30</td>
              <td className=" p-3">Wrap-Up of Day 1
              </td>
              <td className=" p-3">Everyone shares the most meaningless thing they’ve accomplished so far.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  