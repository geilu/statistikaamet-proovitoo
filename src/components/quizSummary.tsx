import questions from "../data/questions.json";
import responses from "../data/responses.json";
import SummaryTable from "./summaryTable.tsx";

export default function QuizSummary({ answers, score }: Readonly<{ answers: string[], score: number }>) {
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
        <div>
            <p>valmis! skoor: {score}/{questions.length}</p>
            <p>kokkuvõte:</p>
            <SummaryTable answers={answers} />
            <p>{personalMessage}</p>
        </div>
    )
}