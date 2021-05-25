import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as LogoSvg } from './logo.svg'


const Navbar = ({toggle}) => {
    return (
        <div className = 'z-20 px-10 md:px-0 flex h-20 w-full items-center justify-center sticky top-0 bg-white'>
            <div className = 'w-screen flex justify-between px-0 md:px-40'>
                <Link to="/" className = 'flex items-center justify-between'>
                    <LogoSvg className='w-14 animate-spin'/>
                    <h2 className= 'text-2xl hidden md:text-4xl md:flex ml-10 font-display font-bold'>how_to_crypto.com</h2>
                </Link>
                <div className = 'cursor-pointer md:hidden md:visible flex items-center'
                    onClick={toggle}>
                    <svg className="w-10 h-10 pt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
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
