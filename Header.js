import "./Header.css"
import SearchBox from "../Searchbox";
import React from 'react'

const Header = () => {
    return (
        <div className="header">
        <div className='ABC'>
        <h1>TVmaze</h1>
         <h3>Search your favourite shows</h3>
        <input type="radio" name="Category" value="Actor" required/>Actor 

        <input type="radio" name="Category" value="Shows" required/>Shows <br /><br />

        <SearchBox/>
        </div>
        </div>
        
    )
  
    
};

export default Header;
