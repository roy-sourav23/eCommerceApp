import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="p-4">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
