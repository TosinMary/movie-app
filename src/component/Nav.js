import React from 'react'
import { BiMoviePlay, BiSearchAlt2, BiMenu} from 'react-icons/bi'
import HeaderContent from './HeaderContent'

function Nav() {
  return (
    <div className='navbar'>
    <div className='flex justify-between items-center h-24 max-w-[1120px] mx-auto px-4 text-white' >
        <div className='flex justify-center items-center'>
        <div className='w-[50px] h-[50px] bg-red-900 rounded-full flex justify-center items-center my-4 '>
        <div className='w-[30px] h-[30px] bg-red-600 rounded-full flex justify-center items-center my-4  '>
        <BiMoviePlay className='w-[15px] h-[15px] text-white' />
        </div>
        </div>
        <h1 className='mx-4 text-xl text-white'>MovieBox </h1>
        </div>
            <div className='flex justify-between items-center px-4 w-[500px] mx-auto border border-spacing-4 rounded-lg text-white'>
            <input type='text' className=' px-4  w-full outline-none bg-transparent ' placeholder='What do you want to watch?'></input>
            <BiSearchAlt2 className='w-18 h-8' />
            </div>
            <div className='hidden md:flex justify-between items-center mx-8 '>
            <h4>Sign</h4>
            <div className=' w-[30px] h-[30px] bg-red-600 rounded-full flex justify-center items-center mx-2'>
            < BiMenu className='w-[25px] h-[25px]'/>
            </div>
            </div>
            <HeaderContent />
                
          
    </div>
    </div>
  )
}

export default Nav
