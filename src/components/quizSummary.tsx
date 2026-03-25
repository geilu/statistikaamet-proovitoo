import questions from "../data/questions.json";
import responses from "../data/responses.json";
import SummaryTable from "./summaryTable.tsx";
import type {Answer} from "../data/answer.ts";

export default function QuizSummary({ answers, score }: Readonly<{ answers: Answer[], score: number }>) {
    let personalMessage: string = "";

    const scoreThreshold: number = score / questions.length;

    // Isikupärastatud sõnumeid saab seadistada failis responses.json, need peaksid olema seal järjestuses halvimast parimani
    const responsesLength: number = responses.length;

    for (let i = 0; i < responsesLength; i++) {
        if (scoreThreshold <= (i+1)/responsesLength) {
            const matchingResponse = responses.at(i);
            personalMessage = matchingResponse?.response ?? "Tubli!"; // fallback "Tubli!" peale juhul kui mingil põhjusel ei saanud failist sõnumit
            break;
        }
    }

    return (
        <div className="m-[2em]">
            <p>valmis! skoor: {score}/{questions.length}</p>
            <p>kokkuvõte:</p>
            <SummaryTable answers={answers} />
            <p>{personalMessage}</p>
            <a className="btn absolute mt-[1em]" href="/">Tagasi algusesse</a>
        </div>
    )
}