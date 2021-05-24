import React from 'react'
import {ReactComponent as WalletSvg} from '../../media/wallet.svg'
import walletCreate from '../../media/create_wallet.png'
import iconexWallet from '../../media/iconex_browser.png'
import metamaskWallet from '../../media/metamask_browser.png'
import {ReactComponent as ArrowDown} from '../../media/arrow_down.svg'


const Wallet = () => {
    return (
    <>
    <div id='wallet'></div>
    <div className= 'md:w-10/12 flex md:flew-col flex-row justify-center items-center mt-20 p-4 md:p-8 justify-between'>
        <div className = 'flex flex-col md:flex-row items-center'>    
            <div className='md:w-1/2 overflow-hidden'>
                <h1 className= 'text-4xl md:text-6xl font-display text-gray-800 font-bold text-left'>Wallets:</h1>
                <p className= 'font-mono text-xl md:text-2xl text-gray-800 m-8'>Okay, we got an Excel sheet that contains addresses and balances.<br></br><br></br>
                We call an address on a blockhain a wallet.<br></br><br></br>
                You can create an address/wallet by sending a message to one of the computers of the blockchain network. <br></br><br></br>

                A computer is really dumb
                and to make it do what you want do, you need to tell it exactly what that is, in a language that the 
                computer can understand (aka programming).<br></br><br></br>
                For example:<br></br>
                If you want to create a address/wallet on the Icon Blockchain* you need to send a message containing this code:<br></br><br></br>
                
                <img src={walletCreate} alt='Wallet_create' className='rounded-md'/>
                <span className='font-mono font-light text-base leading-3 italic'>* I like using the Icon Blockchain because the transactions are really fast and cheap. We'll be using Icon (the network/blockchain) and ICX (the native currency used on the Icon Blockchain) more in this tutorial. </span>
                <br></br><br></br>

                So a lot of code that non-programmers can't easily understand nor use, and to send a transaction it takes a even more code. Not practical at all...<br></br><br></br>
                The solution?
                </p>
                <ArrowDown className='w-10 mb-20 md:w-20 ml-60 animate-smallbounce'/>
                </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center'>
                <div className='md:w-4/5 flex flex-col justify-center md:py-20'>
                    <div className='flex justify-center'>
                        <div className='z-30 text-center'><WalletSvg className='w-20 md:w-60'/></div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <p className='text-xl md:text-2xl font-mono font-bold p-2 md:p-6 md:w-1/2'>Important note: When you create a wallet/address on a blockchain there will by created a key (called a 'private key') with it. You need the key for every outgoing transaction from your wallet.</p>
                    </div>
                </div>
            </div>
        </div>   
    </div>

    <div className= 'w-11/12 md:w-10/12 flex flex-col md:flex-row justify-center md:items-start p-4 md:p-8 bg-gray-100 rounded-md md:mt-80'>
        <div className ='md:sticky top-40'>
            <h1 className= 'text-4xl md:text-6xl font-display text-gray-800 font-bold text-left'>Wallets Managers:</h1>    
        </div>
        <div>
            <p className= 'font-mono text-xl md:text-2xl text-gray-800 md:m-8'>
                The word 'wallet' (or 'hardware-wallet') is being thrown around a lot. I find the word a bit miss-used most of the time.<br></br><br></br>
                Maybe you've heard of MetaMask or TrustWallet as being a wallet. Basicly these programs/apps will let you 'talk' to the blockchain it is connected to (e.g. the Bitcoin-, Ethereum- or Icon blockchain). The Wallet Manager translates your requests (e.g. "send 1 ICX from my address/wallet to another address/wallet") for you, so you don't have to be a programmer to use the blockchain.<br></br><br></br>
                Remember that when you create a address/wallet on a blockchain you also create a 'private key'? A private key is a long random number and is needed to "sign" (proof you are the owner of the address/wallet you are trying to send money from) a transaction. More on that below. <br></br><br></br>For now it's important to understand that when you want to send funds from a wallet, you need the private key.<br></br><br></br>
                An example of a private-key:<br></br><br></br>
                <span className='md:hidden block font-mono font-thin text-xl italic'>'E9873D79C6D87DC0<br></br>FB6A5778633389F4<br></br>453213303DA61F20<br></br>BD67FC233AA33262'</span>
                <span className='hidden md:block font-mono font-thin text-xl italic'>'E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262'</span>
                <br></br><br></br>
                You can imagine it's not very practical typing in this string every time you want to do a transaction. And you want to keep this string a secret because anyone with this string can make a transaction from the address/wallet it's paired to. So it wouldn't be smart to keeping it on your computer or phone...
                <br></br><br></br>
                Income the Wallet Managers. They store the long string that is your private key safely and encrypted for you. When you are logged in on your Wallet Manager and you want to make a transaction you don't need to pass in your long private key.
                <br></br><br></br>
                <div className='flex flex-col md:flex-row justify-around items-center my-8 '>
                    <div className='md:w-2/6'>
                        <img src={metamaskWallet} alt='Iconex_wallet' className='rounded-md shadow-2xl w-full'/>
                        <p className= 'font-mono text-xl md:text-2xl text-gray-800 md:mt-8 mb-20 p-4 italic'> This is MetaMask.
                        A wallet-manager that can connect (send messages/transcation) with multiple blockchains.
                        In the image you can see it has the Ethereum Mainnet selected and that this wallet/address has
                        some Ether.
                            </p>
                    </div>
                    <div className='md:w-2/6'>
                        <img src={iconexWallet} alt='Iconex_wallet' className='rounded-md shadow-2xl w-full'/>
                        <p className= 'font-mono text-xl md:text-2xl text-gray-800 md:mt-8 p-4 italic'>This is the Iconex app.
                        It's the Google Chrome-extension (a browser-app) which let you connect to the Icon Blockchain.
                        You can see the address/wallet the Iconex wallet-manager is managing has some ICX in it.
                        </p>
                    </div>

                </div>
                
                <br></br>
                The safest way to store your private key is on a 'Hardware Wallet (Manager )' or 'Cold Wallet (Manager)'. You can think of them as a USB-device with a Wallet Manager app on it. One of the best known is the 'Ledger Nano S'.<br></br><br></br>
                <div className= 'shadow-xl md:my-8 rounded-md'>
                <p className='text-xl md:text-2xl font-mono text-red-600 md:p-6'>Important note: When you create a wallet with a Wallet Manager you will get a few options on how to recover your private key in case you forget your password, your computer dies or whatever bad things can happen in life. And keep in mind, if you don't have the private key of a address/wallet you CAN NOT transfer funds from that address.<br></br><br></br><br></br>
                <span className ='font-mono font-thin text-gray-800 underline'>
                Most Wallet Managers give you three options:<br></br><br></br></span>
                <span className ='font-mono font-thin text-gray-800'>
                1. Write down (and store in a safe place) the so called 'Seed Phrase'. These are 12 or 24 words.<br></br><br></br>
                2. Download the so called 'Keystore file'. Keep this file safe! On a USB stick which is in a safe place for example. Not only your Google Drive or something!<br></br><br></br>
                3. Write down (and store in a safe place) the actual private key.<br></br><br></br><br></br>
                <span className='font-mono text-xl font-thin text-gray-800 italic'>
                    Note that when you use a Wallet Manager to create a new wallet you also get the option to recover a wallet. If you choose this option you will be asked to give one of the three above ways to recover (the seed phrase, keystore file or private key).
                </span>
                </span>
                </p>
                </div>
                
            </p>
        </div>
    </div>
    
    </>

    )
}

export default Wallet
