import axios from "axios";
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import './detail.css'

const Detail =()=>{
    const {id} = useParams();
    const [character, setCharacter]= useState({});
   
       useEffect(() => {
           axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           });
           
           return setCharacter({});
        }, [id]);

    return(
    <div id="detailCard">

<div id="content">
   <h2>Name: {character.name}</h2>
         <h2>Status: {character.status}</h2>
         <h2>Species: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>
         <h2>Origin: {character.origin?.name}</h2>
 </div>
   <div id="img">
    <img src={character.image} alt="" />
   </div>
</div>
     
    )
}

export default Detail;