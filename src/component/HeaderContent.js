import React from 'react'

function HeaderContent() {
  return (
    <div className='absolute   top-[250px] w-[300px] lg:w-[400px] lg:top-[300px] max-w-[1120px] mx-auto'> 
        <h1 className='font-bold text-[2.5rem]'>JOHN WICK 3 :</h1>
        <h2 className='font-bold text-[2rem]'>Parabellrom</h2>
        <div className='flex'>
            <p className='mr-12 text-yellow-700'>80/100</p>
            <p>rating</p>
        </div>
        <p>the rating of the stuff is highlu supperceeding the best movies ryt now at the moment</p>
        <button className='w-[50%] p-2 rounded-full my-2 text-white bg-red-600'>Watch now</button>
      
    </div>
  )
}

export default HeaderContent
