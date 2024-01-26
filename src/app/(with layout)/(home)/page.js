import React from "react";
import Choose from "./homeCompo/Choose";
import Pricing from "./homeCompo/Pricing";
import Project from "./homeCompo/Project";
import Welcome from "./homeCompo/Welcome";
import Reviews from "./homeCompo/Reviews";
export const metadata = {
  title: "Dream Web Market | home",
  description:
    "Turning Dreams into Digital Realities! We craft sleek and powerful online solutions tailored just for you. Elevate your digital presence with us.",
};
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
