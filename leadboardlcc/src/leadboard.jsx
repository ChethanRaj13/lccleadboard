import { useState } from 'react';
import gold from './assets/gold.png';
import silver from './assets/silver.png';
import bronze from './assets/bronze.png';
export default function Leaderboard() {
  const [tab, setTab] = useState('daily');


  const topUsers = [
    { name: 'Brian Ngo',USN: '02JST23UCS020', points: 2000, time: "00:00:00" ,position: 'left', image: silver },
    { name: 'Jolie Joie',USN: '02JST23UCS020', points: 2000,  time: "00:00:00" ,position: 'center', image: gold },
    { name: 'David Do',USN: '02JST23UCS020' , points: 2000,  time: "00:00:00" ,position: 'right', image: bronze },
  ];

  const users = [
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
        { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},
    { id: 4, username: "Henrietta O'Connell",  time: "00:00:00", USN: '02JST23UCS020', points: 2114424},
    { id: 5, username: 'Darrel Bins',time: "00:00:00",USN: '02JST23UCS020', points: 2114424},

  ];

  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col items-center py-10 overflow-x-hidden">
        <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <div className="flex justify-center items-end space-x-6">
        {topUsers.map((user, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-2xl bg-gray-900 shadow-xl w-48 ${
              user.position === 'center' ? 'h-64' : 'h-56'
            }`}
          >
            <img src={user.image} alt={user.name} className="rounded-full w-20 h-20 mb-2" />
            <p className="font-semibold text-lg">{user.name}</p>
            <p className="mt-2 text-gray-400 font-bold">{user.USN}</p>
            <p className="text-sm text-blue-400">{user.points} points</p>
            <p className="mt-1 text-gray-400">{user.time}</p>
          </div>
        ))}
      </div>

        <div className="mt-8 w-full max-w-6xl px-4">
        <table className="w-full border-collapse bg-gray-800 rounded-xl overflow-hidden">
          <thead className="bg-gray-700 text-left">
            <tr>
              <th className="p-3 text-center">Rank</th>
              <th className="p-3 text-center">User Name</th>
              <th className="p-3 text-center">USN</th>
              <th className="p-3 text-center">Points</th>
               <th className="p-3 text-center">Time</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                <td className="p-3 text-center w-[10%]">{user.id}</td> 
                <td className="p-3 text-center">{user.username}</td> {/* Assumed 'name' for User Name */}
                <td className="p-3 text-center">{user.USN}</td> 
                <td className="p-3 text-center">{user.time}</td> 
                <td className="p-3 text-center">{user.points.toLocaleString()}</td> {/* Right-align the data and format points */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
