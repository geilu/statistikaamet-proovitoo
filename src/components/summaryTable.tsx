import type {Answer} from "../data/answer.ts"

export default function SummaryTable({ answers, }: Readonly<{ answers: Answer[] }>) {
    return (
        <div>
            <table>
                <tr>
                    <th>Küsimus</th>
                    <th>Teie vastus</th>
                    <th>Õige vastus</th>
                    <th>Tulemus</th>
                </tr>
                {answers.map((answer, i) =>
                    <tr key={i}>
                        <td>{answer.question}</td>
                        <td>{answer.selected}</td>
                        <td>{answer.correct}</td>
                        <td>{answer.selected.toLowerCase() === answer.correct.toLowerCase() ? "Õige" : "Vale"}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}