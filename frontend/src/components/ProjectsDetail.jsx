import React, { useState, useEffect } from 'react';

const ProjectsDetail = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Modal açıldığında animasyonu başlat
    setIsVisible(true);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      // Kapanma animasyonu
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 500); // Animasyon süresiyle eşleşmeli
    }
  };

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick} // Modal dışına tıklama olayı
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-11/12 max-w-6xl p-6 flex transform transition-all duration-500 ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : '-translate-y-10 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()} // Modal içeriğine tıklamayı durdur
      >
        {/* Sol: Resim */}
        <div className="w-7/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-md"
          />
        </div>
        {/* Sağ: Detaylar */}
        <div className="w-3/10 pl-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
            <div>
           
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center mt-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Projeyi Görüntüle
            </a>
          </div>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                onClose();
              }, 500); // Animasyon süresiyle eşleşmeli
            }}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;