import {useTranslation} from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-row p-[3em] bg-black bg-(image:--white-pattern) bg-size-[1.1em_1.1em] flex-wrap gap-[4em]">
            <div className="bg-(--primary-color) min-w-[10em] min-h-[10em] p-[1em]">
                <h3 id="footer-block" className="headline-small">{t("contacts")}</h3>
            </div>
            <div className="bg-(--primary-color) min-w-[10em] max-h-[7em] p-[1em]">
                <h3 id="footer-block" className="headline-small">{t("quicklink")}</h3>
            </div>
            <div className="bg-(--primary-color) min-w-[10em] min-h-[10em] p-[1em]">
                <h3 id="footer-block" className="headline-small">{t("dataprotection")}</h3>
            </div>
            <div className="bg-(--primary-color) min-w-[10em] min-h-[10em] p-[1em]">
                <h3 id="footer-block" className="headline-small">{t("changelog")}</h3>
            </div>
        </div>
    )
}