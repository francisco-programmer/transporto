import React from 'react'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="h-[100vh]  flex flex-col  justify-around border-l-gray-50 border-2">
      <div className="my-4">
        <h1 className="text-center font-bold text-4xl text-red-600">
          Transporto
        </h1>
      </div>

      <div className="pr-6">
        <input
          type="text"
          placeholder="Buscar"
          className="p-2 mx-6 rounded border-gray border-2 w-42"
        />
      </div>
      <p className="mx-6   text-gray-500">Menu</p>
      <div>
        <ul className="px-6 mt-0">
          <li className="mb-3 text-gray-500">
            <Link to="/">Inicio</Link>
          </li>
          <li className="mb-3 text-gray-500">
            <Link to="/preparacion">Modulos PSVE</Link>
          </li>
          <li className="mb-3 text-gray-500">Informes</li>
          <li className="mb-3 text-gray-500">Calendario</li>
          <li className="mb-3 text-gray-500">Usuarios</li>
          <li className="mb-3 text-gray-500">Mensajes</li>
          <li className="mb-3 text-gray-500">Documentos</li>
          <li className="mb-3 text-gray-500">Ajustes</li>
        </ul>
      </div>
      <div className="place-items-center p-6 ">
        <button className="bg-red-800 p-2 text-gray-100 rounded w-full text-left">
          Salir
        </button>
      </div>
    </div>
  );
}

export default Sidebar