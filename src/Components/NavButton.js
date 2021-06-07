import React, { useState } from 'react'
import {Link} from 'react-scroll'

const NavButton = () => {
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
    const toggle_mobile_nav = () => {
      setMobileNavIsOpen(!mobileNavIsOpen)
    }
    
    return (
        <div className = 'z-10 px-10 md:px-0 flex h-12 md:h-20 items-center justify-center fixed overflow-hidden left-0 bottom-6'>
            <div className = 'w-screen flex justify-between px-0 md:px-40 '>
                <div className = {`${!mobileNavIsOpen ? 'mobile-nav-menu-closed' : 'mobile-nav-menu-open'} cursor-pointer md:hidden flex items-center flex justify-center items-center`}
                    onClick={toggle_mobile_nav}>  
                    <div className="md:hidden w-12 h-12 bg-purple-300 border rounded-full flex justify-center items-center ">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" /></svg>
                    </div>
                </div>
                <div className={`md:hidden ${!mobileNavIsOpen ? 'mobile_nav_list_closed' : 'mobile_nav_list_open' } w-9/12 flex flex-col justify-around bg-gray-200 fixed left-10 bottom-20 rounded shadow-xl overflow-hidden`}
                
                >
                    
                    <Link onClick={toggle_mobile_nav} to='home' activeClass="bg-red-500" spy={true} smooth={true} className="cursor-pointer pl-4 py-4 ">
                        <p className='font-mono tracking-widest'>* top</p>
                    </Link>
                    <Link onClick={toggle_mobile_nav} to='goal' spy={true} smooth={true} className="cursor-pointer pl-4 py-4  ">
                        <p className='font-mono tracking-widest'>* goal</p>
                    </Link>
                    <Link onClick={toggle_mobile_nav} to='network'spy={true} smooth={true} className="cursor-pointer pl-4 py-4  ">
                        <p className='font-mono tracking-widest'>* network</p>
                    </Link>
                    <Link onClick={toggle_mobile_nav} to='wallet' spy={true} smooth={true} className="cursor-pointer pl-4 py-4  ">
                        <p className='font-mono tracking-widest'>* wallets</p>
                    </Link>
                    <Link onClick={toggle_mobile_nav} to='walletmanagers' spy={true} smooth={true} className="cursor-pointer pl-4 py-4  ">
                        <p className='font-mono tracking-widest'>* wallet managers</p>
                    </Link>
                    <Link onClick={toggle_mobile_nav} to='transactions' spy={true} smooth={true} className="cursor-pointer pl-4 py-4 ">
                        <p className='font-mono tracking-widest'>* transactions</p>
                    </Link>
                    <Link onClick={toggle_mobile_nav} to='geticx' spy={true} smooth={true} className="cursor-pointer pl-4 py-4 ">
                        <p className='font-mono tracking-widest'>* free money :)</p>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default NavButton
