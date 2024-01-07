import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components//Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const RootLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      <Header />
      <main className="flex min-h-screen">
        <Sidebar isOpen={isOpen} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
