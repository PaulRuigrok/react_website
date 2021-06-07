import React, { useState } from 'react'

const Giveicx = () => {

    // Show the checkmark when tweet-text is copied
    const [showCheckmark, setShowCheckmark] = useState(false)
    const show_check_mark = () =>{
        setShowCheckmark(true)
    }
    
    // copy tweet text to clipboard
    const buttonClick = (e) =>{
        e.preventDefault()
        let text = e.target.textContent
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el); 
        setShowCheckmark(true)
    }

    // Show the twitter message to tweet including the icx address of the user
    const [isVisible, setIsVisible] = useState(false)
    const [addressInput, setAddressInput] = useState('')
    let set_address = () =>{  
        let address = document.getElementById("icx_address").value
        if (address.startsWith('hx')){
            setIsVisible(true)
            setAddressInput(address)
        }
        else{
            setIsVisible(false)
        }
    }
    
    return (
        <div id='geticx'  className= {` w-11/12 md:w-5/12 flex flex-col px-4 py-12 md:p-8`}>
            <h1 className= 'text-4xl md:text-6xl font-display text-gray-800 font-bold text-left'>Real World Practice</h1>
            <p className='font-mono pt-8 md:text-2xl'>
                You made it! To finish up, I want to give you some real world crypto so you can practice using a Wallet Manager. I will send you some free ICX (the native crypto-currency of the ICON Blockchain) if you follow these three steps:
            </p>
            <div className='flex flex-col justify-center'>
                <p className='font-mono pt-8 md:text-2xl'> 1. Download the Iconex App on your phone, or the Iconex Chrome Extension on your computer. (You can also use a different Wallet Manager as long as it has Icon (ICX) compability, for example TrustWallet.) After you downloaded it, create a wallet with it.</p>
                <p className='font-mono pt-8 md:text-2xl'> 2. You have now created a wallet, so you can copy the public address (your wallet address). It's the long string starting with the letters 'hx'. If you can't find it, look for a 'receive' button. This will give you your address. Copy the address and paste it below. </p>
                <div className='p-8 flex justify-center'>
                <input id="icx_address" 
                    placeholder=' paste address here' 
                    onInput= {()=>set_address()}
                    className='font-mono border w-full rounded md:text-2xl'></input>
                </div>
                <p className='font-mono pt-8 md:text-2xl'>Copy the text below, go to twitter and paste it in a new tweet:</p>
                
                <div className='py-8 rounded cursor-pointer' onClick={buttonClick}>
                    {!isVisible ? 
                        <p className='font-mono font-light italic md:text-2xl'>error: first paste in your Icon address above...</p> : 
                        <div>
                            <p className='text-s text-center font-mono italic p-4'> click/tap to copy: </p>
                            <div className='relative'>  
                            <p className='tweet font-mono italic bg-gray-100 border md:text-2xl border p-4 pr-8'>
                            
                            @paul__rouge I Just completed the beginners-tutorial on crypto at www.cryptobeginners.info & I have earned some free $ICX to practice 😃 <br></br><br></br>check the website if you want to learn the basics of #crypto ! 
                            <br></br><br></br>
                            #bitcoin #ethereum
                            <br></br><br></br>
                            My ICX address = {addressInput}</p>

                            <svg id="checkmark" 
                            onClick={show_check_mark}
                            className={`w-10 h-10 absolute top-2 right-2 text-green-500 z-30 
                            ${!showCheckmark ? 'checkmark-init' : 'checkmark-post' } `} 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <p className='font-mono md:text-2xl py-12'>You will receive an automated reply-tweet within an hour or so, containing the transaction link so you can check out the transaction on the Icon Blockchain! How cool is that!<br></br><br></br> At that moment you can see some icx coins in your wallet! <br></br><br></br>
                            <span className='font-mono italic text-sm'>(consider following me on Twitter me while you're at it.)</span></p>
                        </div>
                    }     
                </div>   
            </div>
        </div>
    )
}

export default Giveicx
