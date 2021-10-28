import axios from 'axios';
import React, { useState,useEffect } from 'react'

function Row({title,fetchUrl}) {
    const[movies,setMovies]=useState([]);
    useEffect(() => {

        // if[] run once when the row loads,and dont run again
        async function fetchData(){
            const request  = await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.table(request.data.results);
            return request;
            
    
        }
        fetchData();
    
    },[fetchUrl]);

    return (
        <div className="title">
            <h1>{title}</h1>
            
        </div>
    )
}

export default Row;
