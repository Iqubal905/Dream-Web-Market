import React from 'react';
import Choose from './homeCompo/Choose';
import Pricing from './homeCompo/Pricing';
import Project from './homeCompo/Project';

const HomePage = () => {
  return (
    <div>
      <Choose/>
      <Pricing/>
      <Project/>
    </div>
  );
};

export default HomePage;