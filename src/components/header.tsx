export default function Header() {
    const aStyle: string = "block hover:bg-white text-white hover:text-black px-[0.4em]";

    return (
        <div className="bg-black w-full h-[2.5em] flex flex-row justify-between items-center px-[3.5em] text-white">
            <div id="header-left" className="w-full">
                <h1 className="font-bold">Proovitöö</h1>
            </div>
            <div id="header-center" className="w-full flex flex-row justify-center gap-[2em]">
                <a className={aStyle}
                    href="https://et-ee.facebook.com/Statistikaamet" target="_blank" rel="noopener noreferrer">fb</a>
                <a className={aStyle}
                   href="https://x.com/eestistatistika" target="_blank" rel="noopener noreferrer">x</a>
                <a className={aStyle}
                   href="https://www.linkedin.com/company/statistikaamet-statistics-estonia/" target="_blank" rel="noopener noreferrer">in</a>
                <a className={aStyle}
                   href="https://www.youtube.com/user/Statistikaamet/featured" target="_blank" rel="noopener noreferrer">yt</a>
                <a className={aStyle}
                   href="https://www.instagram.com/eesti_statistika/" target="_blank" rel="noopener noreferrer">ig</a>
            </div>
            <div id="header-right" className="w-full flex flex-row justify-end items-center gap-[1.5em]">
                <a className="font-bold hover:underline text-sm"
                    href="https://www.stat.ee/et/ligipaasetavus" target="_blank" rel="noopener noreferrer">Ligipääsetavus</a>

                <div className="flex flex-row gap-[0.5em] text-sm font-bold">
                    <a>EST</a>
                    <p>|</p>
                    <a>ENG</a>
                </div>
            </div>

        </div>
    )
}