import React from 'react'
import CheckButton from '../../Components/CheckButton'
import { useInView } from 'react-intersection-observer';


const Introduction = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.1
      });

    return (
        <div  className={`${inView ?'fade-in flex flex-col jusitfy-center' : 'fade-out flex flex-col jusitfy-center' } `}>
            <div id='goal'></div>
            
            <div className= 'w-11/12 md:w-10/12 flex justify-center p-6 items-center mt-20 md:mt-96'>
                <div ref={ref} className = {`flex flex-col md:w-5/12 `}>    
                    <h1 className= 'text-4xl md:text-8xl font-display text-gray-800 font-bold text-left'>My goal:</h1>
                    <p className= 'font-mono text-xl md:text-2xl text-gray-800 p-8 md:p-4 pl-2 md:m-8'>Cryptocurrencies are so much more than just "Coins that you can buy and sell on Binance". Cryptocurrencies bring something new to mankind; A way to transfer value across the world without the need of a third party (banks/paypal/visa etc). <br></br><br></br> I want to show you some of the crypto-basics, step by step. Hoping to help you understand the basics of managing your own money without the need for a bank.
                    <br></br><br></br>
                    Don't you think it's weird that you work your ass off, week after week, and then voluntary hand over the money you’ve earned to some guy in a suit?
                    <br></br><br></br>
                    I think every responsible person should want to be the keeper of his/her own earnings. <br></br><br></br>
                    So crypto's are much more than just some get rich quick thing, even tho that's the narrative that is being pushed the most by media and that is understandable; Because fear and 'fear of missing out', FOMO, generate clicks / money. And media companies need money to continue existing. 
                    <br></br><br></br>
                    I made this website because I want to show the practical basics of crypto to as much people as possible. I’ll even give you some free money at the end ;) I taught myself, without any programming background, so I'm sure you can too. Let’s take it step by step.<br></br><br></br>
                    We'll be using the 'got it?' button to help you taking it step by step and taking a breather after every step.<br></br><br></br>
                    Paul
                    </p>
                    <div className='w-8/12 md:w-1/2'>
                        <CheckButton message="awesome! scroll down to continue!"/>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default Introduction
