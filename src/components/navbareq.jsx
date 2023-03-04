import '../css/style.css'

import React, { useState } from 'react'


function Navbareq() {

  const [active, setActive] = useState('navUl');

  const navHamb = () => {
    active === 'navUl'
    ? setActive('navUl navActive')
    : setActive('navUl')
  }

   

  return (
    <nav className='nav'>
    <div className='navLogo'><a  href='#'><img src='https://res.cloudinary.com/da5fzpyjp/image/upload/v1677629421/wiki/logo1_lchefc.jpg' alt='logo'></img></a></div>
     <ul className={active}>
       <li className='navLi'><a href='#'>Arte y Filosofia</a></li>
       <li className='navLi'><a href='#'>Historia y cultura</a></li>
       <li className='navLi'><a href='#'>Geografia y naturaleza</a></li>
       <li className='navLi'><a href='#'>Disenio UX y UI</a></li>
     </ul>
     <div onClick={navHamb} className='navToggler'>
     <i class="bi bi-grid-3x3-gap-fill"></i>
     </div>
    </nav>
  )
}


export default Navbareq
