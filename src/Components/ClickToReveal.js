import React, {useState} from 'react'

const ClickToReveal = (props) => {
    const [reveal, setReveal] = useState(false)
    const revealAnswer= () => setReveal(true)
    
    return (
       
        <div className='cursor-pointer' onClick={revealAnswer}>
            { reveal ? <p className='font-mono text-xl md:text-3xl pb-8 text-gray-800'>
                {props.num}: {props.text}
            </p>
            : <p className='font-mono text-xl md:text-3xl pb-8 text-gray-800'>
            {props.num}: Click here to reveal!
            </p>
            }
        </div>
    )
}

export default ClickToReveal
