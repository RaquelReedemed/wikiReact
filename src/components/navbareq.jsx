import '../css/style.css'

import React, { useState, useEffect } from 'react'


function Navbareq() {


  //Funcion para Toggler
  const [active, setActive] = useState('navUl');

  const navHamb = () => {
    active === 'navUl'
    ? setActive('navUl navActive')
    : setActive('navUl')
  }

  //Funcion API

  const [data, setData] = useState(null);

   //hook para hacer la peticion http
   useEffect(() => {
      fetch("https://serviceone.onrender.com/apiWikiIdeasV1d/getPublicationbyCategory/IA") ///este link devuelve una promesa
        .then ((response) => response.json()) //cuando tengamos la respuesta pasarla a json
        .then((data) => setData(data));//
   }, []); //array vacio[], se ejecutara una vez cuando se llame el componente

  return (
    <nav className='nav'>
    <div className='navLogo'><a  href='#'><img src='https://res.cloudinary.com/da5fzpyjp/image/upload/v1677629421/wiki/logo1_lchefc.jpg' alt='logo'></img></a></div>
     <ul className={active}>
       {data?.map((user) => 
      (<li className='navLi' key={user.id}>{user.Category}</li>))}       {/* <li className='navLi'><a href='#'>Arte y Filosofia</a></li>
       <li className='navLi'><a href='#'>Historia y cultura</a></li>
       <li className='navLi'><a href='#'>Geografia y naturaleza</a></li>
       <li className='navLi'><a href='#'>Disenio UX y UI</a></li> */}
     </ul>
     <div onClick={navHamb} className='navToggler'>
     <i class="bi bi-grid-3x3-gap-fill"></i>
     </div>
    </nav> 
  )
}


export default Navbareq
