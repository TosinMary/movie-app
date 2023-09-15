import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Details from './Details';



let API_key ="&api_key=3656ac2d333ee897f67c9fc0d8f8b39d";
  let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=3656ac2d333ee897f67c9fc0d8f8b39d ";

function Cardapi() {
    const [movieData, setMovieData] = useState([]);
    const [url_set, setUrl] = useState(url);

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setMovieData(data.results)
        });
    },[url_set])

  return (
   
       <div className="container">
      
        <Link to={`Details`}>
{
 (movieData.length===0)?<p className='Not found'>Not Found</p>:movieData.map((res, pos)=>{
    return (
        <Card info={res} key={pos}  />

       
        
    )
})
}
        </Link>
     
    
    </div>
   
  )
}

export default Cardapi
