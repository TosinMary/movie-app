import React from 'react'
import { useEffect, useState } from 'react';
import Cardapi from './Cardapi'
import Card from './Card';


let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=3656ac2d333ee897f67c9fc0d8f8b39d ";

function Details(detail) {
    const [movieDataId, setMovieDataId] = useState([]);
    const [url_sets, setUrls] = useState(url);

    useEffect(()=>{
        fetch(url_sets).then(res=>res.json()).then(data=>{
            setMovieDataId(data.results.id)
        });
    },[url_sets])

  return (
    <div>
        {
        movieDataId === detail.info &
        movieDataId.map((res,pos)=> {
            return (
            <Card info={res} key={pos}/>
            
            )

        })
        }
       
    </div>
  )
}

export default Details
