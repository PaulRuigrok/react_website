import React from 'react'
import {Link} from 'react-scroll'

const SideNav = () => {
    return (
        <div className='hidden md:flex flex-col justify-between h-1/2 w-20 fixed inset-y-60 left-0 p-4 motion-safe:animate-fadeIn z-40'>
            
            <Link to='home' activeClass="bg-red-500" spy={true} smooth={true} className="cursor-pointer">
                <p className='font-mono tracking-widest'>top</p>
            </Link>
            <Link to='goal' spy={true} smooth={true} className="cursor-pointer">
                <p className='font-mono tracking-widest'>goal</p>
            </Link>
            <Link to='network'spy={true} smooth={true} className="cursor-pointer">
                <p className='font-mono tracking-widest'>network</p>
            </Link>
            <Link to='wallet' spy={true} smooth={true} className="cursor-pointer">
                <p className='font-mono tracking-widest'>wallets</p>
            </Link>
            <Link to='walletmanagers' spy={true} smooth={true} className="cursor-pointer">
                <p className='font-mono tracking-widest'>wallet-<br></br>managers</p>
            </Link>
            <Link to='transactions' spy={true} smooth={true} className="cursor-pointer">
                <p className='font-mono tracking-widest'>trans-<br></br>actions</p>
            </Link>
            <Link to='geticx' spy={true} smooth={true} className="cursor-pointer">
                <p className='font-mono tracking-widest'>practice</p>
            </Link>

        </div>
    )
}

export default SideNav
