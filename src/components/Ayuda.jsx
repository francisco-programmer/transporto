import React from 'react'
import emoji from '../assets/icons/vuesax-bold-emoji-happy-2.svg'
import calendar from "../assets/icons/vuesax-bold-calendar-1.svg";
const Ayuda = () => {
  return (
    <div>
      <div className="flex place-items-center gap-2 mb-2">
        <img src={emoji} className="bg-blue-100 rounded-full p-2" />
        <p className="text-blue-500 font-semibold">Ayuda</p>
      </div>
      <div className="justify-between">
        <div className="rounded-lg mr-6 border-2 ">
          <div className="bg-blue-100 rounded-lg m-2">
            <p className="p-2 text-blue-600 text-sm">
              Seleccione el tema de su interes para generar la ayuda
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg m-2 flex">
            <img src={calendar} className="p-2" />
            <div>
              <p className=" text-blue-600 font-bold text-sm">Capacitacion</p>
              <p className="text-sm text-blue-600">Lecciones de capacitacion</p>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg m-2 flex">
            <img src={calendar} className="p-2" />
            <div>
              <p className=" text-blue-600 font-bold text-sm">Capacitacion</p>
              <p className="text-sm text-blue-600">Lecciones de capacitacion</p>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg m-2 flex">
            <img src={calendar} className="p-2" />
            <div>
              <p className=" text-blue-600 font-bold text-sm">Capacitacion</p>
              <p className="text-sm text-blue-600">Lecciones de capacitacion</p>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg m-2 flex">
            <img src={calendar} className="p-2" />
            <div>
              <p className=" text-blue-600 font-bold text-sm">Capacitacion</p>
              <p className="text-sm text-blue-600">Lecciones de capacitacion</p>
            </div>
            
          </div>
          <div className='p-4 mt-20'>
            <input
              type="text"
              placeholder="Escriba aqui..."
              className="border-2 p-2 rounded-lg w-40"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ayuda