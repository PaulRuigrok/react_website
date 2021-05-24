import React from 'react'
import CheckButton from '../../Components/CheckButton'

const Introduction = () => {
    return (
        <>
            <div id='goal'></div>
            <div className= 'w-11/12 md:w-10/12 h-full flex justify-center items-center mt-96'>
                <div  className = 'flex flex-col md:w-5/12'>    
                    <h1 className= 'text-4xl md:text-8xl font-display text-gray-800 font-bold text-left'>My goal:</h1>
                    <p className= 'font-mono text-xl md:text-2xl text-gray-800 p-4 pl-2 md:m-8'>A lot of people won't even try to understand crypto's because it's to daunting. I want to show you some of the crypto-basics, step by step. The first time reading about Bitcoin I got really excited. Managing my own money without the need of a bank? 
                    <br></br><br></br>
                    I think every responsible person should want that. But a side from that, I want to demystify some of the basics of crypto.
                    <br></br><br></br>
                    I thaught myself without any programming background and I'm sure you can too, if we take it step by step.<br></br><br></br>
                    We'll be using the 'got it?' button to help you taking it step by step and taking a breather after every step.<br></br><br></br>
                    Paul
                    </p>
                    <CheckButton/>
                </div>
            </div>
        </>
    )
}

export default Introduction
