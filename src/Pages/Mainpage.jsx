import React from 'react'
import Login from '../Components/Login'
import Layout from '../Components/layout'

function Mainpage() {
    return (
        <div className="flex justify-center items-center bg-[#004643] w-auto h-[100vh]">
            <Layout color='white' gap="91px">
                <Login />
            </Layout>
        </div>
    )
}

export default Mainpage
