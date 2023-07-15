import './App.css';
import React from 'react';
import axios from "axios";
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import { useLocation, Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Form from './components/forms/Form';
import Favorites from '../src/components/favorites/Favorites';
import Error from '../src/components/error/Error'

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
 
   async function login(userData) {

      try {

         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
       const {data}= await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
         
         
      } catch (error) {
         console.log(error);
      }

   }



    useEffect(() => {
      !access && navigate("/");
    }, [access]);
  
    function logout() {
      setAccess(false);
      navigate("/");
    }
 
const [characters, setCharacters]= useState([]);
const location= useLocation()

async function onSearch(id){
try {
const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
 
} catch (error) {
   console.log(error);
}

}

function randomHandler(){
   let haveIt=[];
   let random = (Math.random()*826).toFixed();
   random= Number(random);

   if (!haveIt.includes(random)) {
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response)=> response.json())
      .then ((data)=>{
         if (data.name) {
            setCharacters((oldChars)=>[...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID')
         }
      })
   } else {
      console.log('Ya agregaste todos los personajes');
      return false;
   }
}

function onClose(id){
  let deleted= characters.filter((ch)=> ch.id !== Number(id));
  setCharacters(deleted);
 }

   return (
     <>
     {location.pathname !== '/' &&   <Nav onSearch={onSearch} random={randomHandler}/>}
    
      <Routes>
         <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>   
         <Route path='/' element={<Form/>}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail characters={characters}/>}/>
         <Route path="*" element={<Error/>}></Route>
        
      </Routes>
      
   
     </>
       
   );
}

export default App;
