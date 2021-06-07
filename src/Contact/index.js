import React, { useEffect } from 'react'

const Contact = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    },[]
    )
    return (
        <div className='flex flex-col mx-auto justify-center items-center h-screen w-full md:w-5/12'>
            <p className='font-mono text-xl md:text-2xl text-gray-800 p-10'>
                Feel free to contact me on Twitter if you have any questions or suggestions.
            </p> 
            <a href='https://www.twitter.com/paul__rouge' className='border p-6 rounded'
            target="_blank" rel="noopener noreferrer">
                <p className='font-mono text2xl md:text-4xl text-gray-800'>
                Twitter
                </p>
            </a>
        </div>
    )
}

export default Contact
