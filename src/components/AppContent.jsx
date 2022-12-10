import React, { useState } from "react";
import Header from "./Header";
import HeaderContent from "./HeaderContent";
import Navbar from "./Navbar";

const AppContent = () => {
  const [navVisible, showNavbar] = useState(false);

  return (
    <>
      <Header />
      <HeaderContent />
      <Navbar visible={navVisible} show={showNavbar} />
    </>
  );
};

export default AppContent;
