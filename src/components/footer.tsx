import {useTranslation} from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-row p-[3em] bg-black bg-(image:--white-pattern) bg-size-[1.1em_1.1em] flex-wrap gap-[4em]">
            <div className="bg-(--primary-color) min-w-[10em] min-h-[10em] p-[1em] flex flex-col">
                <h3 id="footer-block" className="headline-small">{t("contacts")}</h3>
                <a href="tel:+3726259300" className="text-white font-bold text-lg mt-[1em]">+372 625 9300</a>
                <a href="mailto:stat@stat.ee" className="text-white font-bold text-lg mt-[1em]">stat@stat.ee</a>
            </div>
            <div className="bg-(--primary-color) min-w-[10em] max-h-[7em] p-[1em] flex flex-col">
                <h3 id="footer-block" className="headline-small">{t("quicklink")}</h3>
                <a href="https://brand.stat.ee/?content=sitemap&lang=en" className="text-white mt-[1em] self-start">{t("sitemap")}</a>
            </div>
            <div className="bg-(--primary-color) min-w-[10em] min-h-[10em] p-[1em] flex flex-col">
                <h3 id="footer-block" className="headline-small">{t("dataprotection")}</h3>
                <a href="https://www.stat.ee/en/statistics-estonia/data-protection-privacy-policy" className="text-white mt-[1em] self-start">{t("privacypolicy")}</a>
                <button className="text-white mt-[1em] self-start cursor-pointer">{t("cookies")}</button>
            </div>
        </div>
    )
}