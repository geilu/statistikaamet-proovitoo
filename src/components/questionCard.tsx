import questions from '../data/questions.json';
import {type Dispatch, type SetStateAction, useState} from "react";
import type {Answer} from "../data/answer.ts";

export default function QuestionCard({ setAnswers, setScore, setDone, score }: Readonly<{
                                                                                setAnswers: Dispatch<SetStateAction<Answer[]>>,
                                                                                setScore: Dispatch<SetStateAction<number>>,
                                                                                setDone: Dispatch<SetStateAction<boolean>>,
                                                                                score: number
                                                                                }>) {

    const [answered, setAnswered] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>("");
    const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [index, setIndex] = useState<number>(0);

    if (questions.length < 3) {
        return <p>Viktoriinis pole piisavalt küsimusi! Lisa mõni juurde.</p>; // nõue: vähemalt 3 küsimust
    }

    const currentQuestion = questions.at(index)

    if (!currentQuestion) return <p>Küsimus ei laadinud. Palun proovi uuesti</p>;

    const handleEnter = () => {
        if (selected === "") {
            setError("Proovi valida mingi vastus!");
            return;
        } else {
            setError("");
        }
        setAnswered(true);
        if (selected.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            setScore(prev => prev + 1);
            setCorrectAnswer(true);
        } else {
            setCorrectAnswer(false);
        }
        setAnswers(prev => [...prev, {
            question: currentQuestion.question,
            selected: selected,
            correct: currentQuestion.answer
        }]);
    }

    const handleContinue = () => {
        setAnswered(false);
        setSelected("");
        setIndex(prev => prev + 1);
        if (index+1 === questions.length) {
            setDone(true);
        }
    }

    const enterButton =  <button className="btn" onClick={handleEnter}>Sisesta</button>

    const continueButton = <button className="btn" onClick={handleContinue}>Liigu edasi</button>

    return (
        <div className="flex flex-col justify-between ml-[2em] sm:mx-[5em]">
            <div className="my-[2em]">
                <p className="mr-[1em] text-right body-medium mt-[0.5em]">Praegune skoor: <b className="body-medium-bold">{score}/{questions.length}</b></p>
            </div>
            <div>
            <h1 className="headline-large">{currentQuestion.question}</h1>
            {currentQuestion.options.map(o =>
                <div key={o} className="my-[1.5em]">
                    <label className="body-medium flex flex-row">
                        <input id={`option-${o}`}
                               type="radio"
                               name="question"
                               checked={selected.toLowerCase() === o.toLowerCase()}
                               onChange={() => setSelected(o)}
                               value={o}
                               className="hidden"/>
                                {/* radio buttoni stiil */}
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-[1em] shrink-0 ${selected.toLowerCase() === o.toLowerCase()
                                    ? "border-black"
                                    : "border-gray-400"}`}>
                                    {selected.toLowerCase() === o.toLowerCase() &&
                                        <div className="w-3 h-3 rounded-full bg-black shrink-0" /> }
                                </div>
                        {o}
                    </label>
                </div>)}
            <p className="text-[var(--error-color)] text-sm">{error}</p>
            {answered ? continueButton : enterButton}
            <p className={`${answered ? "visible" : "hidden"} body-small`}>{correctAnswer ? ("Tubli! Valisid õige vastuse.") : ("Kahjuks see pole õige vastus!")}</p> {/* nõue: kohene tagasiside */}
            </div>
        </div>
    )
}