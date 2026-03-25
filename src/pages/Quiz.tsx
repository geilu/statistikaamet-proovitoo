import Header from "../components/header.tsx";
import QuestionCard from "../components/questionCard.tsx";
import {useState} from "react";
import Navbar from "../components/navbar.tsx";
import QuizSummary from "../components/quizSummary.tsx";

export default function Quiz() {
    const [answers, setAnswers] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [done, setDone] = useState<boolean>(false);

    return (
        <>
            <Header />
            <Navbar />
            {done
                ? <QuizSummary answers={answers} score={score} /> /* nõue: lõpus tabel kokkuvõttega */
                : <QuestionCard setAnswers={setAnswers} setScore={setScore} setDone={setDone} />} {/* nõue: ükshaaval esitatud küsimused */}
        </>
    )
}