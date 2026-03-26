export default function Footer() {
    return (
        <div className="flex flex-row p-[3em] bg-black bg-(image:--white-pattern) bg-size-[1.1em_1.1em] flex-wrap gap-[4em]">
            <div className="bg-(--primary-color) min-w-[10em] min-h-[10em] p-[1em]">
                <h3 id="footer-block" className="headline-small">Kontaktid</h3>
            </div>
            <div className="bg-(--primary-color) min-w-[10em] max-h-[7em] p-[1em]">
                <h3 id="footer-block" className="headline-small">Leia kiirelt</h3>
            </div>
            <div className="bg-(--primary-color) min-w-[10em] min-h-[10em] p-[1em]">
                <h3 id="footer-block" className="headline-small">Andmekaitse</h3>
            </div>
            <div className="bg-(--primary-color) min-w-[10em] min-h-[10em] p-[1em]">
                <h3 id="footer-block" className="headline-small">Muudatuste logi</h3>
            </div>
        </div>
    )
}