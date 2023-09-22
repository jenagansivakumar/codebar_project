import React from "react";

export default function Nmap() {
  return (
    <div className="flex justify-center align-center">
      <form className="nmap-form w-full max-w-md p-4 bg-white border rounded shadow-sm">
        <div className="flex flex-col mb-4 text-red-500">
          <label htmlFor="Host">Host</label>
          <input
            type="text"
            name="Host"
            placeholder="Host"
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="Scan">Ports</label>
          <input
            type="text"
            name="Scan"
            placeholder="Ports"
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="bg-pink-400">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Scan
          </button>
        </div>
        <div>
          <table className="flex justify-center align-center text-center">
            <thead>
              <tr>
                <th>Port</th>
                <th>Status</th>
              </tr>
            </thead>
          </table>
        </div>
      </form>
    </div>
  );
}
