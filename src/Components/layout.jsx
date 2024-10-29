import React from 'react'

function Layout({ children, color, gap}) {
    return (
        <div className={`border flex flex-col  border-${color}  gap-[#${gap}] bg-[#${color}] border-${color} h-[100vh] rounded-xl w-[42vw]`}>
            {children}
        </div>
    )
}

export default Layout
