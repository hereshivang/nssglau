import React from "react";

const Council = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Council</h2>
      <div className="bg-red-500 rounded-lg shadow-md overflow-hidden w-64 ">
        <div className=" justify-between h-full p-6">
          <h3 className="text-xl mb-2">New Concil</h3>
          <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Add
          </button>
        </div>
        <div>
        </div>
      </div>
      

      <div>
        <h3 className="text-xl mb-2 mt-10">Recent Councils</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Council 1.0
              </h1>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Council 2.0
              </h1>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Council 3.0
              </h1>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Council;
