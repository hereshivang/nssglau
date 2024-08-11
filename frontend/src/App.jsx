import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Forms/Login";
import { AuthProvider, useAuth } from "./components/Context/Authcontext";
import Layout from "./components/Layout";
import Landing from "./components/Pages/Landing";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Join from "./components/Pages/Join";
import Gallery from "./components/Pages/Gallery";
import Events from "./components/Pages/Events";
import Custom from "./components/Utils/Custom";

const Event = React.lazy(() => import('./components/Dashboard/Event'));
const Upload = React.lazy(() => import('./components/Dashboard/Upload'));
const Blogs = React.lazy(() => import('./components/Dashboard/Blogs'));
const Council = React.lazy(() => import('./components/Dashboard/Council'));

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

const App = () => {
  return (
    
      <Router>
         <Custom />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/join" element={<Join/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/Event" element={<Events/>} />
        </Routes>

        <AuthProvider>
        <Suspense fallback={<p>Loading... Please Wait</p>}>
          <Routes>
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin/*"
              element={
                <PrivateRoute
                  element={
                    <Layout>
                      <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="events" element={<Event />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="uploads" element={<Upload />} />
                        <Route path="council" element={<Council />} />
                      </Routes>
                    </Layout>
                  }
                />
              }
            />
          </Routes>
        </Suspense>
        </AuthProvider>
      </Router>
    
  );
};

export default App;
