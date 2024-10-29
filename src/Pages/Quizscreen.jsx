import React from 'react'
import Layout from '../Components/layout'
import Quizcomponent from '../Components/Quizcomponent'

function Quizscreen() {
  return (
    <div className='flex justify-center items-center w-auto h-[100vh]'>
      <Layout color='black' gap="91px">
        <Quizcomponent/>
      </Layout>
    </div>
  )
}

export default Quizscreen
