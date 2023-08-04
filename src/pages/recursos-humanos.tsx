import Card2 from "@/components/Card2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";

export default function recursosHumanos() {


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
            <h1 className="font-extrabold text-[30px]">Ferramentas para Recursos Humanos</h1>
          </div>

          <div className="gap-1 p-5 mr-5 flex flex-col md:w-full items-center">

            <div className="flex flex-wrap">
              
                <Card2>
                  <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                  <div className="flex flex-col">
                  <a href="/assistente-aprendizagem">
                    <h1>Assistente de Aprendizagem</h1>
                    <div>
                      <p className="text-sm">Crie um design de e-learning baseado em um tópico e público alvo</p>
                    </div>
                  </a>
                  </div>
                </Card2>
              

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/brainstorming">
                    <h1>Brainstorming</h1>
                    <div>
                      <p className="text-sm">Ferramenta de brainstorming que auxilia na criação de ideias</p>
                    </div>
                  </a>
                  
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/ferramenta-smart">
                    <h1>Ferramenta Smart</h1>
                    <div>
                      <p className="text-sm">Desenvolva um objetivo de aprendizado SMART para um determinado curso e tópico</p>
                    </div>
                  </a>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/ferramenta-simplifique">
                    <h1>Ferramenta Simplifique</h1>
                    <div>
                      <p className="text-sm">Reescreva uma frase para ficar mais fácil de entender</p>
                    </div>
                  </a>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/mapas-mentais">
                    <h1>Mapas Mentais</h1>
                    <div>
                      <p className="text-sm">Desenvolva um mapa mental para um programa de treinamento</p>
                    </div>
                  </a>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/compreensao">
                    <h1>Para Melhorar a Compreensão</h1>
                    <div>
                      <p className="text-sm">Ferramenta para melhorar a compreensão em um determinado assunto</p>
                    </div>
                  </a>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/pdi-explorer">
                    <h1>PDI to Explorer</h1>
                    <div>
                      <p className="text-sm">Ideias para ajudar seu colaborador a traçar caminhos para o desenvolvimento individual e aumentar a motivação.</p>
                    </div>
                  </a>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/planos-aprendizagem">
                    <h1>Planos de Aprendizagem</h1>
                    <div>
                      <p className="text-sm">Desenvolva um plano de aprendizagem</p>
                    </div>
                  </a>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/storytelling">
                    <h1>Storytelling para Aprendizagem</h1>
                    <div>
                      <p className="text-sm">Ferramenta para criar histórias envolventes que ensinam sobre determinado assunto</p>
                    </div>
                  </a>
                </div>
              </Card2>

              <Card2>
                <img className="mr-[20px]" src="/images/evolluo-arrow.png" alt="" width={20} height={20}/>
                <div className="flex flex-col">
                  <a href="/tools-explorer">
                    <h1>Tools Explorer</h1>
                    <div>
                      <p className="text-sm">Ideias para encontrar ferramentas que resolvam problemas reais na empresa</p>
                    </div>
                  </a>
                </div>
              </Card2>

            </div>

          </div>
          
        </div>
        
        <Footer />
      </section>
  )
}
