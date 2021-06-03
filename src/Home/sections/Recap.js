import React from 'react'
import { useInView } from 'react-intersection-observer';

const Recap = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.1,
      });
    return (
    <div ref={ref} className={`${inView ? 'fade-in' : 'fade-out'} flex flex-col items-center justify-center`}>
        <div className= 'w-10/12 flex flex-col justify-center items-center mt-20'>
            <div  className = 'flex flex-col md:flex-col md:w-5/12'>    
                <h1 className= 'text-4xl md:text-8xl font-display text-gray-800 font-bold text-left'>Recap:</h1>
                <p className= 'font-mono text-xl md:text-3xl text-gray-800 m-8 p-10'>
                    Okay, We've handled a lot so far. Don't forget to take it step by step.<br></br><br></br>
                    Before we continue, let's recall what you've learned so far.      
                    </p>
            </div>
            <div className='md:w-9/12 flex flex-col md:flex-row justify-around'>
                
                <div className='bg-white border shadow-lg p-4 m-2 md:p-8 md:m-4 rounded-md'>
                    <h1 className='text-2xl md:text-4xl font-display font-bold mb-4'>Blockchain</h1>
                    <p className= 'font-mono text-gray-800'>A blockchain is just a network of computers spread around the world, all sharing a copy of the same file / ledger / Excel sheet. Which contains addresses with their balances.</p>
                </div>

                <div className='bg-white border shadow-lg p-4 m-2 md:p-8 md:m-4 rounded-md'>                    
                <h1 className='text-2xl md:text-4xl font-display font-bold mb-4'>Wallet</h1>
                    <p className= 'font-mono text-gray-800'>The term 'wallet' is used in a few different ways, but basicly a wallet is a different word for an address on a blockchain and consist out of a:<br></br> [public key * private key] - pair <br></br> and a balance.</p>
                </div>
                
                <div className='bg-white border shadow-lg p-4 m-2 md:p-8 md:m-4 rounded-md'>
                    <h1 className='text-2xl md:text-4xl font-display font-bold mb-4'>Wallet Managers</h1>
                    <p className= 'font-mono text-gray-800'>An app, or hardware device, that allows you to create wallets/addresses and send funds from your wallets without the need of making technical steps.<br></br>It makes talking to a blockchain easier for you.</p>
                </div>

            </div>

        </div>
    </div>
    )
}

export default Recap
