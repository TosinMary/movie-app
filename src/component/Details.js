import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import fetchMovies from '../fetchMovies';

function Details() {
    let img_path = 'https://image.tmdb.org/t/p/w500';
    const {id} = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const movies = await fetchMovies();
            const movie = movies.find((movie) => movie.id.toString() === id);
            setSelectedMovie(movie);
        };

        fetchMovieDetails();
    }, [id]);

    if (!selectedMovie) {
        return <p>Loading...</p>;
    }
    console.log(selectedMovie, 'selectedMovie');

    return (
        <div>
            <div className='shadow-2xl flex flex-col justify-center my-2 hover:scale-100 duration-300 bg-white  py-[3rem] px-4 card-item'></div>
            <div className='p-4'>
                        <img
                            src={img_path+selectedMovie.poster_path}
                            alt=''
                            className='h-[400px] w-[400px]  '
                        ></img>
                    </div>

                    <div className='p-4'>
                        <h1 className='text-gray-400' data-testId='movie-release-date'>
                            Release date: {selectedMovie.release_date}
                        </h1>
                        <h2 className='font-bold text-[1rem] py-2' data-testId='movie-title'>
                            {selectedMovie.title}
                        </h2>

                        <div className='flex py-2'>
                            <p className='mr-12 text-yellow-700'data-testId='movie-runtime' >
                                Vote average: {selectedMovie.vote_average}
                            </p>
                            <p>Popularity: {selectedMovie.popularity}% </p>
                        </div>
                        <p className='text-gray-400 py-3 leading-8 overview w-[500px]'data-testId='movie-overview'>
                           {selectedMovie.overview}
                        </p>
                    </div>
        </div>
    );
}

export default Details;