import { useState } from "react";
import gold from "./assets/gold.png";
import silver from "./assets/silver.png";
import bronze from "./assets/bronze.png";
import infoIcon from "./assets/info.png"; // your info icon

const USERS_PER_PAGE = 10;

export default function Leaderboard() {
  const [tab, setTab] = useState("daily");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null); // used for info dialog

  const topUsers = [
    {
      name: "Brian Ngo",
      USN: "02JST23UCS020",
      points: 2000,
      time: "00:00:00",
      position: "left",
      image: silver,
    },
    {
      name: "Jolie Joie",
      USN: "02JST23UCS020",
      points: 2000,
      time: "00:00:00",
      position: "center",
      image: gold,
    },
    {
      name: "David Do",
      USN: "02JST23UCS020",
      points: 2000,
      time: "00:00:00",
      position: "right",
      image: bronze,
    },
  ];

  const users = [
    { id: 4, username: "Henrietta O'Connell", time: "00:00:00", USN: "02JST23UCS020", points: 2114424 },
    { id: 5, username: "Darrel Bins", time: "00:00:00", USN: "02JST23UCS020", points: 2114424 },
    { id: 6, username: "User Six", time: "00:00:00", USN: "02JST23UCS020", points: 1900000 },
    { id: 7, username: "User Seven", time: "00:00:00", USN: "02JST23UCS020", points: 1800000 },
    { id: 8, username: "User Eight", time: "00:00:00", USN: "02JST23UCS020", points: 1700000 },
    { id: 9, username: "User Nine", time: "00:00:00", USN: "02JST23UCS020", points: 1600000 },
    { id: 10, username: "User Ten", time: "00:00:00", USN: "02JST23UCS020", points: 1500000 },
    { id: 11, username: "User Eleven", time: "00:00:00", USN: "02JST23UCS020", points: 1400000 },
    { id: 12, username: "User Twelve", time: "00:00:00", USN: "02JST23UCS020", points: 1300000 },
    { id: 13, username: "User Thirteen", time: "00:00:00", USN: "02JST23UCS020", points: 1200000 },
    { id: 14, username: "User Fourteen", time: "00:00:00", USN: "02JST23UCS020", points: 1100000 },
    { id: 15, username: "User Fifteen", time: "00:00:00", USN: "02JST23UCS020", points: 1000000 },
    { id: 16, username: "User Sixteen", time: "00:00:00", USN: "02JST23UCS020", points: 900000 },
    { id: 17, username: "User Seventeen", time: "00:00:00", USN: "02JST23UCS020", points: 800000 },
    { id: 18, username: "User Eighteen", time: "00:00:00", USN: "02JST23UCS020", points: 700000 },
    { id: 19, username: "User Nineteen", time: "00:00:00", USN: "02JST23UCS020", points: 600000 },
    { id: 20, username: "User Twenty", time: "00:00:00", USN: "02JST23UCS020", points: 500000 },
    { id: 21, username: "User Twenty-one", time: "00:00:00", USN: "02JST23UCS020", points: 400000 },
    { id: 22, username: "User Twenty-two", time: "00:00:00", USN: "02JST23UCS020", points: 300000 },
    { id: 23, username: "User Twenty-three", time: "00:00:00", USN: "02JST23UCS020", points: 200000 },
    { id: 24, username: "User Twenty-four", time: "00:00:00", USN: "02JST23UCS020", points: 100000 },
    { id: 25, username: "User Twenty-five", time: "00:00:00", USN: "02JST23UCS020", points: 90000 },
    { id: 26, username: "User Twenty-six", time: "00:00:00", USN: "02JST23UCS020", points: 80000 },
    { id: 27, username: "User Twenty-seven", time: "00:00:00", USN: "02JST23UCS020", points: 70000 },
    { id: 28, username: "User Twenty-eight", time: "00:00:00", USN: "02JST23UCS020", points: 60000 },
    { id: 29, username: "User Twenty-nine", time: "00:00:00", USN: "02JST23UCS020", points: 50000 },
    { id: 30, username: "User Thirty", time: "00:00:00", USN: "02JST23UCS020", points: 40000 },
  ];

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = currentPage * USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col items-center py-10 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

      {/* Top Users Section */}
      <div className="flex justify-center items-end space-x-6">
        {topUsers.map((user, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-2xl w-48 bg-neutral-900 from-gray-950/80 to-pure-black/70 shadow-2xl backdrop-blur-lg border border-white/30 ${
              user.position === "center" ? "h-64" : "h-56"
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

      {/* Leaderboard Table */}
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
            {currentUsers.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-black" : "bg-neutral-800"
                } border border-white/10`}
              >
                <td className="p-3 text-center">{startIndex + index + 1}</td>
                <td className="p-3 text-center">{user.username}</td>
                <td className="p-3 text-center">{user.USN}</td>
                <td className="p-3 text-center">{user.points.toLocaleString()}</td>
                <td className="p-3 text-center">{user.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              currentPage === 1
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Previous
          </button>

          <span className="px-4 py-2 text-lg font-semibold bg-gray-700 rounded-lg">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              currentPage === totalPages
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Floating Info Button */}
      <button
        onClick={() => setSelectedUser("info")}
        className="fixed bottom-6 left-6 bg-neutral-900 hover:bg-neutral-800 border border-white/10 p-3 rounded-full shadow-lg transition z-50"
      >
        <img src={infoIcon} alt="info" className="w-6 h-6" />
      </button>

      {/* Info Dialog */}
      {selectedUser === "info" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 w-[90%] sm:w-[400px] shadow-2xl">
            <h2 className="text-xl font-semibold mb-3 text-center">About the Leaderboard</h2>
            <p className="text-gray-300 mb-4 text-center">
              This leaderboard highlights the top users based on their performance and points.
              Points are updated automatically and reset daily, weekly, or monthly based on your tab selection.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
