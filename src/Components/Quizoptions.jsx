import React from 'react'

function Quizoptions({ value, key, setselectted, selectedValue }) {
  const getValue = (event) => {
    const selectedValue = event?.target?.value
    setselectted(selectedValue)
  }

  return (
    <div className='w-[70%] h-10 flex justify-between items-center px-3 border border-[#dad7d7f2] shadow-2xl rounded-xl'>
      <span className=''>{value}</span>
      <input type="radio" value={value} name={key + 1} checked={value === selectedValue} onChange={getValue} />
    </div>
  )
}

export default Quizoptions
