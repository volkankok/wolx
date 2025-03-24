import React from 'react';
import { projects } from './Data';

const Projects = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-500 ">
      <div className="bg-amber-950 p-8 rounded-2xl shadow-lg w-full max-w-6xl  overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md" />
              <h2 className="mt-2 text-center text-lg font-semibold">{project.title}</h2>
              <p className="text-center text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;