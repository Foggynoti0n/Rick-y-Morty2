import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions/actions';
import './Card.css'

function Card({
   character,
   onClose,
   myFavorites,
   removeFav,
   addFav,
 }) {
   
   const { id, name, gender, species, origin, image, status } = character;

const [isFav, setIsFav]= useState(false)

function handleFavorite() {
   if(isFav){
       setIsFav(false);
      removeFav(id);
   };
   if(!isFav) {
      setIsFav(true);
      addFav(character);
   }}

useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

   return (
      <div className='card'>

<div className='box'>
{
   isFav ? (
      <button className='fav' onClick={handleFavorite}>❤️</button>
   ) : (
      <button className='fav' onClick={handleFavorite}>🤍</button>
   )
}
<button id='closeB' onClick={()=>{onClose(id)}}>X</button>
        <Link id='link' to={`/detail/${id}`}> 
        <h2>Name: {name}</h2>
        </Link>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin?.name}</h2>
</div>
<div className='image'>
       <img src={image} alt='' /> 
       </div>
      </div>
   );
}

function mapStateToProps(state) {
  return{ myFavorites: state.myFavorites}
 }
function mapDispatchToProps(dispatch) {
   return{
      addFav:(char)=>dispatch(addFav(char)),
      removeFav: (id)=> dispatch(removeFav(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps )(Card);