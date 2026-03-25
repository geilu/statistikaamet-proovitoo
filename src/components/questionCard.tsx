import questions from '../data/questions.json';
import {type Dispatch, type SetStateAction, useState} from "react";
import type {Answer} from "../data/answer.ts";

export default function QuestionCard({ setAnswers, setScore, setDone }: Readonly<{
                                                                                setAnswers: Dispatch<SetStateAction<Answer[]>>,
                                                                                setScore: Dispatch<SetStateAction<number>>,
                                                                                setDone: Dispatch<SetStateAction<boolean>>
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

    const enterButton =  <button className="btn mt-[2em]r" onClick={handleEnter}>Sisesta</button>

    const continueButton = <button className="btn mt-[2em]" onClick={handleContinue}>Liigu edasi</button>

    return (
        <div className="m-[5em]">
            <h1 className="headline-large">{currentQuestion.question}</h1>
            {currentQuestion.options.map(o =>
                <div key={o} className="my-[1em]">
                    <label>
                    <input id={`option-${o}`}
                           type="radio"
                           name="question"
                           checked={selected.toLowerCase() === o.toLowerCase()}
                           onChange={() => setSelected(o)}
                           value={o} />
                    {o}</label>
                </div>)}
            <p className="label-large">{error}</p>
            {answered ? continueButton : enterButton}
            <p className={answered ? "visible" : "hidden"}>{correctAnswer ? ("Tubli! Valisid õige vastuse.") : ("Kahjuks see pole õige vastus!")}</p> {/* nõue: kohene tagasiside */}
        </div>
    )
}