import React,{ useEffect } from 'react'
import pixPng from '../../src/media/pix_art_png.png'

const About = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    },[]
    )
    
    return (
        <div className='flex justify-center'>
            <div className='md:w-5/12 flex justify-center flex-col items-center p-8'> 
                {/* THIS SVG MAKES THE COLORS OF THE LOGO CHANGE... */}
                <img src={pixPng} alt="selfie" id='pix_art' className='rounded-full w-40 m-12 z-10'/>
                <h1 className= 'p10 text-4xl font-display text-gray-800 font-bold text-left mb-8'>about me:</h1>
                <p className='font-mono md:text-2xl mb-8'>
                    I am Paul, a random guy on the internet that want to introduce as many people as possible to crypto-currencies.<br></br><br></br>
                    I believe the fiat-currency based money-system we are using since the 70's has messed up our world. Banks are too big to fail and money is being printed faster every year, by central banks who are not democratly choosen. They can do whatever they want and we can't do anything about it, but we are caught up in it because we all need to use money. <br></br><br></br>
                    Did you know that since '71 the dollar is no longer backed by physical gold. So there is no limit to the amount of new money that can be created out of thin air. Causing all the existing money to be worth less and less every day. 
                </p>
                <h1 className= 'p10 text-4xl font-display text-gray-800 font-bold text-left mb-8'>about this website:</h1>
                <p className='font-mono md:text-2xl mb-8'>
                    I created this website to provide crypto-newbies a place to start exploring and hopefully realizing the opportunity that comes with this technology. That is, the opportunity to take back individual sovereignty by owning your own money. And not give it to, and trust, some guy in a suit.<br></br>
                    Besides introducing people to using crypto-currencies I want this website to become a place for other crypto related topics as well.<br></br><br></br>
                    I don't consider myself to be an expert at all, I'm learning as I go so
                    if you see things that aren't correct or you have questions, feel free to contact me via Twitter or check out our Discord channel.
                </p>
            </div>
        </div>
    )
}

export default About
