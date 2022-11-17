
import { useState } from 'react'
import { Outlet, Route, Routes} from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import SidebarLeft from '../components/SidebarLeft'
import Inicio from '../pages/Inicio'
import Preparacion from '../pages/Preparacion'
 


const LayoutAdmin = () => {


  

  return (
    <div className="flex top-0 gap-4 overflow-hidden ">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="h-[100vh] overflow-x-hidden overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="preparacion" element={<Preparacion />} />
        </Routes>
      </div>
      <div className=" h-[100vh]">
        <SidebarLeft open={open} />
      </div>
    </div>
  );
}

export default LayoutAdmin