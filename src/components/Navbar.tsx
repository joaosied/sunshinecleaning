import Image from "next/image";

export function Navbar() {
    return(
        <nav className="w-12/12 flex items-center justify-center py-4 ">

            <Image id="logoNav" width={70} height={70} src="/logo.png" alt="logo sunshine cleaning services"></Image>

            <ul className=" w-4/12 flex justify-evenly text-lg text-white font-semibold">
                <a href="#about-me">Sobre Nós</a>
                <a href="#services">Serviços</a>
                <a href="#depoiments">Depoimentos</a>
                <a href="#contacts"> Contatos </a>
            </ul>
            
        </nav>
    )
}