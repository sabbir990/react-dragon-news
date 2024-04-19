import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import RightSideContent from './RightSideContent'

export default function SingleNews() {
  return (
    <div>
        <Header />
        <Navbar />
        <div className='grid grid-cols-4 space-x-4'>
            <div className='col-span-3'>
    hello world
            </div>
            <div className='border-gray-500 col-span-1'>
                <RightSideContent />
            </div>
        </div>
    </div>
  )
}
