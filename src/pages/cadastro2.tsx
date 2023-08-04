import Card2 from "@/components/Card2";
import Dropdown from "@/components/Dropdown";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useState } from "react"


export default function Cadastro2() {

  // Estado para armazenar a opção selecionada 
  const [selectedOption, setSelectedOption] = useState(''); 

  // Opções do dropdown
  const options = [
  { label: 'Quantidade de colaboradores', value: 'opcao1' },
  { label: 'Somente eu', value: 'opcao2' },
  { label: 'Entre 10 e 20', value: 'opcao3' },
  { label: 'Entre 21 e 30', value: 'opcao4' },
  { label: 'Entre 50 e 100', value: 'opcao5' },
  { label: 'Acima de 100', value: 'opcao6' },
  // Adicione outras opções conforme necessário
  ];

  // Função para atualizar o estado quando o usuário selecionar uma opção
  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };

  //constante do estado do botão
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-slate-800 gap-7 p-7">
        <div className="flex flex-col justify-center items-center md:w-[600px]">
          <img src="/images/v2.png" width={200} height={200} />

          <h1 className="mt-1 text-2xl p-[10px]">Por favor, efetue seu cadastro!</h1>
          <Card2>
            <Link href="/login">
              <h2 className="hover:text-[#2188E8] text-base">Já possui conta? Faça seu Login.</h2>
            </Link>
          </Card2>
          <div>
            <form
              action=""
              className="flex flex-col justify-center items-center gap-4"
            >
              <input
                className="w-[320px] p-3 bg-transparent border rounded outline-none"
                type="text"
                placeholder="Informe seu email..."
              />
              <input
                className="w-[320px] p-3 bg-transparent border rounded outline-none"
                type="text"
                placeholder="Nome..."
              />
              <input
                className="w-[320px] p-3 bg-transparent border rounded outline-none"
                type="text"
                placeholder="Sobrenome..."
              />
              <input
                className="w-[320px] p-3 bg-transparent border rounded outline-none"
                type="text"
                placeholder="Seu WhatsApp ex: 11987654321"
              />
              <input
                className="w-[320px] p-3 bg-transparent border rounded outline-none"
                type="text"
                placeholder="Sua Empresa"
              />
              <input
                className="w-[320px] p-3 bg-transparent border rounded outline-none"
                type="text"
                placeholder="Seu cargo/função"
              />
              <Dropdown
                name="people"
                options={options}
                value={selectedOption}
                onChange={handleOptionChange}
              />
            </form>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#266BAB] hover:bg-[#2188E8] mt-[25px] p-2 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Aguarde..." : "Enviar"}
            </button>
          </div>
          <div className="flex justify-center items-center mt-8 mb-4">
            <h2 className="p-4">
              * Ao cadastrar meus dados, aceito receber comunicações de marketing,
              comercial e conteúdos da Evolluo.
            </h2>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
    
}