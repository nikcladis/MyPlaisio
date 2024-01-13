import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components//Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountModal from "../../components/Modals/AccountModal/AccountModal";

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <AccountModal />
        <Outlet />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;
