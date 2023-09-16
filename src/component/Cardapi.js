import React from 'react';
import {useEffect, useState} from 'react';
import Card from './Card';
import fetchMovies from '../fetchMovies';
import { FadeLoader } from "react-spinners";


function Cardapi() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovies();
                setMovies(data);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                  }, 1000)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            {loading ? (
        <FadeLoader color={"#D0021B"} loading={loading} size={150} />
      ) : (
                movies.map((res, pos) => {
                    return <Card info={res} key={pos} />;
                })
            )}
        </div>
    );
}

export default Cardapi;