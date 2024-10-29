import { useNavigate } from 'react-router-dom'

function button({ inputs, name, setIndex, index, selectedOption, answer, setScore, score, setselectted }) {
  const navigate = useNavigate()
  // console.log(inputs,'input')

  // console.log(inputs,'scor')
  const username=localStorage.getItem('name')
  const users = JSON.parse(localStorage.getItem('users')) ||[]
  // console.log(users)
  const HandleNext = () => {

    if (selectedOption === answer) {
      if (index === 9) {
        setScore(++score)
        navigate('/leaderboard')
        localStorage.setItem("score", score)
      }
      else {
        setScore(++score)
        setIndex(++index)
      }
    }
    else if (selectedOption === '') {
      alert('Please select an option')
    }
    else {
      if (index === 9) {
        navigate('/leaderboard')
        localStorage.setItem("score", score)
        const updatedUsers = users.map((user) =>
          user.inputs === username ? {...user,score} : user
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers)); 
      }
      else {
        setIndex(++index)
      }
    }
    setselectted('')
  }
  const HandlePrev = () => {
    if (inputs.trim() === '') {
      alert('Plzz Fill');
    } else {
      navigate('/quizscreen');
      if (users.find((user) => user.name === inputs)) {
        alert("User already exists!"); 
      } else {
        users.push({ inputs, score: 0 }); 
        localStorage.setItem("users", JSON.stringify(users)); 
        localStorage.setItem('name',inputs)
      }
    }
  }
  return (
    <>
      <button className={`w-[79%] h-10 rounded-xl ${name === 'Next' ? 'bg-[#004643]' : 'bg-[#f8c660]'} text-white font-bold `} onClick={() => {
        if (name === 'Next') {
          HandleNext()
        }
        else {
          HandlePrev()
        }
      }}>{name}</button>
    </>
  )
}

export default button
