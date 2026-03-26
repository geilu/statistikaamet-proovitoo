import Header from "../components/header.tsx";
import Navbar from "../components/navbar.tsx";

import TakingAQuiz from "../assets/taking_a_quiz.jpg";

export default function Start() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="m-[2em] mt-[4em] flex flex-row">
                <div>
                    <h1 className="headline-large">Viktoriin</h1>
                    <p className="body-medium text-balance mt-[1.5em]">
                        Selles viktoriinis ei ole võimalik küsimuste vahel edasi-tagasi liikuda, seega tasub iga vastus enne kinnitamist hoolikalt läbi mõelda.
                        Küsimused on erinevate teemade kohta, iga vastuse esitamise järel saate kohese tagasiside, kas vastus on õige või vale.
                        Viktoriini lõpus on näha põhjalikku kokkuvõtet lõpptulemuse, kõikide küsimuste ja Teie poolt antud vastuste kohta. Toredat vastamist! :)
                    </p>
                    <a className="btn absolute"
                    href="/quiz">Alusta viktoriiniga</a>
                </div>
                <div>
                <div id="quiz-image-container" className="mr-[2em] relative">
                    <img src={TakingAQuiz} alt="person taking a quiz" width="2500"/>
                </div>
                    <p className="label-large">Foto allikas: https://pixabay.com/photos/omr-sheet-fill-paper-hand-young-3723132/</p>
                </div>
            </div>
        </>
    )
}