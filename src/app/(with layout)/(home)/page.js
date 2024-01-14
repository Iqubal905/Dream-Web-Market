import React from "react";
import Choose from "./homeCompo/Choose";
import Pricing from "./homeCompo/Pricing";
import Project from "./homeCompo/Project";
import Welcome from "./homeCompo/Welcome";
import Reviews from "./homeCompo/Reviews";

const HomePage = () => {
  return (
    <div>
      <Welcome></Welcome>
      <Choose />
      <Pricing />
      <Project />
      <Reviews></Reviews>
    </div>
  );
};

export default HomePage;
