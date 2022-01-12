import {useState,useContext} from "react"



function SearchBox() {
        function onInputChange(event){
           var keyword = event.target.value
           if(keyword.trim()){
            fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`)
            .then(response => response.json())
            .then(shows => {
              console.log(shows);
              
            })
           }
      
      }
    return(
<input type="searchbox" className="Hello" onChange={ onInputChange}/>
    )
}

export default SearchBox;