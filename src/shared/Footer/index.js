import React from 'react'
import {Link} from 'react-scroll'


const Footer = ({mobileNavIsOpen, toggleMobileNav}) => {
 
    return (
        <div className = 'z-40 px-10 md:px-0 flex h-12 md:h-20 items-center justify-center fixed overflow-hidden bottom-6'>
            <div className = 'w-screen flex justify-between px-0 md:px-40 '>
                <div className = {`${!mobileNavIsOpen ? 'mobile-nav-menu-closed' : 'mobile-nav-menu-open'} cursor-pointer md:hidden flex items-center flex justify-center items-center`}
                    onClick={toggleMobileNav}>
                        

                    <div className="md:hidden w-12 h-12 bg-white border rounded-full flex justify-center items-center shadow-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" /></svg>
                    </div>
                </div>
                <div className={`md:hidden ${!mobileNavIsOpen ? 'mobile_nav_list_closed' : 'mobile_nav_list_open' } w-9/12 flex flex-col justify-around bg-gray-200 fixed left-10 bottom-20 rounded shadow-xl overflow-hidden`}
                
                >
                    
                    <Link onClick={toggleMobileNav} to='home' activeClass="bg-red-500" spy={true} smooth={true} className="cursor-pointer pl-4 py-4 ">
                        <p className='font-mono tracking-widest'>* top</p>
                    </Link>
                    <Link onClick={toggleMobileNav} to='goal' spy={true} smooth={true} className="cursor-pointer pl-4 py-4  ">
                        <p className='font-mono tracking-widest'>* goal</p>
                    </Link>
                    <Link onClick={toggleMobileNav} to='network'spy={true} smooth={true} className="cursor-pointer pl-4 py-4  ">
                        <p className='font-mono tracking-widest'>* network</p>
                    </Link>
                    <Link onClick={toggleMobileNav} to='wallet' spy={true} smooth={true} className="cursor-pointer pl-4 py-4  ">
                        <p className='font-mono tracking-widest'>* wallets</p>
                    </Link>
                    <Link onClick={toggleMobileNav} to='walletmanagers' spy={true} smooth={true} className="cursor-pointer pl-4 py-4  ">
                        <p className='font-mono tracking-widest'>* wallet-<br></br>managers</p>
                    </Link>
                    <Link onClick={toggleMobileNav} to='transactions' spy={true} smooth={true} className="cursor-pointer pl-4 py-4 ">
                        <p className='font-mono tracking-widest'>* trans-<br></br>actions</p>
                    </Link>
                    <Link onClick={toggleMobileNav} to='geticx' spy={true} smooth={true} className="cursor-pointer pl-4 py-4 ">
                        <p className='font-mono tracking-widest'>* practice</p>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Footer
