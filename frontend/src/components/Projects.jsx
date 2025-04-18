import React, { useState } from 'react';
import { projects } from './Data';
import ProjectsDetail from './ProjectsDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex justify-center  items-center mt-0">
      <div className=" bg-opacity-30 backdrop-blur-md p-2 rounded-2xl shadow-lg w-full max-w-8xl">
        {/* Scrollable container */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[550px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        >
          {projects.map((project) => (
            <div
              key={project.id}bg-white bg-opacit
              className="y-80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg  transition-transform duration-300 transform hover:scale-105 cursor-pointer m-4 w-2xs"
              onClick={() => handleCardClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover rounded-md"
              />
              <h2 className="mt-2 text-center text-lg font-semibold">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedProject && (
        <ProjectsDetail project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Projects;