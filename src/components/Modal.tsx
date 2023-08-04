import React, { useState } from "react"
import IconClose from "./icons/IconClose"
import Dropdown from "./Dropdown"
import Link from "next/link";

export default function Modal({isOpen, setCloseModal}) {

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

    if(isOpen) {
        return (
            <div className="fixed inset-0 z-50 bg-zinc-950/50 backdrop-blur flex justify-center items-center rounded">
                <div className="bg-slate-800 gap-7 p-7">
                    <IconClose className="w-[25px] h-[25px] cursor-pointer" onClick={setCloseModal}/>
                    {/*  {children} */}
                    <div className="flex flex-col justify-center items-center md:w-[600px]">
                        <img src="/images/v2.png" width={200} height={200}/>
                        <h1 className="mt-1 mb-4">Por favor, informe alguns dados!</h1>

                        <div>
                            <form action="" className="flex flex-col justify-center items-center gap-4">
                                <input className="w-[320px] p-3 bg-transparent border rounded outline-none" 
                                    type="text" placeholder="Informe seu email..."/>
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
                            </form>
                        </div>
                        
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
                        
                    </div>
                </div>
            </div>
        )
    } else {

    }
    
}