import React,{useState,useEffect}from 'react';
import axios from "../../axios";
import requests from '../../request';
import "./banner.styles.css";

// menu items
// description
// random movie
function Banner() {
    const[movie,setMovie]=useState([]);

    useEffect(() => {
       async function fetchData(){
           const request=await axios.get(requests.fetchTrending)
           setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);

           return request;
           console.log(movie);
       }
       fetchData();
    }, [])
     // truncate
     function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "...":str;
    }
    return (
        <header className="banner">
            {/* 1st column description */}
            <div className="banner-contents">
                <h1 className="banner_title">
                    {movie?.title||movie?.name||movie?.original_name}
                </h1>
                {/* description */}
                <div className="banner_description">
              {truncate  (movie?.overview,150)}
              </div>
              
<div className="banner_buttons">
    <button className="banner_button">play</button>
    <button className="banner_button">my list</button>
    </div>
            </div>
            
            <div className="image" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundPosition:"center center",width:"100%",height:"100%",backgroundSize:"cover"}}/>
         

        </header>
    )
}

export default Banner;
