import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import inicio from '../assets/icons/vuesax-bulk-setting-1.svg'
import modulo from "../assets/icons/vuesax-bulk-setting-4.svg";
import calendar from "../assets/icons/vuesax-bold-calendar-1.svg";
import frame from "../assets/icons/vuesax-bold-frame-3.svg";
import edit from "../assets/icons/vuesax-bulk-edit.svg";
import document from "../assets/icons/vuesax-bold-document-text-3.svg";
import ajustes from "../assets/icons/setting-4.svg";
import clipboard from "../assets/icons/vuesax-bulk-clipboard-tick.svg";

const Sidebar = () => {
const  [showMenu, SetShowMenu] = useState(false)

  return (
    <div className="h-[100vh]  flex flex-col   border-l-gray-50 border-2">
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
      <p className="mx-5  p-1 text-gray-500">Menu</p>
      <div className="flex flex-col h-screen justify-between">
        <div>
          <ul className="px-6 ">
            <li className=" pb-1 text-gray-500 flex ">
              <img src={inicio} />
              <Link to="/" className="pl-3 ">
                Inicio
              </Link>
            </li>
            <li
              className=" pb-1 text-gray-500 pt-1 flex transition-colors cursor-pointer"
              onClick={() => SetShowMenu(!showMenu)}
            >
              <img src={modulo} className="pr-3 " />
              Modulos PSVE
            </li>
            <ul
              className={`${
                showMenu ? "h-[140px] " : "h-0"
              }  overflow-y-hidden transition-all pl-4`}
            >
              <li className="text-sm text-gray-500 pl-10 p-1">
                <Link to="/preparacion">- Preparacion</Link>
              </li>
              <li className="text-sm text-gray-500 pl-10 p-1">
                - Planificacion
              </li>
              <li className="text-sm text-gray-500 pl-10 p-1">
                - Implementacion
              </li>
              <li className="text-sm text-gray-500 pl-10 p-1">- Seguimiento</li>
              <li className="text-sm text-gray-500 pl-10 p-1">- Mejora</li>
            </ul>
            <li className=" pb-1 text-gray-500 flex">
              <img src={clipboard} className=" pr-3" />
              Informes
            </li>
            <li className=" pb-1 text-gray-500 flex">
              <img src={calendar} className=" pr-3" />
              Calendario
            </li>
            <li className=" pb-1 text-gray-500 flex">
              <img src={frame} className=" pr-3" />
              Usuarios
            </li>
            <li className="pb-1  text-gray-500 flex">
              <img src={edit} className=" pr-3" />
              Mensajes
            </li>
            <li className="pb-1 text-gray-500 flex">
              <img src={document} className=" pr-3" />
              Documentos
            </li>
            <li className=" pb-1  text-gray-500 flex">
              <img src={ajustes} className=" pr-3" />
              Ajustes
            </li>
          </ul>
        </div>
        <div className=" place-items-center p-6 ">
          <button className="bg-red-800 p-2 text-gray-100 rounded w-full a  text-left">
            Salir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar