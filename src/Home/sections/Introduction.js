import React from 'react'
import CheckButton from '../../Components/CheckButton'

const Introduction = () => {
    return (
        <>
            <div id='goal'></div>
            <div className= 'w-11/12 md:w-10/12 h-full flex justify-center items-center mt-96'>
                <div  className = 'flex flex-col md:w-5/12'>    
                    <h1 className= 'text-4xl md:text-8xl font-display text-gray-800 font-bold text-left'>My goal:</h1>
                    <p className= 'font-mono text-xl md:text-3xl text-gray-800 p-4 pl-2 md:m-8'>A lot of people won't even try to understand crypto's 
                    because it's to daunting. I want to show you some of the crypto-basics, step by step. I started my crypto journey
                    in 2017. The first time reading about Bitcoin I got really excited. Money without the need banks!
                    <br></br><br></br>
                    I'll try to keep it short.
                    <br></br><br></br>
                    Paul
                    </p>
                    <CheckButton/>
                </div>
            </div>
        </>
    )
}

export default Introduction
