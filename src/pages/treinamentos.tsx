import Card2 from "@/components/Card2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import Link from "next/link";

export default function Treinamentos() {
  return (
    <section>
        <Header />

        <div className={`
             w-full
             flex flex-wrap
              m-0"
            `}>
          <div className="gap-1 p-5 mr-5">

            <NavMenu />
            
          </div>

          <div className="flex justify-center items-center p-5">
            <h1 className="font-extrabold text-[30px]">Treinamentos para sua Empresa</h1>
          </div>

          <div className="gap-1 p-5 mr-5 flex flex-col md:w-full items-center">

            <div className="flex flex-wrap">
              
              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/ementa">
                    <h1>Criar Ementa</h1>
                    <div>
                      <p className="text-sm">Criar uma ementa para novo curso</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/plano-estudos">
                    <h1>Criar um Plano de Estudos</h1>
                    <div>
                      <p className="text-sm">Ideias para criar um plano de estudos</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/experiencias-aprendizagem">
                    <h1>Criar Experiências de Aprendizagem</h1>
                    <div>
                      <p className="text-sm">Crie uma experiência de aprendizagem</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/desafio-quiz">
                    <h1>Desafio - Quiz</h1>
                    <div>
                      <p className="text-sm">Ideias para criar um Quiz ou outros tipos de desafios para seu treinamento</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/indicacoes-conteudos">
                    <h1>Indicações de Conteúdos</h1>
                    <div>
                      <p className="text-sm">Ideias de indicações de conteúdos</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/lista-atividades">
                    <h1>Lista de Atividades</h1>
                    <div>
                      <p className="text-sm">Crie uma lista de atividades de aprendizagem para um curso ou tópico</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/metricas">
                    <h1>Métricas para Temas Específicos</h1>
                    <div>
                      <p className="text-sm">Desenvolver objetivos de aprendizagem claros e mensuráveis para um tópico</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/objetivos-resultados">
                    <h1>Objetivos e Resultados</h1>
                    <div>
                      <p className="text-sm">Desenvolva objetivos de aprendizado claros e mensuráveis</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/onboarding">
                    <h1>Onboarding</h1>
                    <div>
                      <p className="text-sm">Ideias para criar treinamentos de boas vindas que acolham novos colaboradores</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/perguntas-desafiadoras">
                    <h1>Perguntas Desafiadoras</h1>
                    <div>
                      <p className="text-sm">Crie uma série de perguntas desafiadoras</p>
                    </div>
                  </Link>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <Link href="/roteiro-aulas">
                    <h1>Roteiro de Aulas</h1>
                    <div>
                      <p className="text-sm">Ideias para criar roteiro de aulas que engajam</p>
                    </div>
                  </Link>
                </div>
              </Card2>
              
            </div>

          </div>

        </div>
        
        
        <Footer />
      </section>
  )
}
