import React from 'react'
import '../Style1.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>

          <Link to="/"><h1 className='h1navbar'>ReactBooks App</h1></Link>
        </div>
      <div> 
      <Link to="/favorites"><h3 className='h3navbar'>Your Favorites</h3></Link>  
      </div>
    </div>
  )
}

export default Navbar
