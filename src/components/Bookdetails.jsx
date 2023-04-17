import React from 'react'
import '../Style1.css'
import { useState,useEffect} from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BOOK_DETAILS_URL } from '../API';


const Bookdetails = () => {
const [books,setBookss]=useState({});
const { id }=useParams();

const capitalizeSentences=(str)=>
 {
  return str.split(' ')
    .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
    .join(' ');
}

// const capitalizeFirstLetter=(string)=>
// {
  
//   return string.charAt(0).toUpperCase() + string.slice(1);
       
// }
  
useEffect(()=>
{
axios.get(`${BOOK_DETAILS_URL}/${id}`).then(res=>
  {
    console.log(res.data)
    res.data.title=capitalizeSentences(res.data.title)

    setBookss(res.data)

  }).catch(err=>console.log(err))

},[id]);





  
  return (<div className="book-details">
      <div className='book-img'> 
      <h2>{books.title}</h2>
      <img src={books.image_url} alt="#"/>
      </div>
      <div className='book-descr'>  
        <h2>Description</h2>
        <p>{books.description}</p>
        <h2>Authors</h2>
        <p>{books.authors}</p>
        <h2>Genres</h2>      
        <p>{books.genres}</p>
        </div>
    
    
    </div>

    )
   
}



export default Bookdetails
