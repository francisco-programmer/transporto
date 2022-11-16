import React from 'react'
import { pasos } from '../components/PasosPreparacion';
import  img  from "../assets/icons/vuesax-bold-document-text-1.svg";

const Preparacion = () => {
const progressBar = 32;

   
  return (
    <div className=" overflow-auto">
      <div className="my-6 ">
        <p className="font-bold">Bienvenido, Carlos Garcia</p>
        <p className="text-sm text-gray-400">Lun, 21 Nov 2023</p>
      </div>
      <div className='pr-8'>
        <div className="h-3 w-full bg-gray-300 rounded">
          <div
            style={{ width: `${progressBar}%` }}
            className="h-3 bg-green-700 rounded"
          ></div>
          <p className="text-sm text-gray-400">Realizado 32%</p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8 gap-4 pr-8">
        {pasos.map((item, index) => {
          return (
            <div key={index} className="border-2 rounded-lg p-4">
              <div className="py-4 flex place-items-center gap-1">
                <img src={img} className="bg-gray-200 p-2 rounded-full" />
                <p className="text-green-600">{item.estado}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">{item.numeroPaso}</p>
                <p className="py-6">{item.informacion}</p>
                <p className="text-green-600 ">{item.proceso}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Preparacion