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
    return (
        <header className="banner">
            {/* 1st column description */}
            <div className="banner-contents">

<h1>hi</h1>
            </div>
            
            <div className="image" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundPosition:"center center"}}/>

            
        </header>
    )
}

export default Banner;
