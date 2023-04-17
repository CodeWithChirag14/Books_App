import React from 'react'
import '../Style1.css'
import { useAppContext } from './context/appContext';


const Favorites = () => {

  const{favorites,addToFavorites,removeFromFavorites}=useAppContext();


  const favoritesChecker=(id)=>
  {
    const boolean=favorites.some((book)=>book.id=== id);
    return boolean;
     
  }


  return <div className='fav'>

  {favorites.length>0 ?favorites.map((book)=>
  <div className='favorites'>
  <div key={book.id} className='book'>
   <div><h4>{book.title}</h4></div>
   <div><img src={book.image_url} alt="#"/></div>
   <div>
   {favoritesChecker(book.id)?(<button onClick={()=>removeFromFavorites(book.id)}>Remove From Favorites</button>):(<button onClick={()=>addToFavorites(book)}>Add to Favorites</button>)}

   
   

  </div>
  </div>
  </div>
):<h1 className='h1fav'>You don't have any favorites yet!!</h1>}

   
   



  </div>
}

export default Favorites
