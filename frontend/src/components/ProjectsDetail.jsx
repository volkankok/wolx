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
        className={`bg-white rounded-lg shadow-lg w-11/12 max-w-4xl p-6 flex transform transition-all duration-500 ${
          isVisible
            ? 'translate-y-0 scale-100 opacity-100'
            : '-translate-y-10 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()} // Modal içeriğine tıklamayı durdur
      >
        {/* Sol: Resim */}
        <div className="w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-md"
          />
        </div>
        {/* Sağ: Detaylar */}
        <div className="w-1/2 pl-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
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