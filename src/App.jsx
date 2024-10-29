import Mainpage from './Pages/Mainpage'
import './App.css'
import Quizscreen from './Pages/Quizscreen'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeaderBoard from './Pages/LeaderBoard';



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/quizscreen" element={<Quizscreen />} />
          <Route path="/leaderboard" element={<LeaderBoard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
