"use client";
import Button from "@/components/Button";
import Card2 from "@/components/Card2";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";


export default function Login() {

  //valores iniciais do Formik
  const initialValues = {
    email: "",
    password: "",
  }
  
  //validações dos campos do form
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido!")
      .required("O email é obrigatório!"),
    password: Yup.string().required("A senha é obrigatória!"),
  });

  //método de envio do form
  async function handleSubmit() {

  }
    
  return (
    <div className="flex flex-col justify-center items-center md:h-screen">
      <div className="bg-slate-800 gap-7 p-7">
        <div className="flex flex-col justify-center items-center md:w-[600px]">
          <img src="/images/v2.png" width={200} height={200} />

          <h1 className="mt-1 text-2xl p-[10px]">Faça seu Login!</h1>
          <Card2>
            <Link href="/cadastro">
              <h2 className="hover:text-[#2188E8] text-base">Não tem conta? Faça seu cadastro.</h2>
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
                    placeholder="Seu email..." 
                  />
                  <Input 
                    name="password" 
                    type="password" 
                    required  
                    placeholder="Sua senha..." 
                  />

                  <Button type="submit" text="Entrar" className="bg-[#266BAB] hover:bg-[#2188E8] mt-[25px] p-2 rounded" />

                </Form>
              )}
            </Formik>
            
          </div>

          <div className="flex justify-center items-center mt-8 mb-4">
            <h2 className="p-4">
              ...
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