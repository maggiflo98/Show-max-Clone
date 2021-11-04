import React,{useState,useEffect} from 'react'
import { dataArray } from './data';
import axios from '../../axios';
import "./row.css";


function Kenyan() {
    const[data ,setData]=React.useState(dataArray);
    
    return (
        <div className="row">
            <h1>Trending in Kenya</h1>
            <div className="row_posters">
            {data && data.map(data=>(
                <img className="row_poster"src={data.imageUrl}/>
            ))}
           </div>
        </div>
            )
}

export default Kenyan;
