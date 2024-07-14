import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-100 p-6 rounded">
            <h1>Events</h1>
            <button className="bg-blue-500 hover:bg-red-700 text-white py-2 px-4 rounded">Browse</button>

          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h1>Blogs</h1>
            <button className="bg-blue-500 hover:bg-red-700 text-white py-2 px-4 rounded">Browse</button>

          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h1>Upload</h1>
            <button className="bg-blue-500 hover:bg-red-700 text-white py-2 px-4 rounded">Browse</button>

          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h1>Council</h1>
            <button className="bg-blue-500 hover:bg-red-700 text-white py-2 px-4 rounded">Browse</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
