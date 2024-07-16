import React from "react";
import Sidebar from "./Admin/Sidebar";
import Header from "./Admin/Header";
import Main from "./Admin/Main";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Main />
        {children}
      </div>
    </div>
  );
};

export default Layout;
