import React, { useState } from 'react'
import Quizoptions from './Quizoptions'
import Button from './button'
import { useNavigate } from 'react-router-dom';

function Quizcomponent() {
    const quizQuestions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Leo Tolstoy"],
            answer: "William Shakespeare"
        },
        {
            question: "Which is the largest ocean in the world?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "How many continents are there in the world?",
            options: ["5", "6", "7", "8"],
            answer: "7"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Thailand", "Japan", "South Korea"],
            answer: "Japan"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2", "H2O", "O2", "CO2"],
            answer: "H2O"
        },
        {
            question: "Who is the author of 'Harry Potter' series?",
            options: ["J.K. Rowling", "Mark Twain", "George Orwell", "Agatha Christie"],
            answer: "J.K. Rowling"
        },
        {
            question: "What is the largest mammal on Earth?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
            answer: "Blue Whale"
        },
        {
            question: "Which country hosted the 2021 Summer Olympics?",
            options: ["USA", "Japan", "China", "Brazil"],
            answer: "Japan"
        }
    ];
    const [index, setIndex] = useState(0)
    const [selectedOption, setselectted] = useState('')
    const [score, setScore] = useState(0)
    const nevigate = useNavigate('')
    console.log(score)

    const priviousBtn = () => {
        if (index === 0) {
            nevigate('/')
        }
        else {
            if (score === 0) {
                setScore(0)
                setIndex(index - 1)
            }
            else {
                setIndex(index - 1)
                setScore(score - 1)
            }
        }
    }

    return (
        <div className='gap-[60px] flex flex-col items-center'>
            <div className='self-start flex w-[58%] mt-3 px-6 justify-between border-black'>
                <button className='text-[#004643] font-bold' onClick={priviousBtn}>Previous</button>
                <p className='text-center font-bold'>{index + 1}/{quizQuestions.length}</p>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center w-[70%] border-[#dad7d7f2] border rounded-xl shadow-2xl
                 gap-2 justify-center'>
                    <div className='relative bg-white bottom-[47px] h-[4rem] w-[4rem] rounded-full border-[5px] text-[#004643] font-bold flex justify-center items-center text-[32px] border-[#004643]'>30</div>
                    <p className='relative bottom-[32px] text-center font-bold '>{quizQuestions?.[index]?.question}</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-full items-center'>
                {
                    quizQuestions?.[index]?.options?.map((e, i) => {
                        return (

                            <Quizoptions value={e} key={i} selectedValue={selectedOption} setselectted={setselectted} />
                        )
                    })
                }

            </div>
            <Button setIndex={setIndex} name={'Next'} index={index} selectedOption={selectedOption} answer={quizQuestions?.[index]?.answer} setScore={setScore} score={score} setselectted={setselectted} />


        </div>
    )
}

export default Quizcomponent
