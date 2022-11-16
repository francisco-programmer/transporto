import React from 'react'
import { Outlet, Route, Routes} from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import SidebarLeft from '../components/SidebarLeft'
import Inicio from '../pages/Inicio'
import Preparacion from '../pages/Preparacion'


const LayoutAdmin = () => {
  return (
    <div className="grid grid-cols-9 top-0 gap-4 ">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-5 h-[100vh] overflow-y-scroll">
        <Routes>
          <Route path="preparacion" element={<Preparacion />} />
          <Route path="inicio" element={<Inicio />} />
        </Routes>
      </div>
      <div className="col-span-2">
        <SidebarLeft />
        
      </div>
    </div>
  );
}

export default LayoutAdmin