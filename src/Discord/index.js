import React, { useEffect} from 'react'

const Discord = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    },[]
    )
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full md:w-5/12 m-auto'>
            <p className='font-mono text-xl md:text-2xl text-gray-800 p-10'>
                We got a Discord Channel where we discuss crypto, do some price analyses and shit-post. You're free to check it out:
            </p> 
            <a href='https://discord.gg/FhcrZyAawC' className='border p-6 rounded'
                target="_blank" rel="noopener noreferrer">
                <p className='font-mono text2xl md:text-4xl text-gray-800'>
                join
                </p>
            </a>
        </div>
        
    )
}

export default Discord
