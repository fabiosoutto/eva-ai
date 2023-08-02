import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import React, { useState } from 'react';
import fetchChatGPTAPI from '../utils/api4';


export default function PdiToExplorer() {

  //constante dos inputs
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const promptFormat = `Crie um plano de desenvolvimento profissional com estes valores:
   O que o colaborador busca na carreira? ${input1}, qual a função do colaborador? ${input2}, 
   e quanto tempo ele precisa para alcançar este objetivo? ${input3}`;
  
  //constante de resposta da API
  const [apiResponse, setApiResponse] = useState('');

  //constante do estado do botão
  const [isLoading, setIsLoading] = useState(false);
  
  // Função para limpar os inputs após a resposta da API
  const limparInputs = () => {
    setInput1('');
    setInput2('');
    setInput3('');
  };

  //função de chamada da API
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true); // Ativar o estado de carregamento do botão

      // Objeto contendo os dados dos inputs
    const inputData = {
      promptFormat,
      input1,
      input2,
      input3,
    };

      const response = await fetchChatGPTAPI(inputData);
  
      // Extrair o conteúdo da resposta da API
      const apiResponseContent = response.choices[0].message.content;
  
      // Atualize a constante de estado com o conteúdo da resposta
      setApiResponse(apiResponseContent);

      limparInputs(); // Limpar os inputs após receber a resposta da API

    } catch (error) {
      console.error('Erro na chamada da API:', error);
      setApiResponse('Erro ao obter a resposta. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false); // Desativar o estado de carregamento, independentemente do resultado da API
    }
  };
  
  
  //controla o formulário do lead
  //const [openModal, setOpenModal] = useState(false);


    return (
      <section>
        <Header />

        <div className={`
             w-[100%]
             flex flex-wrap
              m-0"
            `}>
          <div className="gap-1 p-5 mr-5">

            <NavMenu />
            
          </div>

          <div className="gap-1 p-5 mr-5 w-[900px]">
            <h1 className="font-extrabold text-[25px]">PDI to Explorer</h1>
            <p>Veja algumas ideias para ajudar seu colaborador a traçar caminhos para o desenvolvimento individual e aumentar a motivação</p>

            <div className="flex flex-wrap mt-[20px] mb-[15px]">
                <h1>Preencha os filtros:</h1>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap-3">
                  <input type="hidden" defaultValue={promptFormat} />
                    

                  <input className="w-[320px] p-3 bg-transparent border rounded outline-none" type="text" placeholder="O que o colaborador busca na carreira?" value={input1} onChange={(e) => setInput1(e.target.value)} />
                  <input className="w-[320px] p-3 bg-transparent border rounded outline-none" type="text" placeholder="Qual a função do colaborador?" value={input2} onChange={(e) => setInput2(e.target.value)} />
              </div>

              <div className="flex flex-wrap gap-3 mt-[15px]">
                  <input className="w-[320px] p-3 bg-transparent border rounded outline-none" type="text" placeholder="Quanto tempo para alcançar o objetivo?" value={input3} onChange={(e) => setInput3(e.target.value)} />
              </div>

              <div>
                  <button 
                    type="submit" 
                    className="bg-[#266BAB] hover:bg-[#2188E8] mt-[15px] p-2 rounded"
                    disabled={isLoading}
                  >
                      {isLoading ? 'Aguarde...' : 'Enviar'}
                  </button>
              </div>
              <div>
                
              </div>
              </form>
              {apiResponse && ( // Verificar se apiResponse possui um valor (resposta da API)
                <div>
                  <textarea
                    value={apiResponse}
                    className={`
                      answer-box mt-[30px] border border-white rounded p-4 bg-transparent 
                      w-full h-[250px] outline-none text-[#fff] resize-none overflow-y-auto
                    `}
                    id="answer-box"
                    readOnly
                    placeholder="Aguardando..."
                  ></textarea>
                </div>
              )}
            

          </div>

        </div>
        
        
        <Footer />
      </section>
    )
  }