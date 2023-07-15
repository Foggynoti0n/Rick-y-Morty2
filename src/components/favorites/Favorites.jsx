import { connect } from "react-redux"
import Card from "../card/Card"
import React, { useState } from "react";
import { filterCards, removeFav, orderCards } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import './favorites.css'

function Favorites({ myFavorites, onClose, removeFav}){
    const dispatch= useDispatch()

    function closeFav(id){
        onClose(id)
        removeFav(id)
    }

    function handleOrder(event){
        dispatch(orderCards(event.target.value));
        setAux(true)
    }

    function handleFilter(event){
        dispatch(filterCards(event.target.value));
    }

    const [aux, setAux]= useState(false);

    return(
<div id="favs">
    <div id="opt">
<select name="" id="" onChange={handleOrder } className="favBtn">
<option value="A">Ascendente</option>
<option value="D">Descendente</option>
</select>

<select name="" id="" onChange={handleFilter} className="favBtn" >
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">Unknown</option>
</select>
    </div>
<div className="cards">
{
    myFavorites.map(character=> 
        <Card character= {character} key= {character.id} onClose={()=> closeFav(character.id)}  /> )
 }
</div>
</div>
             
    )
}

function mapStateToProps(state) {
 return {myFavorites: state.myFavorites}
}

function mapDispatchFav(dispatch) {
   return{ removeFav:(id)=> dispatch(removeFav(id))
}}

export default connect(mapStateToProps, mapDispatchFav)(Favorites)

