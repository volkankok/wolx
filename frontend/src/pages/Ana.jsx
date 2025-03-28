import React from 'react';
import kafa from '../assets/kafa.jpg'; // Görseli buraya ekleyin

export default function Ana() {
  return (
    <div className="bg-opacity-30 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-6xl">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Sol: Metin Alanı */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-4">
            <span className="inline-block bg-green-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
              ✌️ Hi There! I'm Onyedika
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            A <span className="text-green-400">Frontend Engineer</span>. I Help Startups <span className="text-green-400">Launch</span> And <span className="text-green-400">Grow</span> Their Products
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Over 4yrs+ of professional experience working with several programming tools to deliver quality results to clients. I have expert knowledge in frontend engineering, software testing, and web3 development.
          </p>
        </div>

        {/* Sağ: Görsel Alanı */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={kafa} // Görsel yolunu buraya ekleyin
            alt="Frontend Engineer Illustration"
            className="w-full max-w-sm lg:max-w-md object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}