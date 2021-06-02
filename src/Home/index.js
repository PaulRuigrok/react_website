import React,{ useEffect} from 'react'
import Introduction from './sections/Introduction'
import Network from './sections/Network'
import Wallet from './sections/Wallet'
import SideNav from './side_nav'
import Recap from './sections/Recap'
import Transaction from './sections/Transaction'
import Giveicx from './sections/Giveicx'

const Home = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    },[]
    )
    
    return (
        <>
        <div id='home'></div>
        <SideNav />
        <div className= 'w-full h-20'></div> 
        <div className = 'w-full bg-white flex flex-col justify-center items-center '> 
            <div className= 'w-11/12 md:w-10/12 bg-blue-100 rounded md:pl-20 flex md:pt-8 justify-left items-center motion-safe:animate-fadeIn'>
                <div className = 'flex flex-col md:w-1/2'>    
                    <h1 className= 'text-4xl  p-4 md:text-9xl font-display text-gray-800 font-bold '>Crypto-<br></br>Currencies</h1>
                    <p className= 'font-mono text-xl  md:text-3xl text-gray-800 m-4 md:m-8'>Crypto's are hot again. Largely because of the profits that can be made in trading them. But some people are missing the bigger picture and that is a missed opportunity. Bitcoin and other cryptocurrencies
                    are changing the world as we speak. We are witnessing a revolution!</p>
                </div>
            </div>
            <Introduction/>
            <Network id='network'/>
            <Wallet id='wallet'/>
            <Recap/>
            <Transaction/>
            <Giveicx/>
        </div>
        </>
    )
}
 
export default Home
