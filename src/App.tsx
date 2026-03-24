import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start.tsx'
import Quiz from './pages/Quiz.tsx'
import Results from './pages/Results.tsx'
import './index.css'

function App() {
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.backgroundColor = "white"
    return (
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    )
}

export default App