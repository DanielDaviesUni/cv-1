import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './navbar.css'

function Navbar({ scrollToFooter }) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const HandleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton)

  return (
    <div>
      <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    DANIEL DAVIES <i class="fa-solid fa-code"></i>
                </Link>
                <div className="menu-icon" onClick={HandleClick}>
                    <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                </ul>
                {button && (
                <Button onClick={scrollToFooter} buttonStyle='btn--outline' buttonSize='btn--large'>Get in Touch!</Button>
)}
            </div>
        </nav>
      </>
    </div>
  )
}

export default Navbar
