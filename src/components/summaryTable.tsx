import type {Answer} from "../data/answer.ts"

export default function SummaryTable({ answers, }: Readonly<{ answers: Answer[] }>) {
    const tableHeaderStyle: string = "text-left py-3 px-4 body-small-bold";
    const tableContentStyle: string = "py-3 px-4 body-small";
    return (
        <div className="my-[1em] overflow-x-auto">
            <table className="w-full border-collapse mt-4">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        <th className={tableHeaderStyle}>Küsimus</th>
                        <th className={tableHeaderStyle}>Teie vastus</th>
                        <th className={tableHeaderStyle}>Õige vastus</th>
                        <th className={tableHeaderStyle}>Tulemus</th>
                    </tr>
                </thead>
                <tbody>
                {answers.map((answer, i) =>
                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className={tableContentStyle}>{answer.question}</td>
                        <td className={tableContentStyle}>{answer.selected}</td>
                        <td className={tableContentStyle}>{answer.correct}</td>
                        <td className={`${tableContentStyle} font-medium`}>{answer.selected.toLowerCase() === answer.correct.toLowerCase() ? "Õige" : "Vale"}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}