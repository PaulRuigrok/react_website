import React, { useState } from 'react'
import { ReactComponent as PcSvg } from '../../media/pc-monitor.svg'
import { ReactComponent as FileSvg } from '../../media/files.svg'
import { ReactComponent as FileCheckSvg} from '../../media/files_check.svg'
import ClickToReveal from '../../Components/ClickToReveal'

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
   
    const formcheck = () =>{
        // timerfunction for delaying iteration
        const timer = ms => new Promise(res => setTimeout(res, ms))
        // when amount to send does not exceed the balance. 
        async function good_submit(){
            // 9 divs in the 'network-grid'
            for (var i = 1; i <= 9; i++) {
                document.getElementById("pc"+i).className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-green-500'; 
                await timer(250);
                document.getElementById("pc"+i).className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800'
            }
            // let the file image stay green and sets the file image with the checkmark
            document.getElementById("pc9").className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-green-500';
            document.getElementById("file_init").style.display = 'none'
            document.getElementById("file_checked").style.display = 'block'
        }
        // input of the form
        let x = document.getElementById('input_amount').value
        // when the input is higher than the balance pc image flashes red
        const bad_submit = (num, color) => {
            document.getElementById("pc" + num).className = 'pc_pic flex justify-center hover:animate-wiggle fill-current ' + color;
            setTimeout(function(){
                document.getElementById("pc" + num).className = 'pc_pic flex justify-center hover:animate-wiggle fill-current text-gray-800';
            }, 1000); 

        }
        if (x > balance){
            bad_submit('1', 'text-red-500')
            }
        
        else {
            document.getElementById("input_amount").value = ''
            setBalance(balance - x)
            good_submit()      
        }
   
    }

    return (
        <div className='bg-yellow-300 w-full relative'>
            <div id='transactions' className='flex flex-col justify-center items-center pt-40 md:pt-80 md:mb-40'>
                <h1 className= 'text-4xl md:text-8xl font-display text-gray-800 font-bold text-left'>Transactions:</h1>
                <p className= 'font-mono text-2xl md:text-3xl text-gray-800 m-8'>The cool part.</p>
            </div>

            {/* CONTAINER BENEATH THE TITLE */}
            <div className='p-8 w-full flex flex-col md:flex-row md:justify-end relative'>
                
                {/* left container holding the text */}
                <div className='flex flex-col md:p-8 md:w-4/12'>
                    <div className='p-8'>
                        <p className= 'font-mono text-xl md:text-3xl pb-8 text-gray-800'> You absolute ledg, you have made it pretty far already! We are going to talk about transactions.<br></br><br></br> 
                        Ask yourself, what information do we need to send to the blockchain to make a transaction?
                        </p>
                    </div>
                    
                    <div>
                        <div className='flex-col'>
                        <ClickToReveal num='1' text="the amount you want to send"/>
                        </div>
                        <div className='flex-col'>
                        <ClickToReveal num='2' text="your address / public key"/>
                        </div>
                        <div className='flex-col'>
                        <ClickToReveal num='3' text="the recepient's address / public key"/>
                        </div>
                    </div>
                    <div>
                        <p className='font-mono md:text-3xl p-8 text-gray-800'>
                        Let's say you are using the Iconex Wallet Manager and you have 10 ICX in it. If you want to send some ICX to an other address you need to prepare a 'transaction request' in Iconex. for example:
                        </p>
                        <div className='md:w-9/12 p-8'>
                            <form className='font-mono bg-white p-4 rounded' action="javascript:void(0);" onSubmit={()=>formcheck()}> 
                                <span className='font-mono underline'>
                                Transfer: <br></br><br></br></span>
                                Balance: {`${balance} icx`}<br></br><br></br>
                                Amount: <input type='number' id='input_amount' 
                                placeholder='set'
                                className='font-mono bg-yellow-200 rounded w-12 pl-2'></input><br></br><br></br>
                                From: <input type='text' readOnly={true} 
                                placeholder="your address"  className='font-mono bg-yellow-200 rounded w-30 pl-2'></input><br></br><br></br>
                                To: <input type='text' readOnly={true} 
                                placeholder="recipient address"  className='font-mono bg-yellow-200 rounded w-30 pl-2'></input><br></br><br></br>
                                <input 
                                type='submit'
                                onClick={ungreenImg}
                                className='p-2 rounded-md bg-yellow-300 border border-gray-600'></input>
                            </form>
                        </div>
                    </div>
                </div>

                {/* right part of the container holding the network svg scheme */}
                <div className='md:w-1/2 sticky bg-yellow-300 w-full pt-2 pb-4 bottom-0 z-30 md:z-10'>
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
                <div className='h-screen'></div>
            </div>    
        <div className='h-screen bg-white'></div>
        
        </div>
    )
}

export default Transaction
