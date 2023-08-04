import React, { useState } from "react";
import IconClose from "./icons/IconClose";
import Dropdown from "./Dropdown";
import Link from "next/link";


export default function Modal({ isOpen, setCloseModal }) {

    //Estado para armazenar a opção selecionada DROPDOWN
    const [selectedOption, setSelectedOption] = useState('');

  // Estados para armazenar os valores dos campos do formulário
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Estado para controlar se o e-mail existe no banco de dados
  const [emailExists, setEmailExists] = useState(false);

  // Opções do dropdown
  const options = [
    { label: 'Quantidade de colaboradores', value: 'opcao1' },
    { label: 'Somente eu', value: 'opcao2' },
    { label: 'Entre 10 e 20', value: 'opcao3' },
    { label: 'Entre 21 e 30', value: 'opcao4' },
    { label: 'Entre 50 e 100', value: 'opcao5' },
    { label: 'Acima de 100', value: 'opcao6' },
  ];

  // Função para verificar se o e-mail existe no banco de dados
  const checkEmailExists = () => {
    // Aqui você deve fazer uma requisição ao servidor para verificar se o e-mail já está cadastrado.
    // Por exemplo, usando a biblioteca "axios":
    // axios.get(`/api/check-email-exists?email=${email}`)
    //   .then(response => {
    //     setEmailExists(response.data.exists);
    //   })
    //   .catch(error => {
    //     console.error("Erro ao verificar o e-mail:", error);
    //   });
    // Neste exemplo, você deve criar uma rota no backend para realizar a verificação e retornar um JSON com a propriedade "exists" indicando se o e-mail existe ou não.
    // Aqui, estou apenas definindo o estado "emailExists" como "false" para simular o comportamento.
    setEmailExists(false);
  };

  // Função para enviar os dados do formulário para o servidor
  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você deve fazer a requisição ao servidor para cadastrar os dados no banco de dados.
    // Por exemplo, usando a biblioteca "axios":
    // const data = {
    //   email,
    //   nome,
    //   sobrenome,
    //   whatsapp,
    //   empresa,
    //   cargo,
    //   selectedOption,
    // };
    // axios.post("/api/cadastrar-dados", data)
    //   .then(response => {
    //     // Se o cadastro foi bem-sucedido, feche o modal e limpe os campos do formulário.
    //     setCloseModal();
    //     setEmail("");
    //     setNome("");
    //     setSobrenome("");
    //     setWhatsapp("");
    //     setEmpresa("");
    //     setCargo("");
    //     setSelectedOption("");
    //   })
    //   .catch(error => {
    //     console.error("Erro ao cadastrar os dados:", error);
    //   });
    // Neste exemplo, estou apenas simulando o fechamento do modal e a limpeza dos campos do formulário.
    setCloseModal();
    setEmail("");
    setNome("");
    setSobrenome("");
    setWhatsapp("");
    setEmpresa("");
    setCargo("");
    setSelectedOption("");
  };

  // Função para atualizar o estado quando o usuário selecionar uma opção do dropdown
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-zinc-950/50 backdrop-blur flex justify-center items-center rounded">
        <div className="bg-slate-800 gap-7 p-7">
          <IconClose className="w-[25px] h-[25px] cursor-pointer" onClick={setCloseModal} />
          <div className="flex flex-col justify-center items-center md:w-[600px]">
            {/* Restante do conteúdo do modal */}
            {emailExists ? (
              <div>
                <h1 className="mt-1 mb-4">E-mail já cadastrado!</h1>
                <p>Este e-mail já está cadastrado em nosso sistema.</p>
              </div>
            ) : (
              <div>
                <img src="/images/v2.png" width={200} height={200}/>
                <h1 className="mt-1 mb-4">Por favor, informe alguns dados - MODAL TESTE!</h1>
                <form className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
                  <input
                    className="w-[320px] p-3 bg-transparent border rounded outline-none"
                    type="text"
                    placeholder="Informe seu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* Restante dos campos do formulário */}
                    <input className="w-[320px] p-3 bg-transparent border rounded outline-none" 
                    type="text" placeholder="Nome..."/>
                    <input className="w-[320px] p-3 bg-transparent border rounded outline-none" 
                    type="text" placeholder="Sobrenome..."/>
                    <input className="w-[320px] p-3 bg-transparent border rounded outline-none" 
                    type="text" placeholder="Seu WhatsApp ex: 11987654321"/>
                    <input className="w-[320px] p-3 bg-transparent border rounded outline-none" 
                    type="text" placeholder="Sua Empresa"/>
                    <input className="w-[320px] p-3 bg-transparent border rounded outline-none" 
                    type="text" placeholder="Seu cargo/função"/>
                    <Dropdown options={options} value={selectedOption} onChange={handleOptionChange} />
                  {/* ... */}
                </form>
                <button
                  type="button"
                  onClick={checkEmailExists}
                  className="bg-[#266BAB] hover:bg-[#2188E8] mt-[15px] p-2 rounded"
                  disabled={isLoading}
                >
                  {isLoading ? 'Aguarde...' : 'Verificar e-mail'}
                </button>
              </div>
            )}
            {/* Restante do conteúdo do modal */}
            <div>
                <button 
                    type="reset"
                    className="bg-[#266BAB] hover:bg-[#2188E8] mt-[15px] p-2 rounded"
                    disabled={isLoading}
                >
                    {isLoading ? 'Aguarde...' : 'Enviar'}
                </button>
                
                <Link href="/recursos-humanos" />
                
            </div>
            <div className="flex justify-center items-center mt-4 mb-4">
                <h2 className="flex justify-center items-center">
                    Ao informar meus dados, aceito receber comunicações de marketing, comercial e 
                    conteúdos da Evolluo.
                </h2>
            </div>
            {/* ... */}
          </div>
        </div>
      </div>
    );
  } else {
    // Retorna nulo caso o modal não esteja aberto
    return null;
  }
}
