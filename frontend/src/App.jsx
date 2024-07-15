import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Admin/Sidebar";
import Header from "./components/Admin/Header";
import Main from "./components/Admin/Main";
import Dashboard from "./components/Pages/Dashboard";

const Event = React.lazy(() => import('./components/Pages/Event'));
const Upload = React.lazy(() => import('./components/Pages/Upload'));
const Blogs = React.lazy(() => import('./components/Pages/Blogs'));
const Council = React.lazy(() => import('./components/Pages/Council'));

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Main />
          <Suspense fallback={<p>Loading... Please Wait</p>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/events" element={<Event />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/uploads" element={<Upload />} />
              <Route path="/council" element={<Council />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
