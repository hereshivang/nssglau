import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Admin/Sidebar";
import Header from "./components/Admin/Header";
import Main from "./components/Admin/Main";
import Dashboard from "./components/Pages/Dashboard";
import Event from "./components/Pages/Event";
import Blogs from "./components/Pages/Blogs";
import Upload from "./components/Pages/Upload";
import Council from "./components/Pages/Council";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Main />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/events" element={<Event />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/uploads" element={<Upload />} />
            <Route path="/council" element={<Council />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
