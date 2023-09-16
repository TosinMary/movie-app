import {useEffect, useState} from 'react';
import Card from './Card';
import fetchMovies from '../fetchMovies';

function Cardapi() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovies();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            {movies.length === 0 ? (
                <p className='Not found'>Not Found</p>
            ) : (
                movies.map((res, pos) => {
                    return <Card info={res} key={pos} />;
                })
            )}
        </div>
    );
}

export default Cardapi;