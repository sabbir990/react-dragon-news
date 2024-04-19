import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function LeftSideContent() {
  const [navigations, setNavigations] = useState([]);

  useEffect(() => {
    const fetchNavigations = async () => {
      const response = await fetch('categories.json');
      const data = await response.json();
      setNavigations(data)
    }

    fetchNavigations();
  }, [])
  return (
    <div className='p-2'>
      <h2 className="text-2xl font-bold mb-4">All Categories</h2>
      <div>
        <div className='bg-gray-300 border-2 border-black text-center py-2 rounded-lg'>
          <h2 className='text-xl font-bold'>National News</h2>
        </div>
        <div>
          {
            navigations.map((navigation) => {
              return (
                <div key={navigation.id} className='py-2 text-center'>
                  <Link className='font-bold' to={navigation.id}>{navigation.name}</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
