import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="mb-6">
        <div className="grid grid-cols-4 gap-4">
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Events
              </h1>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Browse
              </button>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Blogs
              </h1>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Browse
              </button>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Upload
              </h1>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Browse
              </button>
            </div>
          </div>


          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Council
              </h1>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Browse
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
