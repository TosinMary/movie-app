import React from 'react';
import {Link} from 'react-router-dom';

function truncateText(text, maxLength) {
    const words = text.split(' ');
    if (words.length > maxLength) {
        return words.slice(0, maxLength).join(' ') + '...';
    } else {
        return text;
    }
}

function Card(movies) {
    let img_path = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            <div data-testId='movie-card'  className='shadow-2xl flex flex-col my-2 hover:scale-100 duration-300 bg-white  py-[3rem] px-4 card-item'>
                <Link to={`/Movie/${movies.info.id}`}>
                    <div className='p-4'>
                        <img
                            src={img_path + movies.info.poster_path}
                            alt='movie'
                            className='h-[400px] w-[400px]  '
                            data-testId='movie-poster'
                        ></img>
                    </div>

                    <div className='p-4'>
                        <h1 className='text-gray-400' data-testId='movie-release-date'>
                            Release date: {movies.info.release_date}
                        </h1>
                        <h2 className='font-bold text-[1rem] py-2' data-testId='movie-title'>
                            {movies.info.title}
                        </h2>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Card