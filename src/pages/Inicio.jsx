import React from 'react'
import card from '../assets/icons/vuesax-bulk-card-receive.svg'
import flecha from "../assets/icons/vuesax-bulk-arrow-circle-left.svg";
import edit from "../assets/icons/vuesax-bulk-edit.svg";
import list from "../assets/icons/vuesax-bulk-clipboard-tick.svg"
const Inicio = () => {
  return (
    <div className="">
      <div className="my-6  w-screen">
        <p className="font-bold">Bienvenido, Carlos Garcia</p>
        <p className="text-sm text-gray-400">Lun, 21 Nov 2023</p>
      </div>
      <div className="flex justify-between mr-4 pb-9">
        <div>
          <p className="text-3xl">Actividades</p>
        </div>
        <div>
          <p className="text-xl">Semana</p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-blue-600 w-60 rounded ">
          <div>
            {" "}
            <img src={card} className="p-4" />
          </div>
          <div>
            <p className="pl-4 pb-2 font-bold text-gray-50 text-lg">Informe</p>
          </div>
          <div>
            <p className="pl-4 pb-2 text-3xl text-gray-50 font-bold">
              01/10/22
            </p>
          </div>
          <div className="">
            <img src={flecha} className="rotate-180 mx-auto pb-5 mb-5 " />
          </div>
        </div>
        <div className=" w-60  flex flex-col justify-around">
          <div className="flex">
            <div className="mt-8 pr-4">
              <img src={edit} className="p-2 border-2 rounded-full" />
            </div>

            <div className="flex flex-col ">
              <p className='text-gray-500 '>Actividades </p>
              <p className='text-gray-500 '>Finalizadas</p>
              <div className="flex place-items-center">
                <p className="text-4xl font-bold pr-6">18 </p>
                <p className="text-sm bg-green-200 text-green-600 rounded-xl h-5 px-2">
                  10%
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mt-8 pr-4">
              <img src={edit} className="p-2 border-2 rounded-full" />
            </div>

            <div className="flex flex-col">
              <p className='text-gray-500'>Actividades </p>
              <p className='text-gray-500'>Finalizadas</p>
              <div className="flex place-items-center">
                <p className="text-3xl font-bold pr-6">18 </p>
                <p className="text-sm bg-green-200 text-green-600 rounded-xl h-5 px-2">
                  10%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-60  flex flex-col justify-around">
          <div className="flex">
            <div className="mt-8 pr-4">
              <img src={list} className="p-2 border-2 rounded-full" />
            </div>

            <div className="flex flex-col justify-between">
              <p className='text-gray-500'>Accidentes leves</p>
              <p></p>
              <div className="flex place-items-center">
                <p className="text-4xl font-bold pr-6">432</p>
                <p className="text-sm bg-green-200 text-green-600 rounded-xl h-5 px-2">
                  10%
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mt-8 pr-4 place-content-center">
              <img src={list} className="p-2 border-2 rounded-full" />
            </div>

            <div className="flex flex-col justify-between">
              <p className='text-gray-500'>Completed Project </p>
              
              <div className="flex place-items-center">
                <p className="text-4xl font-bold pr-6">432 </p>
                <p className="text-sm bg-green-200 text-green-600 rounded-xl h-5 px-2">
                  10%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio