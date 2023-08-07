import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Link from "next/link"


export default function Home() {


  return (
    <section className="flex flex-wrap items-center justify-center w-[100%] h-[100vh] p-[30px]">

      <div className="flex flex-col items-center justify-center w-[100%]">
        <Link href="https://evolluo.com/" target="_blank">
          <img src="/images/v2.png" width={200} height={200}/>
        </Link>
        <p className="text-[25px] md:text-[40px] mb-[30px]">Seja bem-vindo(a) a <span className="font-extrabold text-[#2188E8]">Eva!</span></p>
        <h2 className="text-[30px] md:text-[60px]">Resolva tarefas do <span className="font-extrabold text-[#2188E8]">RH e T&D</span></h2>
        <h2 className="text-[30px] md:text-[60px] mb-[50px]">e crie conteúdos em segundos.</h2>
        
        <div className="md:w-full flex flex-col items-center">
          
          <Link href="/treinamentos">
            <Card>
              <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={30} height={30}/>
                <h2>Ferramentas para Criar Treinamentos na Empresa</h2>
            </Card>
          </Link>

          <Link href="/recursos-humanos">
            <Card>
              <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={30} height={30}/>
                <h2>Ferramentas para Recursos Humanos</h2>
            </Card>
          </Link>

        </div>

      </div>

      <Footer />

    </section>
  )
}
