import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';

const Giveicx = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.1,
      });
    
    const [isVisible, setIsVisible] = useState(false)
    const [addressInput, setAddressInput] = useState('')


    let set_address = () =>{  
        let address = document.getElementById("icx_address").value
        console.log('address')
        if (address.startsWith('hx')){
            setIsVisible(true)
            setAddressInput(address)
        }
        else{
            setIsVisible(false)
        }
    }
    
    
    
    return (
        <div id='geticx' ref={ref} className= {`${inView ? 'fade-in' : 'fade-out'} w-11/12 md:w-5/12 flex flex-col px-4 py-12 md:p-8`}>
            <h1 className= 'text-4xl md:text-6xl font-display text-gray-800 font-bold text-left'>Real World Practice</h1>
            <p className='font-mono pt-8 md:text-2xl'>
                You made it! To finish up I want to give you some real world crypto so you can practice using a Wallet Manager. I will send you some free ICX (the native crypto-currency of the ICON Blockchain) if you follow these three steps:
            </p>
            <div className='flex flex-col justify-center'>
                <p className='font-mono pt-8 md:text-2xl'> 1. Download the Iconex App on your phone, or the Iconex Chrome Extension on your computer. (You can also use a different Wallet Manager as long as it has Icon (ICX) compability, for example TrustWallet.) After you downloaded it, create a wallet with it.</p>
                <p className='font-mono pt-8 md:text-2xl'> 2. You have now created a wallet, now copy the public address (your wallet address). It's the long string starting with the letters 'hx'. If you can't find it, look for a 'receive' button. This will give you your address. Copy the address and paste it below: </p>
                <div className='p-8 flex justify-center'>
                <input id="icx_address" 
                    placeholder=' paste address here' 
                    onInput= {()=>set_address()}
                    className='font-mono border w-full rounded md:text-2xl'></input>
                </div>
                <p className='font-mono pt-8 md:text-2xl'>Copy the text below, go to twitter and paste it in a new tweet:</p>
                <div className='py-8 rounded'>
                    {!isVisible ? 
                    <p className='font-mono font-light italic md:text-2xl'>error: first paste in your address above...</p> : 
                    <p className='font-mono italic bg-gray-100 border md:text-2xl'>@paul__rouge I Just completed the beginners-tutorial on crypto payments on www.blabla.com and will receive some free $icx to practice!<br></br> My ICX address = {addressInput}</p>}
                </div>  
            </div>
        </div>
    )
}

export default Giveicx
