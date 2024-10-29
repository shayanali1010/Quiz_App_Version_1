import React from 'react'
import { useNavigate } from 'react-router-dom'

function LeaderResult() {
    let username = localStorage.getItem("name")
    let score = localStorage.getItem("score")
    const nevigate = useNavigate('');

    const handleBack=()=>{
        nevigate('/')
    }
    return (
        <div className='w-[100%] h-[40%] bg-[#004643] rounded-t-lg gap-[35%] flex flex-col'>
            <div className='p-2 flex gap-[35%] border-b-2'>
                <span onClick={handleBack} className='text-white cursor-pointer'>Back</span>
                <h2 className='text-white font-bold'>Leaderboard</h2>
            </div>
            <div className="p-3 flex flex-col justify-center items-center h-[21%]">
                <h2 className="text-white font-bold">Name: {username}</h2>
                <span className="text-white ">Score: {score}/10</span>
            </div>
        </div>
    )
}

export default LeaderResult
