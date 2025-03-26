import React from 'react';
import { projects } from './Data';

const Projects = () => {
  return (
    <div className="flex justify-center items-center mt-0">
      <div className=" bg-opacity-30 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-6xl">
        {/* Scrollable container */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer m-4"
              onClick={() => window.open(project.link, '_blank')}
            >
              <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md" />
              <h2 className="mt-2 text-center text-lg font-semibold">{project.title}</h2>
              {/* <p className="text-center text-gray-600">{project.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;