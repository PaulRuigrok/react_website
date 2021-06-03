import React from 'react'
import {Link} from 'react-router-dom'


const Footer = ({mobileNavIsOpen, toggleMobileNav}) => {
 
    return (
        <div className = 'z-40 px-10 md:px-0 flex h-12 md:h-20 w-full items-center justify-center fixed bottom-6'>
            <div className = 'w-screen flex justify-between px-0 md:px-40 relative'>

                <div className = {`${!mobileNavIsOpen ? 'mobile-nav-menu-closed' : 'mobile-nav-menu-open'} cursor-pointer md:hidden flex items-center flex justify-center items-center`}
                    onClick={toggleMobileNav}>
                        

                    <div className="w-12 h-12 bg-white border rounded-full flex justify-center items-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" /></svg>
                    </div>
                </div>
                <nav className = 'hidden md:flex flex items-center '
                    onClick={toggleMobileNav}>

                </nav>
            </div>
        </div>

    )
}

export default Footer
