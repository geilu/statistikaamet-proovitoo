import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'et',
        resources: {
            et: {
                translation: {
                    start: "Alusta viktoriiniga",
                    intro: "Selles viktoriinis ei ole võimalik küsimuste vahel edasi-tagasi liikuda, seega tasub iga vastus enne kinnitamist hoolikalt läbi mõelda. Küsimused on erinevate teemade kohta, iga vastuse esitamise järel saate kohese tagasiside, kas vastus on õige või vale. Viktoriini lõpus on näha põhjalikku kokkuvõtet lõpptulemuse, kõikide küsimuste ja Teie poolt antud vastuste kohta. Toredat vastamist! :)",
                    headline: "Viktoriin",
                    source: "Foto allikas",
                    accessibility: "Ligipääsetavus",
                    pageTitle: "Proovitöö",
                    contacts: "Kontaktid",
                    quicklink: "Leia kiirelt",
                    dataprotection: "Andmekaitse",
                    changelog: "Muudatuste logi",
                    summary: "Kokkuvõte",
                    endResult: "Viktoriin tehtud! Teie lõppskoor on",
                    yourAnswerSummary: "Teie vastused",
                    question: "Küsimus",
                    yourAnswer: "Teie vastus",
                    correctAnswer: "Õige vastus",
                    result: "Tulemus",
                    backToBeginning: "Tagasi algusesse",
                    fallbackResponse: "Tubli!",
                    notEnoughQuestions: "Viktoriinis pole piisavalt küsimusi! Lisa mõni juurde.",
                    didntLoadError: "Küsimus ei laadinud. Palun proovi uuesti",
                    chooseOptionError: "Proovi valida mingi vastus!",
                    enter: "Sisesta",
                    continue: "Liigu edasi",
                    currentScore: "Praegune skoor",
                    enteredCorrectAnswer: "Tubli! Valisid õige vastuse.",
                    enteredWrongAnswer: "Kahjuks see pole õige vastus!",
                    correctShort: "Õige",
                    wrongShort: "Vale",
                    sitemap: "Sisukaart",
                    cookies: "Küpsiste sätted",
                    privacypolicy: "Andmekaitse"
                }
            },
            en: {
                translation: {
                    start: "Start quiz",
                    intro: "You are unable to move between questions in this quiz, so you should carefully think each answer through before confirming. Questions are on various topics, after submitting each answer you will receive immediate feedback whether the answer was correct or incorrect. At the end of the quiz you can see a comprehensive summary about your final score, all the questions, and your answers to them. Happy answering! :)",
                    headline: "Quiz",
                    source: "Photo source",
                    accessibility: "Accessibility",
                    pageTitle: "Internship project",
                    contacts: "Contacts",
                    quicklink: "Quick links",
                    dataprotection: "Data protection",
                    changelog: "Changelog",
                    summary: "Summary",
                    endResult: "Quiz completed! Your end result is",
                    yourAnswerSummary: "Your answers",
                    question: "Question",
                    yourAnswer: "Your answer",
                    correctAnswer: "Correct answer",
                    result: "Result",
                    backToBeginning: "Back to Start",
                    fallbackResponse: "Nice!",
                    notEnoughQuestions: "Not enough questions in the quiz! Add some more.",
                    didntLoadError: "Question failed to load. Please try again",
                    chooseOptionError: "Try choosing one of the options!",
                    enter: "Enter",
                    continue: "Continue",
                    currentScore: "Current score",
                    enteredCorrectAnswer: "Correct answer!",
                    enteredWrongAnswer: "Incorrect answer!",
                    correctShort: "Correct",
                    wrongShort: "Incorrect",
                    sitemap: "Sitemap",
                    cookies: "Cookie settings",
                    privacypolicy: "Privacy policy"
                }
            }
        }
});