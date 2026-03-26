import type {Answer} from "../data/answer.ts"
import {useTranslation} from "react-i18next"
import questionsEn from "../data/questions.en.json"
import questionsEt from "../data/questions.et.json"

export default function SummaryTable({ answers, }: Readonly<{ answers: Answer[] }>) {
    const tableHeaderStyle: string = "text-left py-3 px-4 body-small-bold";
    const tableContentStyle: string = "py-3 px-4 body-small";

    const { t, i18n } = useTranslation();

    const questions = i18n.language === "en" ? questionsEn : questionsEt;

    return (
        <div className="my-[1em] overflow-x-auto">
            <table className="w-full border-collapse mt-4">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        <th className={tableHeaderStyle}>{t("question")}</th>
                        <th className={tableHeaderStyle}>{t("yourAnswer")}</th>
                        <th className={tableHeaderStyle}>{t("correctAnswer")}</th>
                        <th className={tableHeaderStyle}>{t("result")}</th>
                    </tr>
                </thead>
                <tbody>
                {answers.map((answer, i) => {
                    const question = questions[answer.questionIndex];
                    return (
                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className={tableContentStyle}>{question.question}</td>
                            <td className={tableContentStyle}>{question.options[answer.selectedIndex]}</td>
                            <td className={tableContentStyle}>{question.options[answer.correctIndex]}</td>
                            <td className={`${tableContentStyle} font-medium`}>{answer.selectedIndex === answer.correctIndex ? t("correctShort") : t("wrongShort")}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}