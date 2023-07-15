import './SearchBar.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const {onSearch}= props;
   const [id, setId]= useState("");

   const handleChange=(event)=>{
      setId(event.target.value);
   }

   return (
      <div className='SearchBar'>
          <input id='inputSearch' type='search' onChange={handleChange} />
         <button onClick={()=>{onSearch(id)}}>Agregar</button> 
      </div>

   );
}
