import React from "react";
import Navbar from "../components/navbar/Navbar";

const Withlayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar></Navbar>
        <div className="w-full md:w-5/6 lg:w-4/6 mx-auto px-3">{children}</div>
      </div>
      <footer className="text-3xl bg-gray-800 py-24 px-24 flex items-center justify-center text-white font-semibold">
        FOOTER
      </footer>
    </div>
  );
};

export default Withlayout;
