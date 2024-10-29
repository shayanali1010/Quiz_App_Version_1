import React from 'react'
import Layout from '../Components/layout'
import LeaderResult from '../Components/LeaderResult'
import ResultList from '../Components/ResultList'


function LeaderBoard() {
    const item = localStorage.getItem("users")
    const itemParse = JSON.parse(item)
    


    return (
        <>
            <div className='flex justify-center items-center w-auto h-[100vh]'>
                <Layout color="black" gap="0">
                    <LeaderResult />
                    <div className=" overflow-auto h-[60%]">
                        {
                            itemParse?.map((e) => {
                                return (
                                    <ResultList key={e.name} name={e.inputs} score={e.score} />
                                )
                            })
                        }
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default LeaderBoard
