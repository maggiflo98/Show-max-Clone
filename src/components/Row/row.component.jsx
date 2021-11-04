import React, { useState,useEffect } from 'react'
import axios from "../../axios";
import "./row.css";
import Kenyan from './kenyan.component';



const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl}) {
    const[movies,setMovies]=useState([]);
    useEffect(() => {

        // if[] run once when the row loads,and dont run again
        async function fetchData(){
            const request  = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.table(request.data.results);
            return request;
            
    
        }
        fetchData();
    
    },[fetchUrl]);

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row_posters">
                {movies && movies.map(movie=>(
                    <img className="row_poster"  key={movie.id} src={`${base_url}${movie?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))}
                  
               
            </div>
            
        </div>
    )
}

export default Row;
