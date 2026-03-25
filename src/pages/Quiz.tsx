import Header from "../components/header.tsx";
import QuestionCard from "../components/questionCard.tsx";
import {useState} from "react";
import Navbar from "../components/navbar.tsx";
import questions from "../data/questions.json";

export default function Quiz() {
    const [answers, setAnswers] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [done, setDone] = useState<boolean>(false);

    const doneElement = (
        <>
            <p>done! score: {score}/{questions.length}</p>
            <p>ur answers:</p>
            <ul>
                {answers.map(answer =>
                    <li key={answer}>
                        {answer}
                    </li>)}
            </ul>
        </>
    )

    return (
        <>
            <Header />
            <Navbar />
            {done
                ? doneElement /* nõue: lõpus tabel kokkuvõttega */
                : <QuestionCard setAnswers={setAnswers} setScore={setScore} setDone={setDone} />} {/* nõue: ükshaaval esitatud küsimused */}
        </>
    )
}