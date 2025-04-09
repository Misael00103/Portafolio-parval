import React from 'react';

function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 mb-8">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img 
            src="/parval-logo.png" 
            alt="Parval Logo" 
            className="h-24 md:h-32 mb-2"
          />
          <div className="text-center">
            <h2 className="text-gray-700 text-xl font-semibold">PUESTO DE BOLSA</h2>
            <p className="text-gray-600">Afiliado a la BVRD</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 