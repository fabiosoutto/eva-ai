import Card2 from "@/components/Card2";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Login2() {
  
  //constante do estado do botão
  const [isLoading, setIsLoading] = useState(false);
    
  return (
    <div className="flex flex-col justify-center items-center md:h-screen">
      <div className="bg-slate-800 gap-7 p-7">
        <div className="flex flex-col justify-center items-center md:w-[600px]">
          <img src="/images/v2.png" width={200} height={200} />

          <h1 className="mt-1 text-2xl p-[10px]">Faça seu Login!</h1>
          <Card2>
            <a href="/cadastro">
              <h2 className="hover:text-[#2188E8] text-base">Não tem conta? Faça seu cadastro.</h2>
            </a>
          </Card2>
          <div>
            <form
              action=""
              className="flex flex-col justify-center items-center gap-4"
            >
              <input
                className="w-[320px] p-3 bg-transparent border rounded outline-none"
                type="text"
                placeholder="Seu email..."
              />
              <input
                className="w-[320px] p-3 bg-transparent border rounded outline-none"
                type="password"
                placeholder="Sua senha..."
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
              Login.
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