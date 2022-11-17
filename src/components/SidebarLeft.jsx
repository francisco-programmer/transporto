import React, { useState} from 'react'
import Ayuda from './Ayuda'
import Notificacion from './Notificacion'
import noti from "../assets/icons/vuesax-bold-briefcase.svg";
import emoji from "../assets/icons/vuesax-bold-emoji-happy-2.svg";
import calendar from "../assets/icons/vuesax-bold-calendar-1.svg";
import microfono from "../assets/icons/vuesax-bold-microphone-1.svg";
import book from "../assets/icons/vuesax-bold-book-4.svg";
import doc from "../assets/icons/vuesax-bold-document-text-4.svg";
import frame from "../assets/icons/vuesax-bold-frame-3.svg";
const SidebarLeft = () => {
 
 
   
  
const [open, setOpen] = useState(true)




  return (
    <div className={`${open ? "w-72" : "w-20"} h-[100vh] duration-300 `}>
      <div className="flex gap-6 ">
        <p className="text-6xl py-10">LOGO</p>
        <img src={noti} className=" " />
      </div>
      <div className="flex place-items-center gap-2 mb-2">
        <img
          src={emoji}
          onClick={() => setOpen(!open)}
          className={`bg-blue-100  cursor-pointer rounded-full duration-300 ${
            open ? "p-2" : "p-4"
          } `}
        />
        <p className="text-blue-500 font-semibold duration-300">
          {open ? "Ayuda" : ""}
        </p>
      </div>
      {open ? (
        <div className="justify-between">
          <div className="rounded-lg mr-6 border-2 ">
            <div className="bg-blue-50 rounded-lg m-2">
              <p className="p-2 text-blue-600 text-xs">
                Seleccione el tema de su interes para generar la ayuda
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg m-2 flex p-2">
              <img src={calendar} className="p-2 mr-2 bg-blue-100 rounded-full" />
              <div>
                <p className=" text-blue-600 font-bold text-sm">Capacitación</p>
                <p className="text-xs text-blue-600">
                  Lecciones de capacitacion
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg m-2 flex p-2">
              <img src={book} className="p-2 mr-2 bg-blue-100 rounded-full" />
              <div>
                <p className=" text-blue-600 font-bold text-sm">Manual</p>
                <p className="text-xs text-blue-600">
                  Guia de todos los modulos
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg m-2 flex p-2">
              <img src={doc} className="p-2 mr-2 bg-blue-100 rounded-full" />
              <div>
                <p className=" text-blue-600 font-bold text-sm">
                  Documentación
                </p>
                <p className="text-xs text-blue-600">
                  Normas vigentes
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg m-2 flex p-2">
              <img src={frame} className="p-2 mr-2 bg-blue-100 rounded-full" />
              <div>
                <p className=" text-blue-600 font-bold text-sm">Usuarios</p>
                <p className="text-xs text-blue-600">
                  Edicion y creación de usuarios
                </p>
              </div>
            </div>
            <div className="p-4  flex">
              <input
                type="text"
                placeholder="Escriba aqui..."
                className="border-2 p-2 rounded-lg w-40"
              />
              <img
                src={microfono}
                className="bg-blue-600 p-2 rounded-lg mx-2"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg  border-2 h-96 mr-2  place-items-center mb-4">
          <p className="text-xs mt-36 text-gray-400 duration-300">
            capacitacion
          </p>
        </div>
      )}
    </div>
  );
 
}

export default SidebarLeft