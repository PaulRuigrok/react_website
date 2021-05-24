import React from 'react'

const Recap = () => {

    return (
    <>
        <div className= 'w-10/12 flex flex-col justify-center items-center mt-80'>
            <div  className = 'flex flex-col md:flex-col md:w-5/12'>    
                <h1 className= 'text-8xl font-display text-gray-800 font-bold text-left'>Recap:</h1>
                <p className= 'font-mono text-3xl text-gray-800 m-8 p-10'>
                    Okay, We've handled a lot so far. Don't forget to take it step by step.<br></br><br></br>
                    Before we continue, let's recall what you've learned so far.      
                    </p>
            </div>
            <div className='w-9/12 flex flex-col md:flex-row justify-around'>
                
                <div className='bg-white border shadow-lg p-8 m-4 rounded-md'>
                    <h1 className='text-4xl font-display font-bold mb-4'>Blockhain</h1>
                    <p className= 'font-mono text-2xl text-gray-800'>A blockchain is just a network all sharing a copy of the same file. Which contains addresses with their balances.</p>
                </div>

                <div className='bg-white border shadow-lg p-8 m-4 rounded-md'>                    
                <h1 className='text-4xl font-display font-bold mb-4'>Wallet</h1>
                    <p className= 'font-mono text-2xl text-gray-800'>The term 'wallet' is used in a different ways, but technicaly a wallet is a different word for an address on a blockchain.</p>
                </div>
                
                <div className='bg-white border shadow-lg p-8 m-4 rounded-md'>
                    <h1 className='text-4xl font-display font-bold mb-4'>Wallet Managers</h1>
                    <p className= 'font-mono text-2xl text-gray-800'>An app, or hardware device, that allows you to create wallets and send funds from your wallets without the need of making technical steps.</p>
                </div>

            </div>

        </div>
    </>
    )
}

export default Recap
