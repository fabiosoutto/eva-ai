export default function Header() {
    return (
        <section className="flex flex-wrap items-center justify-center h-[120]">

            <div className="flex flex-col">
                <a href="https://evolluo.com/" target="_blank">
                    <img src="/images/v2.png" width={200} height={200}/>
                </a>
                
            </div>

            <div className="flex flex-col">
                <span className="font-extrabold text-[20px]">EVA AI Ferramenta para RH e T&D</span>
            </div>

            <div className="flex flex-col mt-4">
                <img src="/images/eva-chair.png" width={200} height={200}/>
            </div>
        </section>
    )
}