
import React, {useState} from 'react'
import '../css/style.css'


function Navbar() {
    
    const [active, setActive] = useState("nav__menu");
    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active')
         : setActive('nav__menu')
    }
   
  return (
    <nav className="nav">
        <a href='#' className="nav__brand">logo</a>
        <ul className={active}>
            <li className="nav__item"><a href="#" className="nav__link">Arte y Filosofia</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Historia y cultura</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Geografia y naturaleza</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Disenio UX y UI</a></li>
        </ul>
        <div onClick={navToggle} className='nav__toggler'>
            <div className="linea1"></div>
            <div className="linea2"></div>
            <div className="linea3"></div>
        </div>
    </nav>
  )
}



export default Navbar
