import React, { useState } from 'react'
import Button from './button'

function Login() {
    const [input, setInput] = useState('')

    const handleOnChange = (event) => {
        setInput(event.target.value)
    }
    // console.log(input)

    return (
        <div className='flex justify-center items-center flex-col h-full gap-[100px]'>
            <div className='bg-white flex-col h-[9rem] rounded-full flex self-center items-center justify-center w-[9rem]'>
                <h1 className='font-bold text-3xl text-[#004643]'>Quiz</h1>
                <p className='text-end text-[14px] relative bottom-[8px] left-[25px] text-[#f6a600]'>App</p>
            </div>
            <div className='w-[80%]'>
                <p className='font-bold text-white'>Enter Your Name:</p>
                <input type="text" placeholder='Here' onChange={handleOnChange} className='text-white w-full bg-transparent outline-none border border-white h-10 rounded-xl p-2 text-sm mt-1' />
            </div>
            <Button inputs={input} name={'login'} />
        </div>
    )
}

export default Login
