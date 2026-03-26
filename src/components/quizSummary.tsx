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
            <h1 className="headline-large">Kokkuvõte</h1>
            <p className="body-medium my-[1em]">Viktoriin tehtud! Teie lõppskoor on: <b className="text-black">{score}/{questions.length}</b> {/* nõue: lõppskoor */}
            <br/>{personalMessage}</p> {/* nõue: isikupärastatud sõnum */}
            <h3 className="headline-medium">Teie vastused:</h3>
            <SummaryTable answers={answers} /> {/* nõue: tulemuste kokkuvõte tabelina */}
            <a className="btn absolute" href="/">Tagasi algusesse</a>
        </div>
    )
}