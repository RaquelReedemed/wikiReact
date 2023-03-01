import '../css/style.css'

import React from 'react'


function Navbareq() {
  return (
    <nav className='nav'>
    <div className='navLogo'><a  href='#' ><img src='https://res.cloudinary.com/da5fzpyjp/image/upload/v1677629421/wiki/logo1_lchefc.jpg' alt='logo'></img></a></div>
     <ul className='navUl' >
       <div><li className='navLi'><a href='#'>Arte y Filosofia</a></li></div>
       <div><li className='navLi'><a href='#'>Historia y cultura</a></li></div>
       <div><li className='navLi'><a href='#'>Geografia y naturaleza</a></li></div>
       <div><li className='navLi'><a href='#'>Disenio UX y UI</a></li></div>
     </ul>
     <div className='navToggler' >
     <i class="bi bi-grid-3x3-gap-fill"></i>
     </div>
    </nav>
  )
}


export default Navbareq
