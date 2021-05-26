import React from 'react'
import { ReactComponent as PcSvg } from '../../media/pc-monitor.svg'
import { ReactComponent as FileSvg } from '../../media/file_with_lines.svg'
import ClickToReveal from '../../Components/ClickToReveal'

const Transaction = () => {
    return (
        <div className='bg-yellow-300 w-full relative'>
            <div id='transactions' className='flex flex-col justify-center items-center pt-40 md:pt-80 md:mb-40'>
                <h1 className= 'text-4xl md:text-8xl font-display text-gray-800 font-bold text-left'>Transactions:</h1>
                <p className= 'font-mono text-2xl md:text-3xl text-gray-800 m-8'>The cool part.</p>
            </div>

            {/* CONTAINER BENEATH THE TITLE */}
            <div className='p-8 w-full flex flex-col md:flex-row justify-end relative'>
                
                {/* left container holding the text */}
                <div className='md:h-screen grid grid-rows-3 grid-cols-1 gap-4 md:p-8 md:w-4/12'>
                    <div className=''>
                        <p className= 'font-mono text-xl md:text-3xl pb-8 text-gray-800'> You absolute ledg, you have made it pretty far already! We are going to talk about transactions.<br></br><br></br> 
                        Ask yourself, what information do we need to send to the blockchain to make a transaction?
                        </p>
                    </div>
                    
                    <div>
                        <div className='flex-col'>
                        <ClickToReveal num='1' text="the amount you want to send"/>
                        </div>
                        <div className='flex-col'>
                        <ClickToReveal num='2' text="your address / public key"/>
                        </div>
                        <div className='flex-col'>
                        <ClickToReveal num='3' text="the recepient's address / public key"/>
                        </div>
                    </div>
                    <div>
                        <p className='font-mono text-xl md:text-3xl pb-8 text-gray-800'>
                        Etiam feugiat diam non mi condimentum porta. Nulla facilisi. Suspendisse egestas cursus ex, non feugiat ex cursus ut. Nulla erat quam, cursus eget tristique non, auctor pulvinar arcu. Donec gravida, elit id pharetra aliquet, dolor quam
                        </p>
                    </div>
                </div>

                {/* right part of the container holding the network svg scheme */}
                <div className='md:w-1/2 sticky bg-yellow-300 w-full pt-2 pb-4 bottom-0 z-30 md:z-10'>
                    <div className='flex flex-col sticky md:top-40 '>
                        <p className='text-center font-mono md:text-3xl pb-2 md:pb-8 text-gray-800'>the blockchain:</p>
                        <div className='grid grid-cols-3 gap-4 md:gap-20'>
                            <div className='flex justify-center animate-wiggle' style={{animationDelay:"400ms"}}><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle'><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle' style={{animationDelay:"200ms"}}><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle'><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center'><FileSvg className='w-20 h-20 md:w-60 md:h-60'/></div>
                            <div className='flex justify-center animate-wiggle' style={{animationDelay:"300ms"}}><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle'><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle'><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle' style={{animationDelay:"100ms"}}><PcSvg className='w-10 md:w-40'/></div>     
                        </div>
                    </div>
                </div>
                <div className='h-screen'></div>
            </div>    
        <div className='h-screen bg-white'></div>
        
        </div>
    )
}

export default Transaction
