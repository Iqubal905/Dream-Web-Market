import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {


  const projects = [
    {
      "name": "We shop",
      "link": "https://example.com/project1",
      "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      "name": "Yoga Guru",
      "link": "https://example.com/project1",
      "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      "name": "Fresh food",
      "link": "https://example.com/project1",
      "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      "name": "Sales Bazar",
      "link": "https://example.com/project1",
      "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
    },

  ];

  return (
    <div>
      <div className=' text-center py-2 md:py-8 mt-12 '>

        <h2 className=' text-xl md:text-4xl text-slate-950 font-bold py-2 md:py-4'>Projects We Have Done Before</h2>
        <p className=' text-slate-700'>You May Check Our Previous Projects to Have An Idea About <br />
          The Quality Of Our Work</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;