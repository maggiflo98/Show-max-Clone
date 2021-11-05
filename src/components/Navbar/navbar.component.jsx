import React from 'react'
import{FaAngleUp} from 'react-icons/fa';

import "./navbar.styles.css";

function navbar() {
    return (
        <div className="nav">
           <img className ="nav_logo"src="https://store-images.s-microsoft.com/image/apps.44398.13709762671789889.2eaeea46-c3eb-4689-aea0-11c88f63b917.37e6718f-1f1b-4e7f-b306-54ed7a0016fb" alt="showmax logo"/> 
           <div className ="nav_profile" >
               <p>p</p>
               
           </div>
           <FaAngleUp className="icon"style={{color:"white",alignItems:"center",height:"50vh",margin:"auto",position:"absolute",marginLeft:"41.7rem"}} />
           
        </div>
    )
}

export default navbar;

