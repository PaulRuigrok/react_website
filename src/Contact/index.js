import React, { useEffect } from 'react'

const Contact = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    },[]
    )
    return (
        <div className='flex justify-center items-center h-80 w-full'>
            <a href='https://www.twitter.com/paul__rouge' className='border p-6 rounded'
            target="_blank" rel="noopener noreferrer">
                <p className='font-mono text2xl md:text-4xl text-gray-800'>
                twitter
                </p>
            </a>
        </div>
    )
}

export default Contact
