import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as LogoSvg } from './logo.svg'

const Navbar = ({isOpen, toggle}) => {

    // on scroll scrollFunction is called
    window.onscroll = function() {scrollFunction()};
    // scrollFunction checks if the screen is mobile. if not the "small" logo is being set.
    function scrollFunction() {  
        if(window.screen.width >= 768){
            document.getElementById("logo").className = 'logo-post' 
        }
        // if its a small screen the logo is big at the top of the document. If scrolled down the logo class is set to "logo-post" and moves and scales to a small version of the icon set on the top of the screen
        else {   
            if (!isOpen){
                if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
                document.getElementById("logo").className = 'logo-post'
                } else {
                document.getElementById("logo").className = 'logo'
                }
            } else {
                document.getElementById("logo").className = 'logo-post'   
            }
        } 
    }
    
    return (
        <div className = 'z-40 px-10 md:px-0 flex h-12 md:h-20 w-full items-center justify-center sticky top-0 bg-white'>
            <div className = 'w-screen flex justify-between px-0 md:px-40 relative'>
                <Link to="/" className = 'flex items-center justify-between'>
                    {/* this is the logo, should spin on click menu item as well */}
                    <div id='logo' className={`md:logo-post logo ${!isOpen && 'logo-post'}`}>
                    <LogoSvg className='w-8 md:w-14 animate-spin'/>
                    </div>
                    <h2 className= 'text-2xl hidden md:text-4xl md:flex ml-10 font-display font-bold'>how_to_crypto.com</h2>
                </Link>
                <div className = {`${!isOpen ? 'menubutton' : 'menubutton-open'} cursor-pointer md:hidden flex items-center flex justify-center items-center`}
                    onClick={toggle}>
                        
                <svg className={`w-10 h-10`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            
                </div>
                <nav className = 'hidden md:flex flex items-center '
                    onClick={toggle}>
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
