import React from "react";

const Event = () => {
  return (
    <div className="p-6 mt-0 top-0 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4">Events</h2>
      <div className="bg-red-500 rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
      <div className=" justify-between h-full p-6">
      <h3 className="text-xl mb-2">Create Event</h3>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Add
      </button>
  </div>
</div>

      <div className="mt-6 mb-6">
        <h3 className="text-xl mb-2">Upcoming Events</h3>
        <div className="grid grid-cols-4 gap-4">

          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/event-image.jpg")',}}>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Event Name
              </h1>
              <p className="text-sm text-gray-600 mb-4">Event Tagline</p>
              <p className="text-sm text-gray-600 mb-2">Date: Event Date</p>
              <p className="text-sm text-gray-600 mb-4">Venue: Event Venue</p>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
              <button className="bg-red-500 ml-2 hover:bg-red-700 text-white py-2 px-4 rounded">
                Update
              </button>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/event-image.jpg")',}}>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Event Name
              </h1>
              <p className="text-sm text-gray-600 mb-4">Event Tagline</p>
              <p className="text-sm text-gray-600 mb-2">Date: Event Date</p>
              <p className="text-sm text-gray-600 mb-4">Venue: Event Venue</p>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
              <button className="bg-red-500 ml-2 hover:bg-red-700 text-white py-2 px-4 rounded">
                Update
              </button>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/event-image.jpg")',}}>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Event Name
              </h1>
              <p className="text-sm text-gray-600 mb-4">Event Tagline</p>
              <p className="text-sm text-gray-600 mb-2">Date: Event Date</p>
              <p className="text-sm text-gray-600 mb-4">Venue: Event Venue</p>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
              <button className="bg-red-500 ml-2 hover:bg-red-700 text-white py-2 px-4 rounded">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl mb-2">Recent Events</h3>
        <div className="grid grid-cols-4 gap-4">
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/event-image.jpg")',}}>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Event Name
              </h1>
              <p className="text-sm text-gray-600 mb-4">Event Tagline</p>
              <p className="text-sm text-gray-600 mb-2">Date: Event Date</p>
              <p className="text-sm text-gray-600 mb-4">Venue: Event Venue</p>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/event-image.jpg")',}}>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Event Name
              </h1>
              <p className="text-sm text-gray-600 mb-4">Event Tagline</p>
              <p className="text-sm text-gray-600 mb-2">Date: Event Date</p>
              <p className="text-sm text-gray-600 mb-4">Venue: Event Venue</p>
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden aspect-w-1 aspect-h-1">
            <div className="bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/event-image.jpg")',}}>
              <div className="bg-black bg-opacity-25 h-full w-full absolute top-0 left-0"></div>
            </div>
            <div className="p-6 relative z-10">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Event Name
              </h1>
              <p className="text-sm text-gray-600 mb-4">Event Tagline</p>
              <p className="text-sm text-gray-600 mb-2">Date: Event Date</p>
              <p className="text-sm text-gray-600 mb-4">Venue: Event Venue</p>
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

export default Event;
