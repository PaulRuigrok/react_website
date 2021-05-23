import React , {useState} from 'react'
import {ReactComponent as QuestionSvg} from '../media/question.svg'
import {ReactComponent as ArrowDown} from '../media/arrow_down.svg'

const CheckButton = () => {
    const [toggled, setToggled] = useState(false)
    const toggle = () => setToggled(!toggled);

    return (
        
        <div className={`flex justify-center items-center`} 
        onClick={toggle} 
        style={{width: '500px'}}>
                
            {!toggled ? 
                <div className='relative w-full' >
                    <div className='overflow-hidden'>
                        <div className= {`rounded-3xl px-6 py-4 m-6 border border-gray-200 
                        hover:bg-blue-200 duration-300 cursor-pointer`}
                        >
                            <h1 className='text-center font-mono text-2xl w-full'>got it?</h1>
                        </div>
                    </div>
                    <QuestionSvg className='w-10 h-10 absolute -top-0 -right-10 z-10' />   
                </div>
                :
                <div className='relative w-full' >
                    <div className='overflow-hidden'>
                        <div className= {`rounded-3xl px-6 py-4 m-6 border border-gray-200 
                        cursor-pointer`}
                        >
                            <h1 className='text-center font-mono text-2xl w-full'>awesome! let's continue!</h1>
                        </div>
                    </div>
                    
                        <ArrowDown className='w-10 h-10 absolute bottom-0 -right-10  animate-smallbounce'/>
                    
                </div>
            }
        </div>
    )
}

export default CheckButton
