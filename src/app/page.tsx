import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import {
  MdOutlineFactory,
  MdOutlineHome,
  MdOutlineCleaningServices,
  MdOutlineEmail,
} from "react-icons/md";
import { GiFloorPolisher } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

export default function Home() {
  return (
    <div className=" h-full flex flex-col">
      <div className=" bgColor">
        <Navbar />
        {/* conteudo do site */}

        {/* Welcome the SCS! */}
        <div className=" imagePrincipal w-full flex justify-evenly">
          {/* Div Text */}
          <div className=" w-5/12 h-full flex flex-col justify-center">
            <div className=" w-12/12 h-80 flex flex-col items-center justify-around gap-2">
              <div>
                <h1 className=" text-6xl font-bold text-white">
                  {" "}
                  Bem Vindo à{" "}
                </h1>

                <h1 className=" text-5xl font-bold text-orange-500">
                  Sunshine Cleaning
                </h1>

                <h1 className=" text-5xl font-bold text-orange-500">
                  Services!
                </h1>
              </div>

              <div className=" w-6/12 mr-5 ">
                <p className="text-lg text-white">
                  A sua solução completa em limpeza residencial e comercial! Nós
                  somos uma empresa dedicada a oferecer serviços de limpeza
                  confiáveis e de alta qualidade, visando sempre a satisfação
                  dos nossos clientes.
                </p>
                <div className=" py-2">
                  <button className=" rounded-lg shadow-md w-24 h-10 bg-orange-500 text-white font-semibold hover:-translate-y-1 delay-100">
                    {" "}
                    Contatos{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Div Image */}
          <div className=" w-5/12 h-full flex flex-col items-center justify-center ">
            <div className=" bgImage w-96 h-96 bg-orange-600 border-8 shadow-xl"></div>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-center">
        {/* Nossos serviços */}

        <section className=" w-11/12 h-96 mt-2 py-8 flex flex-col justify-between text-center">
          <h1 className=" font-semibold text-black text-3xl">
            Nossos Serviços
          </h1>
          <div className="flex items-center justify-evenly">
            {/* Limpeza Comercial */}
            <div className=" w-72 h-64 flex flex-col items-center justify-around">
              <div className=" bgComercial w-28 h-28 bg-orange-400 flex items-center justify-center shadow-md">
                <MdOutlineFactory className=" text-white" size={56} />
              </div>

              <h1 className=" text-xl font-semibold">Limpeza Comercial</h1>

              <p className=" text-sm">
                temos a solução completa para a limpeza de escritórios, lojas,
                consultórios e outros ambientes comerciais.
              </p>
            </div>

            {/* Limpeza Residencial */}
            <div className=" w-72 h-64 flex flex-col items-center justify-around">
              <div className=" bgResidencial w-28 h-28 bg-orange-400 flex items-center justify-center shadow-md">
                <MdOutlineHome className=" text-white" size={56} />
              </div>

              <h1 className=" text-xl font-semibold">Limpeza Residencial</h1>

              <p className=" text-sm">
                {" "}
                oferecemos serviços de limpeza completa de residências,
                incluindo limpeza de banheiros, cozinhas, quartos, salas e muito
                mais.
              </p>
            </div>

            {/* Limpeza de Carpetes */}
            <div className=" w-72 h-64 flex flex-col items-center justify-around">
              <div className=" bgCarpetes w-28 h-28 bg-orange-400 flex items-center justify-center shadow-md">
                <GiFloorPolisher className=" text-white" size={56} />
              </div>

              <h1 className=" text-xl font-semibold">
                Limpeza de Carpetes e Pisos
              </h1>

              <p className=" text-sm">
                {" "}
                removemos manchas e odores de carpetes, além de diferentes tipos
                de pisos, para garantir que eles fiquem limpos e brilhantes.
              </p>
            </div>

            {/* Limpezas Geral */}
            <div className=" w-72 h-64 flex flex-col items-center justify-around">
              <div className=" bgLimpezas w-28 h-28 bg-orange-400 flex items-center justify-center shadow-md">
                <MdOutlineCleaningServices className=" text-white" size={56} />
              </div>

              <h1 className=" text-xl font-semibold">Limpezas em geral</h1>

              <p className=" text-sm">
                {" "}
                temos também serviços de limpeza pós-obra, vidros, estofados e
                muito mais. Entre em contato para saber mais sobre os serviços.
              </p>
            </div>
          </div>
        </section>

        {/* Depoimentos de clientes */}
        <section className=" bgDepoimentos w-10/12 h-96 py-8 flex flex-col justify-around text-center shadow-lg mt-12">
          <div className="flex justify-evenly items-center">
            <div className=" w-80 h-72 flex flex-col items-center justify-evenly border-black rounded-sm bg-white shadow-md">
              <div className=" flex flex-col items-center justify-between w-72 h-32">
                <FaQuoteLeft className=" text-orange-300" size={18} />
                <p className=" text-md">
                  Obrigado à equipe da Sunshine Cleaning Services pelo excelente
                  trabalho de limpeza que fizeram em minha casa. Ficou como
                  novo!
                </p>
              </div>
              <div className=" w-24 border-b border-orange-200"></div>
              <div className=" imgAna bg-zinc-500 rounded-full w-20 h-20 border-black"></div>
              <p className=" text-sm">- Ana, cliente residencial</p>
            </div>

            <div className=" w-80 h-72 flex flex-col items-center justify-evenly border-black rounded-sm bg-white shadow-md">
              <div className=" flex flex-col items-center justify-between w-72 h-32">
                <FaQuoteLeft className=" text-orange-300" size={18} />
                <p className=" text-md">
                  Estamos muito felizes com o serviço da empresa em nosso
                  escritório. Eles são muito pontuais e sempre deixam o ambiente
                  muito limpo e organizado.
                </p>
              </div>
              <div className=" w-24 border-b border-orange-200"></div>
              <div className=" imgJoao bg-zinc-500 rounded-full w-20 h-20 border"></div>
              <p className=" text-sm">- João, cliente comercial</p>
            </div>

            <div className=" w-80 h-72 flex flex-col items-center justify-evenly border-black rounded-sm bg-white shadow-md">
              <div className=" flex flex-col items-center justify-between w-72 h-32">
                <FaQuoteLeft className=" text-orange-300" size={18} />
                <p className=" text-md">
                  Contratei a Sunshine para fazer a limpeza da minha casa e
                  fiquei muito satisfeita com o resultado. A equipe foi muito
                  profissional e eficiente.
                </p>
              </div>
              <div className=" w-24 border-b border-orange-200"></div>
              <div className=" imgMaria bg-zinc-500 rounded-full w-20 h-20 border"></div>
              <p className=" text-sm">- Maria, cliente residencial</p>
            </div>
          </div>
        </section>

        {/* Formulario para contato */}
        <div className="w-11/12 h-96 mt-12 flex justify-center ">
          <div className="w-11/12 h-96 flex justify-center">
            <div className="w-4/12 h-96 bg-zinc-300 border-black rounded-l-xl flex flex-col items-center justify-around ">
              <div className="logoform w-24 h-24"></div>
              <form className="flex flex-col items-center gap-6">
                <input
                  className=" w-72 h-8 bg-zinc-100 border border-orange-400 px-1 rounded-md "
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Nome"
                />
                <input
                  className=" w-72 h-8  bg-zinc-100 border border-orange-400 px-1 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  className=" w-72 h-8  bg-zinc-100 border border-orange-400 px-1 rounded-md"
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telefone"
                />

                <button className=" rounded-lg shadow-md w-24 h-10 bg-orange-500 text-white font-semibold hover:-translate-y-1 delay-100">
                  Confirmar
                </button>
              </form>
            </div>

            <div className=" bgForm w-3/12 h-96 border-black rounded-r-xl flex flex-col items-center justify-center">
              <div className=" w-10/12 flex flex-col items-start justify-start">
                <h1 className=" text-4xl text-white font-bold">
                  Entre em contato
                </h1>
                <h1 className=" text-4xl text-orange-500 font-bold">conosco</h1>
              </div>

              <div className=" w-5/12 h-60 flex items-center">
                <div className=" logoCompleta w-full h-48 "></div>
              </div>

              {/* Contatos */}
              <div className=" flex flex-col w-5/12 justify-around text-white ">
                <div className=" flex justify-around">
                  <BsTelephone size={24} />
                  <MdOutlineEmail size={24} />
                  <MdOutlineFactory size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <div className="w-12/12 h-96 flex items-end">
        {/* footer waves */}
        <footer className=" w-full h-72"></footer>
      </div>
    </div>
  );
}
