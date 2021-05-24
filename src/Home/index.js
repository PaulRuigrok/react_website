import React from 'react'
import Introduction from './sections/Introduction'
import Network from './sections/Network'
import Wallet from './sections/Wallet'
import SideNav from './side_nav'
import Recap from './sections/Recap'
import Transcation from './sections/Transaction'



const Home = () => {
    return (
        <>
        <div id='home'></div>
        <SideNav />
        <div className= 'w-full h-20'></div> 
        <div className = 'w-full h-auto bg-white flex flex-col justify-center items-center'> 
            <div className= 'w-10/12 h-auto bg-blue-100 pl-20 flex pt-8 justify-left items-center motion-safe:animate-fadeIn'>
                <div className = 'flex flex-col md:w-1/2'>    
                    <h1 className= 'p10 text-6xl  md:text-9xl font-display text-gray-800 font-bold '>Crypto <br></br> Currencies</h1>
                    <p className= 'font-mono text-xl  md:text-3xl text-gray-800 m-8 p10'>The hype around crypto's is back. Largely because of the proftis that
                    can be made in trading them. But a lot of people are still missing the bigger picture. Bitcoin and other cryptocurrencies
                    are changing the world as we speak. We are witnessing a revolution!</p>
                </div>
            </div>
            <Introduction/>
            <div className= 'w-full h-20'></div>
            <Network id='network'/>
            <Wallet id='wallet'/>
            <Recap/>
            <Transcation/>
        </div>
        </>
    )
}
 
export default Home
