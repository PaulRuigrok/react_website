import React from 'react'
import iconexWallet from '../../media/iconex_browser.png'
import metamaskWallet from '../../media/metamask_browser.png'
import CheckButton from '../../Components/CheckButton'
import { useInView } from 'react-intersection-observer';

const Wallet = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.05,
      });

    return (
    <div id='wallet' ref={ref} className={`${inView ? 'fade-in' : 'fade-out'} flex flex-col items-center justify-center`}>
        <div className='absolute top-40 h-20 bg-red-500'>{`in view = ${inView}`}</div>
        <div  className= 'md:w-10/12 grid mt-20 p-4 md:p-8'>
            <div className = 'flex flex-col md:flex-row items-center'>    
                <div className='md:w-1/2 grid gap-8'>
                    <h1 className= 'text-4xl md:text-6xl font-display text-gray-800 font-bold text-left'>Wallets:</h1>
                    <p className= 'font-mono md:text-2xl text-gray-800 md:m-8'>
                    Okay, so we’ve got an Excel sheet that contains addresses and balances.<br></br><br></br>
                    And we call an address on that Excel a wallet, or a public key.<br></br><br></br>
                    <span className='bg-blue-100 p-2 italic leading-7'>! -> public key = the address of a wallet</span><br></br><br></br>
                    You can create an address/wallet by sending a 'create-wallet' message to one of the computers of the blockchain network. <br></br><br></br>
                    When a wallet is created, there are actually 3 things set-up for you:<br></br><br></br>
                    1. an initial balance (0 coins)<br></br>
                    2. a public key (a big string of numbers & characters)<br></br>
                    3. a private key (also a big string of numbers & characters)<br></br><br></br>
                    The 2 keys form a pair. Think of them like they share the same DNA. How this works exactly is beyond the scope of this website (and maybe also beyond my brain capacity). But, if you want to know more about it you can google 'sha encryption'.
                    <br></br><br></br><br></br>
                    Okay! So:<br></br><br></br>
                    <span className='bg-blue-100 p-2 italic leading-7'>! -> a wallet = a balance and a [ public key * private key ] -pair</span>
                    </p>
                    <div className='my-20 justify-center w-8/12 md:w-1/2'>
                        <CheckButton message="cool, let's continue"/>
                    </div>               
                </div>
            </div>   
        </div>

        <div id='walletmanagers' className= 'w-11/12 md:w-10/12 flex flex-col md:flex-row justify-center md:items-start p-4 md:p-8 bg-gray-100 rounded-md md:mt-80'>
            <div className ='md:sticky top-40'>
                <h1 className= 'text-4xl md:text-6xl font-display text-gray-800 font-bold text-left'>Wallets Managers:</h1>    
            </div>
            <div>
                <p className= 'font-mono md:text-2xl text-gray-800 md:m-8'>
                    The word 'wallet' is being thrown around a lot. I find the word a bit miss-used sometimes. You know now what a wallet is, right?<br></br><br></br>
                    Maybe you've heard of MetaMask or TrustWallet. In reality, these are not wallets, but apps that manage your wallet. They keep track of the balance and hold the [ public * private ] keypair.<br></br><br></br>
                    Let's call these apps 'Wallet Managers'.<br></br><br></br>
                    When you want to make a transaction from your wallet you can use a Wallet Manager instead of manually sending a message with code to the blockchain containing the specifications of the transaction you want to make.
                    <br></br><br></br><br></br>
                    two examples of Wallet Managers:</p>
                <div className='flex flex-col md:flex-row justify-around items-center mt-8  md:mt-10 '>
                    <div className='md:w-2/6'>
                        <img src={metamaskWallet} alt='Iconex_wallet' className='rounded-md shadow-2xl w-full'/>
                        <p className= 'font-mono md:text-xl text-gray-400 font-thin md:mt-8 mb-20 p-4 italic'> MetaMask:
                        Can connect with several different blockchains. In the image you can see it has the Ethereum Mainnet selected and that this wallet/address has some Ether in it. 'Account 1' is just the a reference to the wallet set within the Wallet Manager, the '0xAc1c...be72' is the public key of the wallet. 
                        </p>
                    </div>
                    <div className='md:w-2/6'>
                        <img src={iconexWallet} alt='Iconex_wallet' className='rounded-md shadow-2xl w-full'/>
                        <p className= 'font-mono md:text-xl text-gray-400 font-thin md:mt-8 p-4 italic '>ICONex: The Google Chrome-extension (an app inside your chrome-browser) which lets you connect to the ICON Blockchain. You can see that the address ICONex is managing, has some ICX in it. The long strings are the public addresses. Like the MetaMask wallet, you can see the 'hx....' strings have 'a name'. Naming a wallet inside you Wallet Manager makes it easier to know which wallet you’re managing (as opposed to memorizing the long string of characters that is your public key)
                        </p>
                    </div> 
                </div>
                <p className='font-mono p-4 text-xl text-gray-800'>A Wallet Manager gets the balance of your wallet by looking at the blockchain it is connected to. It's simply just showing it, the Wallet Manager does not "contain" coins. It does however contain the private key of your address/wallet which is needed to send out coins from your wallet.</p> 
            </div> 
        </div>
        <div className='w-11/12 md:w-5/12 grid gap-8 md:mt-20 md:mb-60'>
            <div className='mx-6 mt-20 md:m-8 '>
                <p className='md:text-2xl text-gray-800'>
                    Alright! So:<br></br><br></br>
                    <span className='bg-blue-100 p-2 italic leading-7'>! -> apps like MetaMask are not really wallets but rather Wallet
                    <span className='font-bold'> Managers</span></span>
                </p>
            </div>
            <div className='md:flex md:justify-center'>
                <div className= 'shadow-xl md:my-8 my-4 p-8 md:p-0 rounded'>
                    <p className='md:text-2xl font-mono text-red-600 md:p-6'>Important note: When you create a wallet with a Wallet Manager you will get a few ways to store a 'recovery-method'. This is in case you forget your password, your computer dies or any of the bad things that can happen in life, actually happen. You can use this recovery method to rebuild your wallet, including the private key. Keep in mind, if you don't have the private key of an address/wallet you CAN NOT transfer funds from that address (aka: you lost the ability to send out the money from that wallet.)</p>
                </div>
        </div>
        <div>
            <p className ='font-mono text-gray-800 md:text-2xl'>
                Most Wallet Managers give you three options:<br></br><br></br>
                1. Write down the so called 'Seed Phrase' and store it in a safe place. These are 12 or 24 (sort of) randomly generated words.<br></br><br></br>
                2. Download the so called 'Keystore file'. Keep this file safe! On a USB stick which is in a safe place for example. Not only your Google Drive or something! (in case you get hacked or accidently leave your Google Drive open somewhere)<br></br><br></br>
                3. Write down the actual private key and store it in a safe place.<br></br><br></br><br></br>
            <span className='font-mono font-thin text-gray-800 italic pt-8'>
                Note that when you use a Wallet Manager to create a new wallet, you also get the option to recover a wallet. If you choose this option you will be asked to provide one of those three listed pieces of data to recover the wallet (the seed phrase, keystore file or private key).<br></br><br></br>Please realize that anyone can gain access to your wallet, if they know one of those three listed pieces of data. In which case they can send out the coins from your wallet. So never, for example, fill in the Seed Phrase words on any website or something, your wallet will be emptied.
            </span>
            </p>     
        </div>   
            <div className='md:w-1/2 w-8/12 md:justify-self-end mt-8'>
                <CheckButton message="you beast, scroll on than!"/>
            </div>
        </div>           
    </div>

    )
}

export default Wallet
