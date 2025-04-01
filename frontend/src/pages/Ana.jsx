import React from 'react';
import kafa from '../assets/kafa.jpg'; 

export default function Ana() {
  return (
    <div className="flex items-center justify-center bg-opacity-30 backdrop-blur-md p-1 rounded-2xl shadow-lg w-full max-w-390 mx-auto mt-5">
      <div className="container mx-auto px-1 lg:px-20 flex flex-col lg:flex-row items-center">
        
        {/* Sol: Metin Alanı */}
        <div className="lg:w-1/2 text-center lg:text-left max-w-6xl ">
          <div className="mb-4">
            <span className="inline-block bg-green-500 text-black px-4 py-2 rounded-full text-sm font-semibold mt-5 ml-1">
              ✌️ Merhaba! Ben Volkan
            </span>
            
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-green-400">Full Stack Developer.</span> Startup Oluşumlara Kendi Ürünlerini <span className="text-green-400">Yayınlamada </span> ve <span className="text-green-400">Büyütmede </span> yardımcı oluyorum
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed pl-4 mb-4">
            4+ yıllık profesyonel deneyimimle çeşitli programlama araçları kullanarak müşterilere kaliteli sonuçlar sunuyorum. Frontend, backend, yazılım testi ve web3 geliştirme konularında uzman bilgiye sahibim.
          </p>
        </div>

        {/* Sağ: Görsel Alanı */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex lg:justify-end">
          <img
            src={kafa} // Görsel yolunu buraya ekleyin
            alt="Frontend Engineer Illustration"
            className="w-full max-w-xs object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}