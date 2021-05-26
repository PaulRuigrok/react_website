import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as LogoSvg } from './logo.svg'

const Navbar = ({toggle}) => {
    const [menuOpen, setMenuOpen] = useState (false)
    const openMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className = 'z-40 px-10 md:px-0 flex h-20 w-full items-center justify-center sticky top-0 bg-white'>
            <div className = 'w-screen flex justify-between px-0 md:px-40'>
                <Link to="/" className = 'flex items-center justify-between'>
                    <LogoSvg className='w-10 md:w-14 animate-spin'/>
                    <h2 className= 'text-2xl hidden md:text-4xl md:flex ml-10 font-display font-bold'>how_to_crypto.com</h2>
                </Link>
                <div className = {`${!menuOpen ? 'menubutton' : 'menubutton-open'} cursor-pointer md:hidden flex items-center flex justify-center items-center`}
                    onClick={()=>{toggle();openMenu(true)}}>
                        
                <svg className={`w-10 h-10`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            
                </div>
                <nav className = 'hidden md:flex flex items-center '>
                    <Link to="/" className = 'p-6 h-full flex items-center font-mono tracking-widest hover:underline'>Home</Link>
                    <Link to="/about" className = 'p-6 h-full flex items-center font-mono tracking-widest hover:underline'>About</Link>
                    <Link to="/discord" className = 'p-6 h-full flex items-center font-mono tracking-widest hover:underline'>Discord</Link>
                    <Link to="/contact" className = 'p-6 h-full flex items-center font-mono tracking-widest hover:underline'>Contact</Link>
                </nav>
            </div>
        </div>

    )
}

export default Navbar
