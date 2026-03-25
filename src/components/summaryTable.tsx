import questions from "../data/questions.json"

export default function SummaryTable({ answers, }: {answers: string[]}) {
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
                        <td>{questions[i].question}</td>
                        <td>{answer}</td>
                        <td>{questions[i].answer}</td>
                        <td>{answer.toLowerCase() === questions[i].answer.toLowerCase() ? "Õige" : "Vale"}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}