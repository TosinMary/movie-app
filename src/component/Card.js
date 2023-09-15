import React from 'react'

function Card(movie) {
    console.log(movie.info);
    let img_path ="https://image.tmdb.org/t/p/w500";
    

  return (
    <div className='bg-white w-full py-[3rem] px-4 '>
      <div className='mx-auto max-w-[1120px] grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='w-full shadow-2xl flex flex-col px-2 my-2 hover:scale-100 duration-300'>
          <div >
          <img src={img_path+movie.info.poster_path} alt='' className='h-[400px] w-[400px]  '></img>
          </div>
      
        <div className='pt-4'>
        <h1 className='text-gray-400'>{movie.info.release_date} </h1>
        <h2 className='font-bold text-[1rem] py-2'>{movie.info.title} </h2>
        <h2 className='font-bold text-[1rem] py-2'>{movie.info.id} </h2>
        <div className='flex py-2'>
            <p className='mr-12 text-yellow-700'>{movie.info.vote_average} </p>
            <p>{movie.info.popularity} </p>
        </div>
        <p className='text-gray-400 py-3 leading-8'>{movie.info.overview} </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Card
