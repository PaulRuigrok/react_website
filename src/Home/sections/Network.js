import React from 'react'
import { ReactComponent as PcSvg } from '../../media/pc-monitor.svg'
import { ReactComponent as FileSvg } from '../../media/file_with_lines.svg'


const Network = () => {
    return (
    <>  <div id="network"></div>
        <div className= 'w-10/12 h-full bg-yellow-300 flex  items-center mt-80  p-8 justify-between'>
        <div className = 'flex flex-col md:flex-row items-center '>    
            <div className='md:w-1/2'>
            <h1 className= 'text-4xl md:text-6xl font-display text-gray-800 font-bold text-left'>A blockchain:</h1>
            <p className= 'font-mono text-xl md:text-2xl text-gray-800 m-8'>Spooky word right? Let's forget it. When you see the word 'blockchain'
            just think of a network. Just like the internet or your wifi at home.<br></br><br></br>
            You can think of a crypto-currency as a network of computers all around the world connected to each other and having only one file. One shared ledger, like 
            an Excel sheet.<br></br><br></br>On this ledger there are balances kept of every address.<br></br><br></br>For example:<br></br>
            Address 1 has 50 coins,<br></br>
            Address 2 100 coins,<br></br>
            Address 3 has 80 coins.<br></br><br></br><br></br>
            <span className='md:block hidden font-mono font-bold'>That's it! Just a bunch of computers all having a copy of the same Excel sheet. </span>
            </p>
            </div>
            <div className=' w-1/2 '>
               <div className='grid grid-cols-3 gap-6'>
               <div className='flex justify-center animate-wiggle'  style={{animationDelay:"100ms"}}><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'  style={{animationDelay:"600ms"}}><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'><PcSvg className='w-40 '/></div>
               <div className='flex justify-center'><FileSvg className='w-60 h-20 md:h-60'/></div>
               <div className='flex justify-center animate-wiggle' style={{animationDelay:"300ms"}}><PcSvg className=' w-40'/></div>
               <div className='flex justify-center animate-wiggle'  style={{animationDelay:"635ms"}}><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle'  style={{animationDelay:"120ms"}}><PcSvg className='w-40'/></div>
               <div className='flex justify-center animate-wiggle' style={{animationDelay:"50ms"}}><PcSvg className='w-40'/></div>     
               </div>
            </div>
            <p className='mt-20 md:hidden mt-6 visible font-mono font-bold text-gray-800'>
            That's it! Just a bunch of computers all having a copy of the same Excel sheet.
            </p>  
            
        </div>
        </div>
    </>
    )
}

export default Network
