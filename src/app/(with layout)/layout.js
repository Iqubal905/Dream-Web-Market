import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Withlayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar></Navbar>
        <div className="w-full md:w-5/6 lg:w-4/6 mx-auto px-3">{children}</div>
      </div>
      <footer className="text-3xl bg-gray-800  pt-16 px-6 md:px-24  items-center  justify-around text-white font-semibold">
       <Footer/>
      </footer>
    </div>
  );
};

export default Withlayout;
