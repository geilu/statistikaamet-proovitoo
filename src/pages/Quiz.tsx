import Header from "../components/header.tsx";
import QuestionCard from "../components/questionCard.tsx";
import {useState} from "react";
import Navbar from "../components/navbar.tsx";
import QuizSummary from "../components/quizSummary.tsx";
import type {Answer} from "../data/answer.ts";
import Footer from "../components/footer.tsx";

export default function Quiz() {
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [score, setScore] = useState<number>(0);
    const [done, setDone] = useState<boolean>(false);

    return (
        <>
            <Header />
            <Navbar />
            <div className="min-h-[80vh]">
            {done
                ? <QuizSummary answers={answers} score={score} /> /* nõue: lõpus tabel kokkuvõttega */
                : <QuestionCard setAnswers={setAnswers} setScore={setScore} setDone={setDone} score={score} />} {/* nõue: ükshaaval esitatud küsimused */}
            </div>
            <Footer />
        </>
    )
}