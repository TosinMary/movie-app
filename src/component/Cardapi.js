import {useEffect, useState} from 'react';
import Card from './Card';
import fetchMovies from '../fetchMovies';

function Cardapi() {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovies();
                setMovieData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            {movieData.length === 0 ? (
                <p className='Not found'>Not Found</p>
            ) : (
                movieData.map((res, pos) => {
                    return <Card info={res} key={pos} />;
                })
            )}
        </div>
    );
}

export default Cardapi;