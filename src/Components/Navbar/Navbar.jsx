import { useRef } from 'react'
import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const navRef = useRef();

    const shownavbar = () => {
        navRef.current.classList.toggle("resposive_nav");
    }

    const HideNavBar = () => {
        navRef.current.classList.remove("resposive_nav");
    }
    return (
        <div className="n-wrapper" id='Navbar'>

            <div className="n-left">
                <div className="n-name"> mujhtaba </div>
                <Toggle />
            </div>

            <div className="n-right" >
                <nav ref={navRef}>
                    <div className="n-list" >

                        <ul style={{ listStyleType: 'none' }}>

                            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                                <li onClick={HideNavBar} >Home</li>
                            </Link>



                            <Link spy={true} to='About' smooth={true}>
                                <li onClick={HideNavBar}>About</li>
                            </Link>


                            <Link spy={true} to='Portfolio' smooth={true}>
                                <li onClick={HideNavBar}>Portfolio</li>
                            </Link>
                        </ul>
                        </div>

                        <Link spy={true} to='Contact' smooth={true}>
                            <button onClick={HideNavBar} className="Cbutton n-button">Contact us</button>
                        </Link>



                    <button className='nav-btn nav-close-btn' onClick={shownavbar} >
                        <FaTimes />
                    </button>
                </nav>
                <button className='nav-btn' onClick={shownavbar}>
                    <FaBars />
                </button>
            </div>

        </div>

    )
}

export default Navbar