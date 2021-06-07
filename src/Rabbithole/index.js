import React from 'react'

const Rabbithole = () => {
    return (
        <div className='md:min-h-screen'>
            <div className='grid md:w-8/12 md:grid-cols-2 gap-4 md:gap-10 py-20 justify-around md:mt-20 place-items-center m-auto'>
                
                <div className='flex w-11/12 md:w-full flex-col items-center border p-4 bg-gray-200'>
                    <h2 className='font-display font-bold text-3xl p-4 text-gray-800'>Bitcoin Whitepaper</h2>
                    <p className='font-mono text-l text-gray-800 md:px-20'>
                    Genesis. The beginning of it all. The white paper is the beginning of Bitcoin. Written by Satoshi Nakamoto.
                    </p>
                    <a href="https://bitcoin.org/en/bitcoin-paper" 
                    target="_blank" rel="noopener noreferrer"
                    className='font-mono 2xl text-gray-800 my-4 px-8 border hover:bg-white border-white'>open</a>
                </div>  

                <div className='flex w-11/12 md:w-full flex-col items-center border p-4 bg-gray-200'>
                    <h2 className='font-display font-bold text-3xl p-4 text-gray-800'>Fractional Reserve Banking</h2>
                    <p className='font-mono text-l text-gray-800 md:px-20'>
                        The greatest heist of history? A speech at the EU about the modern money system.
                    </p>
                    <iframe 
                    width='100%' height='300px'
                    src="https://www.youtube.com/embed/LqAGeM-Lt2g?start=9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                    className='pt-2'></iframe>
                </div>  

                <div className='flex w-11/12 md:w-full flex-col justify-center items-center border p-4 bg-gray-200'>
                    <h2 className='font-display font-bold text-3xl p-4 text-gray-800'>the Ethereum Book</h2>
                    <p className='font-mono text-l text-gray-800 md:px-20'>
                        The first few chapters of the Ethereum Book, written by Andreas M. Antonopoulos and Gavin Wood, helped me understand some of the technical sides of crypto-currencies and blockchain. I strongly recommend reading the first two chapters. 
                    </p>
                    <a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://github.com/ethereumbook/ethereumbook" className='font-mono 2xl text-gray-800 my-4 px-8 border hover:bg-white border-white'>open</a>
                </div>  


                <div className='flex w-11/12 md:w-full flex-col justify-center items-center border p-4 bg-gray-200'>
                    <h2 className='font-display font-bold text-3xl p-4 text-gray-800 '>the Petrol Dollar</h2>
                    <p className='font-mono text-l text-gray-800 md:px-20'>
                        The us dollar left the gold-standard in the '70s and got the so called 'Petrol Dollar' in return.
                        A short YouTube documentary:
                    </p>
                    <iframe width='100%' height='300px' src="https://www.youtube.com/embed/-XU6ZHZ8TDg?start=9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                    className='pt-2'></iframe>
                </div>  

            </div>
        </div>
    )
}

export default Rabbithole
