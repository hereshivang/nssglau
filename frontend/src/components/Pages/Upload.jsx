import React from 'react';

const Upload = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4">Gallery</h2>
      <div className="mb-6">
        <h3 className="text-xl mb-2">Add Album</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add</button>
      </div>
      <div>
        <h3 className="text-xl mb-2">Recent Albums</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-100 p-6 rounded">
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
