import React from 'react'
import { ReactComponent as PcSvg } from '../../media/pc-monitor.svg'
import { ReactComponent as FileSvg } from '../../media/file_with_lines.svg'
import Checkutton from '../../Components/CheckButton'

const Transaction = () => {
    return (
        <div className='bg-yellow-300 w-full relative'>
            <div id='transactions' className='h-3/4 flex flex-col justify-center items-center pt-40 mb-40'>
                <h1 className= 'text-4xl md:text-8xl font-display text-gray-800 font-bold text-left'>Transactions:</h1>
                <p className= 'font-mono text-2xl md:text-3xl text-gray-800 m-8'>The cool part.</p>
            </div>
            
            <div className='p-8 flex flex-col md:flex-row w-full justify-center relative '>
                <div className='md:w-1/2 grid grid-rows-3 grid-cols-3 gap-4'>
                    <div className='col-span-3 md:col-span-2 font-mono text-xl md:text-3xl pb-8 text-gray-800 md:pl-60'>
                         Okay! We are going to make a transaction.<br></br>
                        Ask yourself, what information do we need to send to the blockchain to make a transaction?
                    </div>
                    <div></div>
                    <div className='font-mono text-3xl pb-8 text-gray-800 md:pl-60 flex items-center col-span-2'>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col jusitfy-start sticky bottom-10 md:top-40'>
                        <p className='text-center font-mono text-3xl pb-8 sticky text-gray-800'>the blockchain:</p>
                        <div className='grid grid-cols-3 gap-0 md:gap-4'>
                            <div className='flex justify-center animate-wiggle' style={{animationDelay:"400ms"}}><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle'><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle' style={{animationDelay:"200ms"}}><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center animate-wiggle'><PcSvg className='w-10 md:w-40'/></div>
                            <div className='flex justify-center'><FileSvg className='w-20 h-40 md:w-60 md:h-60'/></div>
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
