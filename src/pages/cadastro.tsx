"use client";
import Button from "@/components/Button";
import Card2 from "@/components/Card2";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Cadastro() {

  const [error, setError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const router = useRouter();

  //valores iniciais do Formik
  const initialValues = {
    email: "",
    name: "",
    surname: "",
    whatsapp: "",
    company: "",
    ocupation: "",
    people: "",
    password: "",
  }
  
  //validações dos campos do form
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    whatsapp: Yup.string().required("O celular é obrigatório"),
    company: Yup.string().required("Empresa é obrigatório"),
    ocupation: Yup.string().required("O cargo é obrigatório"),
    email: Yup.string()
      .email("Digite um email válido!")
      .required("O email é obrigatório!"),
    password: Yup.string().required("A senha é obrigatória!"),
  });

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

  function renderError(msg) {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 3000);
  }

  //método de envio do form
  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true);
    try {
      await fetch("/api/router", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          name: values.name,
          surname: values.surname,
          whatsapp: values.whatsapp,
          company: values.company,
          ocupation: values.ocupation,
          people: values.people,
          password: values.password,
        }),
      }).then(async (res) => {
        const result = await res.json()

        if (result.status === 201) {
          alert(result.message);
          router.push("/treinamentos");
        } else {
          renderError(result.message);
          resetForm();
        }

        setFormSubmitting(false);
      });
    } catch (error) {
      setFormSubmitting(false);
      renderError("Erro ao criar conta. Tente novamente mais tarde!");
    }
  }
    
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
            <Formik 
              initialValues={initialValues} 
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            > 
              {({ values }) => (
                <Form noValidate>

                  <Input 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="Seu email" 
                  />
                  <Input 
                    name="name" 
                    type="text" 
                    required 
                    placeholder="Seu nome" 
                  />
                  <Input 
                    name="surname" 
                    type="text" 
                    required 
                    placeholder="Seu sobrenome" 
                  />
                  <Input 
                    name="whatsapp" 
                    type="text" 
                    required 
                    placeholder="Seu WhatsApp ex: 11987654321" 
                  />
                  <Input 
                    name="company" 
                    type="text" 
                    required 
                    placeholder="Sua empresa" 
                  />
                  <Input 
                    name="ocupation" 
                    type="text" 
                    required 
                    placeholder="Seu cargo/função" 
                  />
                  <Dropdown
                    name="people" 
                    options={options}
                    value={selectedOption}
                    onChange={handleOptionChange}
                  />
                  <Input 
                    name="password" 
                    type="password" 
                    required  
                    placeholder="Sua senha..." 
                  />

                  <Button 
                    type="submit" 
                    text={isFormSubmitting ? "Aguarde..." : "Cadastrar"}
                    disabled={isFormSubmitting}
                    className="bg-[#266BAB] hover:bg-[#2188E8] mt-[25px] p-2 rounded" 
                  />
                  {!values.name && !values.surname && !values.email && !values.whatsapp && !values.company && !values.ocupation && !values.people && !values.password && error && (
                    <span className="text-red-500 text-sm text-center">{error}</span>
                  )}

                </Form>
              )}
            </Formik>
            
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