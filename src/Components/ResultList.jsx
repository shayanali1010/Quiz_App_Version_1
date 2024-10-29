import React from 'react'
import { useLocation } from 'react-router-dom'

function ResultList({name,score}) {
    // const { state } = useLocation()
    // let username = localStorage.getItem("input")
    
    return (
        <div className=''>
            <div className="border flex justify-between p-2 m-2 rounded-lg shadow-2xl border-black">
                <span className="">{name}</span>
                <span className="">{score}/10</span>
            </div>
        </div>
    )
}

export default ResultList
