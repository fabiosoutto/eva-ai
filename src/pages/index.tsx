import Card from "@/components/Card"
import Footer from "@/components/Footer"


export default function Home() {


  return (
    <section className="flex flex-wrap items-center justify-center w-[100%] h-[100vh] p-[30px]">

      <div className="flex flex-col items-center justify-center w-[100%]">
        <p className="text-[40px]">Seja bem-vindo(a) a <span className="font-extrabold text-[#2188E8]">Eva!</span></p>
        <h2 className="text-[60px]">Resolva tarefas do <span className="font-extrabold text-[#2188E8]">RH e T&D</span></h2>
        <h2 className="text-[60px] mb-[30px]">e crie conteúdos em segundos</h2>
        
        <div className="md:w-full flex flex-col items-center">
          
          <a href="/treinamentos">
            <Card>
              <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={30} height={30}/>
                <h2>Ferramentas para Criar Treinamentos na Empresa</h2>
            </Card>
          </a>

          <a href="/recursos-humanos">
            <Card>
              <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={30} height={30}/>
                <h2>Ferramentas para Recursos Humanos</h2>
            </Card>
          </a>

        </div>

      </div>

      <Footer />

    </section>
  )
}
