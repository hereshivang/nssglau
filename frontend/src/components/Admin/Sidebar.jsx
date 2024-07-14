import React from 'react';
import { NavLink } from 'react-router-dom';
import nssLogo from "../../assets/nsslogo.png";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="text-center text-2xl mb-8">
        <img 
          src={nssLogo} 
          alt="NSS Logo" 
          className="rounded-full w-16 h-16 mx-auto mb-2"
        />
        National Service Scheme
      </div>

      <nav className="space-y-2">
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => 
            isActive ? "text-center block px-4 py-2 rounded bg-gray-700" : "block px-4 py-2 rounded hover:bg-gray-700"
          }
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/events" 
          className={({ isActive }) => 
            isActive ? "text-center block px-4 py-2 rounded bg-gray-700" : "block px-4 py-2 rounded hover:bg-gray-700"
          }
        >
          Events
        </NavLink>
        <NavLink 
          to="/blogs" 
          className={({ isActive }) => 
            isActive ? "text-center block px-4 py-2 rounded bg-gray-700" : "block px-4 py-2 rounded hover:bg-gray-700"
          }
        >
          Blogs
        </NavLink>
        <NavLink 
          to="/uploads" 
          className={({ isActive }) => 
            isActive ? "text-center block px-4 py-2 rounded bg-gray-700" : "block px-4 py-2 rounded hover:bg-gray-700"
          }
        >
          Uploads
        </NavLink>
        <NavLink 
          to="/council" 
          className={({ isActive }) => 
            isActive ? "text-center block px-4 py-2 rounded bg-gray-700" : "block px-4 py-2 rounded hover:bg-gray-700"
          }
        >
          Council
        </NavLink>
      </nav>
      <div className="mt-8">
        <button className="w-full bg-red-500 hover:bg-red-700 text-white py-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
