import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components//Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const RootLayout: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="flex min-h-screen">
        <Outlet />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
