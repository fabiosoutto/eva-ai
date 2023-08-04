import Card2 from "./Card2"

export default function NavMenu() {
    return (
        <section className="flex items-center justify-center">

            <div className="">
                <ul className="p-1">
                <li className="text-[17px] font-semibold">Escolha os Insignts:</li>
                <Card2>
                    <li>
                        <a href="/recursos-humanos">
                            <h2 className="text-sm">Ferramentas para Recursos Humanos</h2>
                        </a>
                    </li>
                </Card2>
                <Card2>
                    <li>
                        <a href="/treinamentos">
                            <h2 className="text-sm">Treinamentos para sua Empresa</h2>    
                        </a>
                    </li>
                </Card2>
                </ul>
                
            </div>
        </section>
    )
}