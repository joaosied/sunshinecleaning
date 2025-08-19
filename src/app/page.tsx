import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import {
  MdOutlineFactory,
  MdOutlineHome,
  MdOutlineCleaningServices,
  MdOutlineEmail,
} from "react-icons/md";
import { GiFloorPolisher } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import CardClient from "@/components/CardClient";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col ">
      <header id="about-me" className=" bgColor shadow-lg">
        <Navbar />
        {/* conteudo do site */}

        {/* Welcome the SCS! */}
        {/* Div Text */}
        <div className=" h-screen flex items-center justify-center">
          <div className=" w-6/12 text-start flex flex-col items-center justify-around gap-2">
            <div className=" w-full ">
              <h1 className=" text-6xl font-bold text-white"> Bem Vindo à </h1>

              <h2 className=" text-5xl font-bold text-orange-500">
                Sunshine Cleaning
              </h2>

              <h1 className=" text-5xl font-bold text-orange-500">Services!</h1>
            </div>

            <div className=" flex flex-col items-start justify-center gap-2 ">
              <p className="text-lg text-white">
                A sua solução completa em limpeza residencial e comercial! Nós
                somos uma empresa dedicada a oferecer serviços de limpeza
                confiáveis e de alta qualidade, visando sempre a satisfação dos
                nossos clientes.
              </p>

              <button className=" rounded-lg shadow-md w-24 h-10 bg-orange-500 text-white font-semibold hover:-translate-y-1 delay-100">
                {" "}
                Contatos{" "}
              </button>
            </div>
          </div>

          {/* Div Image */}
          <div className=" w-5/12 h-full flex flex-col items-end justify-center ">
            <div className=" bgImage w-96 h-96 bg-orange-600 border-8 shadow-xl"></div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center">
        {/* Nossos serviços */}

        <section
          id="services"
          className=" w-11/12 h-screen flex flex-col justify-evenly text-center"
        >
          <h1 className="font-semibold text-black text-3xl font-">
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
        <section
          id="depoiments"
          className=" bgDepoimentos w-full h-screen flex flex-col justify-around text-center shadow-lg"
        >
          <div className="flex justify-evenly items-center">
            <CardClient text="Obrigado à equipe da Suncshine Cleaning, deixou a casa brilhando, como novo!" nameText="Ana, Cliente Residencial" image="/img/ana.jpg" />
            <CardClient text="Surreal o trabalho da equipe, nós da Empresa JOAO, agradecemos" nameText="João, Cliente Empresarial" image="/img/joao.jpg" />
            <CardClient text="Nossa familia adorou o trabalho da scs, muito obrigada!" nameText="Maria, Cliente Residencial" image="/img/maria.jpg" />
          </div>
        </section>

        {/* Formulario para contato */}
        <section
          id="contacts"
          className="w-11/12 h-screen flex items-center justify-center "
        >
          <div className="w-11/12 h-3/4 flex justify-center">
            <div className="w-6/12 h-full bg-zinc-300 border-black rounded-l-xl flex flex-col items-center justify-around ">
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

            <div className=" bgForm w-6/12 rounded-r-xl flex flex-col items-center justify-evenly">
                <h2 className=" text-4xl text-white font-bold">
                  Entre em contato
                  <span className=" text-4xl text-orange-500 font-bold"> conosco</span>
                </h2>
                
              <div className=" w-5/12 h-60 flex items-center">
                <img className="w-full " src="\logocompleta.png"/>
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
        </section>
      </main>
      {/* Footer */}
      <div className="w-12/12 h-96 flex items-end">
        {/* footer waves */}
        <footer className=" w-full h-72"></footer>
      </div>
    </div>
  );
}
