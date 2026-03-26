import questionsEt from "../data/questions.et.json";
import questionsEn from "../data/questions.en.json";
import responsesEt from "../data/responses.et.json";
import responsesEn from "../data/responses.en.json";
import SummaryTable from "./summaryTable.tsx";
import type {Answer} from "../data/answer.ts";
import {useTranslation} from "react-i18next";

export default function QuizSummary({ answers, score }: Readonly<{ answers: Answer[], score: number }>) {
    const { t, i18n } = useTranslation();

    let personalMessage: string = "";
    const questions = i18n.language === "en" ? questionsEn : questionsEt;
    const responses = i18n.language === "en" ? responsesEn : responsesEt;

    const scoreThreshold: number = score / questions.length;

    // Isikupärastatud sõnumeid saab seadistada failis responses.(keelekood).json, need peaksid olema seal järjestuses halvimast parimani
    const responsesLength: number = responses.length;

    for (let i = 0; i < responsesLength; i++) {
        if (scoreThreshold <= (i+1)/responsesLength) {
            const matchingResponse = responses.at(i);
            personalMessage = matchingResponse?.response ?? t("fallbackResponse"); // fallback "Tubli!"/"Nice!" peale juhul kui mingil põhjusel ei saanud failist sõnumit
            break;
        }
    }

    return (
        <div className="m-[2em]">
            <h1 className="headline-large">{t("summary")}</h1>
            <p className="body-medium my-[1em]">{t("endResult")}: <b className="text-black">{score}/{questions.length}</b> {/* nõue: lõppskoor */}
            <br/>{personalMessage}</p> {/* nõue: isikupärastatud sõnum */}
            <h3 className="headline-medium">{t("yourAnswerSummary")}:</h3>
            <SummaryTable answers={answers} /> {/* nõue: tulemuste kokkuvõte tabelina */}
            <a className="btn self-start" href="/">{t("backToBeginning")}</a>
        </div>
    )
}