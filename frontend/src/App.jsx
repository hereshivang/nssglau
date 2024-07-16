import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Login from "./components/Forms/Login";
import { AuthProvider, useAuth } from "./components/Context/Authcontext";
import Layout from "./components/Layout";

const Event = React.lazy(() => import('./components/Pages/Event'));
const Upload = React.lazy(() => import('./components/Pages/Upload'));
const Blogs = React.lazy(() => import('./components/Pages/Blogs'));
const Council = React.lazy(() => import('./components/Pages/Council'));

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
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
      </Router>
    </AuthProvider>
  );
};

export default App;
