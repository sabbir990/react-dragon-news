import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='font-poppins max-w-6xl mx-auto'>
        <Outlet />
    </div>
  )
}
