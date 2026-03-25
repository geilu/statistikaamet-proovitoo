import Header from "../components/header.tsx";
import Navbar from "../components/navbar.tsx";

import TakingAQuiz from "../assets/taking_a_quiz.jpg";

export default function Start() {
    return (
        <>
            <Header />
            <Navbar />
            <div className="m-[2em] flex flex-row">
                <div>
                    <h1 className="font-bold text-4xl my-[1em]">Viktoriin</h1>
                    <p className="text-lg text-[#565656] text-balance my-[1em]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a className="my-[1em] bg-black text-white border-black border-[0.1em] p-[0.7em]
                     hover:bg-white hover:text-black"
                    href="/quiz">Alusta viktoriiniga</a>
                </div>
                <div>
                <div id="quiz-image" className="mr-[2em] relative">
                    <img src={TakingAQuiz} alt="person taking a quiz" width="2500"/>
                </div>
                    <p id="label-large">Foto allikas: https://pixabay.com/photos/omr-sheet-fill-paper-hand-young-3723132/</p>
                </div>
            </div>
        </>
    )
}