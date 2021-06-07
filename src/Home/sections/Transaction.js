import React, { useState } from 'react'
import { ReactComponent as PcSvg } from '../../media/pc-monitor.svg'
import { ReactComponent as FileSvg } from '../../media/files.svg'
import { ReactComponent as FileCheckSvg} from '../../media/files_check.svg'
import ClickToReveal from '../../Components/ClickToReveal'
import CheckButton from '../../Components/CheckButton'

const Transaction = () => {
    const [balance, setBalance] = useState(10)
 
    // Resets file color and image to initial state when user submits another request.
    const ungreenImg = () =>{
        // color
        document.getElementById("pc9").className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800';
        // which svg is shown
        document.getElementById("file_init").style.display = 'block'
        document.getElementById("file_checked").style.display = 'none'
    }
   
    // form for animation of blockchain depening on the input of the form (valid or unvalid request)
    const formcheck = () =>{
        
        ungreenImg()
        // timerfunction for delaying iteration
        const timer = ms => new Promise(res => setTimeout(res, ms))
        // when amount to send does not exceed the balance. 
        async function good_submit(){
            // 9 divs in the 'network-grid'
            for (var i = 1; i <= 9; i++) {
                document.getElementById("pc"+i).className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-green-500'; 
                await timer(150);
                document.getElementById("pc"+i).className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'
            }
            // let the file image stay green and sets the file image with the checkmark
            document.getElementById("pc9").className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-green-500';
            document.getElementById("file_init").style.display = 'none'
            document.getElementById("file_checked").style.display = 'block'
            if (input === ""){
                setBalance(balance - 0.01)
            } else {
                let subtract_amount = 0.01 + parseInt(input)
                setBalance(balance - subtract_amount)
            }
            
        }
        // input of the form
        let input = document.getElementById('input_amount').value
        // when the input is higher than the balance pc image flashes red
        const bad_submit = (num, color) => {
            document.getElementById("pc" + num).className = 'pc_pic flex justify-center hover:animate-wiggle fill-current ' + color;
            setTimeout(function(){
                document.getElementById("pc" + num).className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800';
            }, 1000); 
        }

        if (input > balance){
            bad_submit('1', 'text-red-500')
            }
        
        else {
            good_submit()  
            document.getElementById("input_amount").value = ''  
        }
   
    }

    return (
        <div className='bg-yellow-300 w-full relative'>
            <div  className={` flex flex-col items-center justify-center`}>

                <div id='transactions'className={`flex flex-col justify-center items-center pt-40 md:pt-80 md:mb-40`}>
                    <h1 className= 'text-4xl md:text-8xl font-display text-gray-800 font-bold text-left'>Transactions:</h1>
                    <p className= 'font-mono text-2xl md:text-3xl text-gray-800 m-8'>The cool part.</p>
                </div>

                {/* CONTAINER BENEATH THE TITLE */}
                <div className='p-8 w-full flex flex-col md:flex-row md:justify-end relative'>
                    
                    {/* left container holding the text */}
                    <div className='flex flex-col md:p-8 md:w-4/12'>
                        <div className='p-8'>
                            <p className= 'font-mono text-xl text-gray-800'> You absolute ledg, you have made it pretty far already, we're almost there! But first, we are going to talk about transactions now.<br></br><br></br> 
                            Ask yourself, what information do we need to send to the blockchain to make a transaction?
                            </p>
                        </div>     
                        <div>
                            <div className='flex-col p-8'>
                            <ClickToReveal num='1' text="the amount you want to send"/>
                            </div>
                            <div className='flex-col p-8'>
                            <ClickToReveal num='2' text="your address / public key"/>
                            </div>
                            <div className='flex-col p-8'>
                            <ClickToReveal num='3' text="the recepient's address / public key"/>
                            </div>
                        </div>
                        <div>
                            <p className='font-mono text-xl p-8 text-gray-800'>
                            Let's say you are using the ICONex Wallet Manager and you have 10 ICX in it. If you want to send some ICX to another address, you need to prepare a 'transaction request' in ICONex. for example:
                            </p>
                            <div className='md:p-8'>
                                <div className='font-mono bg-white p-4 rounded'> 
                                    <span className='font-mono underline'>
                                    Transfer: <br></br><br></br></span>
                                    Balance: {`${balance} icx`}<br></br><br></br>
                                    Amount: <input type='number' id='input_amount' 
                                    placeholder={0}
                                    className='font-mono bg-yellow-200 rounded w-12 pl-2'></input><br></br><br></br>
                                    <span className='font-mono text-s'>Fee: 0.01 icx </span><br></br><br></br>
                                    From: <input type='text' readOnly={true} 
                                    placeholder="your address"  className='font-mono bg-yellow-200 rounded w-30 pl-2'></input><br></br><br></br>
                                    To: <input type='text' readOnly={true} 
                                    placeholder="recipient address"  className='font-mono bg-yellow-200 rounded w-30 pl-2'></input><br></br><br></br>
                                    <input 
                                    type='submit'
                                    onClick={formcheck}
                                    className='p-2 rounded-md bg-yellow-300 border border-gray-600'></input>
                                </div>
                            </div>
                            <p className='font-mono md:text-xl p-4 pt-10 text-gray-800 italic'>
                            For every transaction, you will have to pay a transaction fee. Please realize that you’re already paying for using a bank and other payment-services (although it may not always be clear what you are paying them). The transaction fees on blockchains maintain the safety of the system and ensure that there is no third party (for example a bank or creditcard company) needed to process payments.
                            </p>
                        </div>
                    </div>

                    {/* right part of the container holding the network svg scheme */}
                    <div className='md:w-1/2 sticky bg-yellow-300 w-full pt-2 pb-4 bottom-0 z-40 md:z-10'>
                        <div className='flex flex-col sticky md:top-40 '>
                            <p className='text-center font-mono md:text-3xl pb-2 md:pb-8 text-gray-800'>the blockchain:</p>
                            <div className='grid grid-cols-3 gap-6 md:gap-8'>
    
                                <div id='pc1' className='pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800 '>
                                    <PcSvg  className='w-10 pc1 md:w-40 '/>
                                </div>
                                <div id='pc2' className='pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'>
                                    <PcSvg className='w-10 md:w-40 '/>
                                </div>
                                <div id='pc3' className='pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'>
                                    <PcSvg className='w-10 md:w-40'/>
                                </div>
                                <div id='pc8' className='pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'>
                                    <PcSvg className='w-10 md:w-40 '/>
                                </div>
                                <div id='pc9' className='flex justify-center fill-current text-gray-800'>
                                    <FileSvg id='file_init' 
                                        className='block w-10 md:w-40 md:h-60'
                                        style={{display:'block'}}
                                        />
                                    <FileCheckSvg id='file_checked' 
                                        className='block w-10 md:w-40 md:h-60'
                                        style={{display:'none'}}/>
                                </div>

                                <div id='pc4' className='pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'>
                                    <PcSvg className='w-10 md:w-40'/>
                                </div>
                                <div id='pc7' className='pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'>
                                    <PcSvg className='w-10 md:w-40'/>
                                </div>
                                <div id='pc6' className='pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'>
                                    <PcSvg className='w-10 md:w-40'/>
                                </div>
                                <div id='pc5' className='pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'>
                                    <PcSvg className='w-10 md:w-40'/>
                                </div>     

                            </div>
                        </div>
                    </div>
                    
                </div>    
            
            </div>   
        <div className='flex flex-col items-center py-20'>
            <div className='md:w-8/12 flex flex-col md:w-8/12 justify-center p-8 '>
                <p className= 'font-mono text-xl md:text-2xl text-gray-800 p-4 pl-2 md:m-8'>
                    So the transaction-request is submitted to one of the computers that is connected to the blockchain, and if everything checks out the "Excel sheet" is changed. Try and send more than your balance, your transaction will be rejected.<br></br><br></br>
                    Let's say you have hacked the computer that you are sending this transaction-request to, so that it is fooled into approving the transfer of more tokens than you actually have.<br></br><br></br>
                    In that case the next computer that has to approve the transaction-request your submitting will see that something is wrong and your request will be denied. <br></br><br></br>
                    So if you want to 'fool' the network (and send more ICX than you have, for example) you will have to hack every computer in the world that is connected to the network. Considering networks are already massive and continuing to grow, this practically impossible.<br></br><br></br>
                    <span className='font-mono text-base'>* note that even if you send 0 ICX you will still pay a transaction fee. </span>
                </p>
            </div>
            <div className='md:w-3/12 w-8/12 m-8'>
                <CheckButton message='Perfect, last step!' />
            </div>
        </div>
        </div>
    )
}

export default Transaction
