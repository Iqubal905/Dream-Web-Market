import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {

    
const projects = [
    {
      "name": "Project 1",
      "link": "https://example.com/project1",
      "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
    },
    {
        "name": "Project 1",
        "link": "https://example.com/project1",
        "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
      },
      {
        "name": "Project 1",
        "link": "https://example.com/project1",
        "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
      },
      {
        "name": "Project 1",
        "link": "https://example.com/project1",
        "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
      },
      {
        "name": "Project 1",
        "link": "https://example.com/project1",
        "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
      },
      {
        "name": "Project 1",
        "link": "https://example.com/project1",
        "img": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
      },
  ];

    return (
        <div>
          <div className=' text-center py-2 md:py-8 mt-12 '>
            <span className=' bg-sky-950 text-white  px-4 py-2 font-bold rounded-md text-2xl'>Project</span>
            <h2 className=' text-xl md:text-4xl text-slate-950 font-bold py-2 md:py-4'>Projects We Have Done Before</h2>
            <p className=' text-slate-700'>You May Check Our Previous Projects to Have An Idea About <br />
The Quality Of Our Work</p>
          </div>
             <div className="flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
        </div>
    );
};

export default Project;