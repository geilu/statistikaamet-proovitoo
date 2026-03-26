import {type Dispatch, type SetStateAction, useState} from "react";
import type {Answer} from "../data/answer.ts";
import {useTranslation} from "react-i18next";
import questionsEn from "../data/questions.en.json";
import questionsEt from "../data/questions.et.json";

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

    const { t, i18n } = useTranslation();
    const questions = i18n.language === "en" ? questionsEn : questionsEt;

    if (questions.length < 3) {
        return <p>{t("notEnoughQuestions")}</p>; // nõue: vähemalt 3 küsimust
    }

    const currentQuestion = questions.at(index)

    if (!currentQuestion) return <p>{t("didntLoadError")}</p>;

    const handleEnter = () => {
        if (selected === "") {
            setError(t("chooseOptionError"));
            return;
        } else {
            setError("");
        }

        const selectedIndex = parseInt(selected);
        const correctIndex = currentQuestion.options.findIndex(
            o => o.toLowerCase() === currentQuestion.answer.toLowerCase()
        );
        const isCorrect = selectedIndex === correctIndex;

        setAnswered(true);
        setCorrectAnswer(isCorrect);

        if (isCorrect) {
            setScore(prev => prev + 1);
        }
        setAnswers(prev => [...prev, {
            questionIndex: index,
            selectedIndex: selectedIndex,
            correctIndex: correctIndex
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

    const enterButton =  <button className="btn" onClick={handleEnter}>{t("enter")}</button>

    const continueButton = <button className="btn" onClick={handleContinue}>{t("continue")}</button>

    return (
        <div className="flex flex-col justify-between ml-[2em] sm:mx-[5em]">
            <div className="my-[2em]">
                <p className="mr-[1em] text-right body-medium mt-[0.5em]">{t("currentScore")}: <b className="body-medium-bold">{score}/{questions.length}</b></p>
            </div>
            <div>
            <h1 className="headline-large">{currentQuestion.question}</h1>
            {currentQuestion.options.map((o, i) =>
                <div key={i} className="my-[1.5em]">
                    <label className={`text-(--primary-dark-grey) flex flex-row cursor-pointer ${answered && selected !== i.toString() ? "text-gray-300" : ""}`}>
                        <input id={`option-${i}`}
                               type="radio"
                               name="question"
                               checked={selected === i.toString()}
                               onChange={() => setSelected(i.toString())}
                               value={i}
                               className="hidden"
                                disabled={answered}
                                />
                                {/* radio buttoni stiil */}
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-[1em] shrink-0 ${
                            selected === i.toString()
                                ? "border-black"
                                : answered ? "border-gray-200" : "border-gray-400"
                        }`}>
                            {selected === i.toString() &&
                                <div className="w-3 h-3 rounded-full bg-black shrink-0" />}
                        </div>
                        {o}
                    </label>
                </div>)}
            <p className="text-[var(--error-color)] text-sm">{error}</p>
            {answered ? continueButton : enterButton}
            <p className={`${answered ? "visible" : "hidden"} body-small`}>{correctAnswer ? t("enteredCorrectAnswer") : t("enteredWrongAnswer")}</p> {/* nõue: kohene tagasiside */}
            </div>
        </div>
    )
}