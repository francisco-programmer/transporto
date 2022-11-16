import React from 'react'
import Ayuda from './Ayuda'
import Notificacion from './Notificacion'

const SidebarLeft = () => {
  return (
    <div className=' h-screen '>
        <Notificacion />
        <Ayuda />
    </div>
  )
}

export default SidebarLeft