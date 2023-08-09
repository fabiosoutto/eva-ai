import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import React, { useState } from 'react';
import fetchChatGPTAPI from '../utils/api4';
import Dropdown from "@/components/Dropdown";


export default function DesafioQuiz() {

    // Estado para armazenar a opção selecionada 
    const [selectedOption, setSelectedOption] = useState(''); 

    // Opções do dropdown
    const options = [
    { label: 'Formato do Desafio', value: 'opcao1' },
    { label: 'Verdadeiro ou Falso', value: 'opcao2' },
    { label: 'Múltipla Escolha', value: 'opcao3' },
    // Adicione outras opções conforme necessário
    ];

    // Função para atualizar o estado quando o usuário selecionar uma opção
    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    };

  //constante dos inputs
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const promptFormat = `Crie um desafio para aulas com as respostas marcadas e com estes valores:
   tema do curso: ${input1}, formato do desafio: ${selectedOption}, quantidade de perguntas: ${input3} `;

  
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
            <h1 className="font-extrabold text-[25px]">Desafio - Quiz</h1>
            <p>Ideias para criar um Quiz ou outros tipos de desafios para seus treinamentos</p>

            <div className="flex flex-wrap mt-[20px] mb-[15px]">
                <h1>Preencha os filtros:</h1>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap-3">
                  <input type="hidden" defaultValue={promptFormat} />
                    

                  <input className="w-[320px] p-3 bg-transparent border rounded outline-none" type="text" placeholder="Qual o tema do curso?" value={input1} onChange={(e) => setInput1(e.target.value)} />
                  <Dropdown name="name" options={options} value={selectedOption} onChange={handleOptionChange} />
                  
              </div>

              <div className="flex flex-wrap gap-3 mt-[15px]">
                  <input className="w-[320px] p-3 bg-transparent border rounded outline-none" type="text" placeholder="Quantidade de perguntas" value={input3} onChange={(e) => setInput3(e.target.value)} />
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
                      w-full h-[350px] md:h-[450px] outline-none text-[#fff] 
                      resize-none overflow-y-auto
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