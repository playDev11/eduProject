import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo2.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
      useEffect(()=>{
        window.addEventListener('scroll', ()=> {
          window.scrollY > 650 ? setSticky(true): setSticky(false)
        })
      }, [])
      const [mobileMenu, setMobileMenu]=useState(false);
      const toggleMenu = () =>{
        mobileMenu? setMobileMenu(false) : setMobileMenu(true)
      }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <span>VERU UNIVERSITY</span>
      <ul className={mobileMenu ? '' : 'hide-menu-icon'}>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={0}>
            Home
          </Link>
        </li>
        <li>
          {' '}
          <Link to="programs" smooth={true} duration={500} offset={-240}>
            PROGRAM
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-250}>
            ABOUT US
          </Link>
        </li>
        <li>
          {' '}
          <Link to="campus" smooth={true} duration={500} offset={-260}>
            CAMPUS
          </Link>
        </li>
        <li>
          {' '}
          <Link to="testimonial" smooth={true} duration={500} offset={-260}>
            TESTIMONIAL
          </Link>
        </li>
        <li>
          {' '}
          <Link to="contact" smooth={true} duration={500} offset={-260}>
            <button className="btn">CONTACT US</button>
          </Link>{' '}
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar