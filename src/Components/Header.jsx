import React from 'react'
import logo from '../assets/logo.png'
import moment from 'moment'

export default function Header() {
  return (
    <div className='flex flex-col items-center'>
        <img src={logo} alt="logo" />
        <p className='text-gray-500'>Journalism Without Fear or Favour</p>
        <p className='font-bold'>{moment().format("LLLL")}</p>
    </div>
  )
}
