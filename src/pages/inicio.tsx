import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Inicio() {
  return (
    <section>
      <Header />

      <div className="flex justify-center">
      <h1 className="font-extrabold text-[40px] mt-[30px]">Quais insights você precisa hoje?</h1>
      </div>
      
      <div className="flex flex-wrap justify-center gap-1 p-7">

        <a href="#">
          <Card>
            <img className="mr-[20px]" src="/images/quiz.png" alt="" width={30} height={30}/>
              Criar Atividades e Desafios
          </Card>
        </a>

        <a href="#">
          <Card>
            <img className="mr-[20px]" src="/images/briefcase.png" alt="" width={30} height={30}/>
              Criar Conteúdos e Experiências
          </Card>
        </a>

        <a href="/obj-aprendizagem">
          <Card>
            <img className="mr-[20px]" src="/images/sheet.png" alt="" width={30} height={30}/>
              Criar Objetivos de Aprendizagem
          </Card>
        </a>

        <a href="#">
          <Card>
            <img className="mr-[20px]" src="/images/user-ok.png" alt="" width={30} height={30}/>
              Ferramentas para Recursos Humanos
          </Card>
        </a>
        <a href="#">
          <Card>
            <img className="mr-[20px]" src="/images/arrow.png" alt="" width={30} height={30}/>
              Mensurar Resultados
            </Card>
        </a>

      </div>
      
      <Footer />
    </section>
  )
}
