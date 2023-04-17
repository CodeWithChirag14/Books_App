import React, { useState } from 'react'

import { useAppContext } from './context/appContext';

import { useNavigate } from 'react-router-dom';
import '../Style1.css'
import {API_URL} from '../API'
import axios from 'axios';


import { useEffect } from 'react';

const Booklist = () => {
const[books,setBooks]=useState([]);

// const capitalizeSentencess=(str)=>
//  {
//   return str.split(' ')
//     .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
//     .join(' ');
// }


const{favorites,addToFavorites,removeFromFavorites}=useAppContext();


const navigate=useNavigate();


const favoritesChecker=(id)=>
{
  const boolean=favorites.some((book)=>book.id=== id);
  return boolean;
   
}

console.log('favorites are',favorites)


useEffect(()=>
{
axios.get(API_URL).then(res=>
  {
    console.log(res.data)
    // res.data.title=capitalizeSentencess(res.data.title)
    setBooks(res.data)
  }).catch(err=>console.log(err))

},[]);

  return (
    <div className='booklist'>

      {books.map((book)=>
      {return(
        <div key={book.id} className='book'>
         <div><h4>{book.title}</h4></div>
         <div>
          <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)}
          />
          </div>
         <div>
         {favoritesChecker(book.id)?(<button onClick={()=>removeFromFavorites(book.id)}>Remove From Favorites</button>):(<button onClick={()=>addToFavorites(book)}>Add to Favorites</button>)}

         
         

        </div>
        </div>

      )
      }
      
      
      )}

    </div>
  )
}

export default Booklist
