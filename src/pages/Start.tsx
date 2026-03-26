import Header from "../components/header.tsx";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

import TakingAQuiz from "../assets/taking_a_quiz.jpg";
import { useTranslation } from "react-i18next";

export default function Start() {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <Navbar />
            <div className="m-[2em] mt-[4em] min-h-[70vh] flex flex-col gap-6 sm:flex-row">
                <div className="max-w-[45em]">
                    <h1 className="headline-large">{t('headline')}</h1>
                    <p className="body-medium text-balance mt-[1.5em]">
                        {t("intro")}
                    </p>
                    <a className="btn self-start"
                    href="/quiz">{t("start")}</a>
                </div>
                <div>
                <div id="quiz-image-container" className="mr-[2em] relative">
                    <img src={TakingAQuiz} alt="person taking a quiz" width="2500"/>
                </div>
                    <p className="label-large">{t("source")}: https://pixabay.com/photos/omr-sheet-fill-paper-hand-young-3723132/</p>
                </div>
            </div>
            <Footer />
        </>
    )
}