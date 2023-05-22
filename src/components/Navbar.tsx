import Image from "next/image";

export function Navbar() {
    return(
        <nav className="w-12/12 flex items-center justify-center py-4 ">

            <Image width={70} height={70} src="/logo.png" alt="logo sunshine cleaning services"></Image>

            <ul className=" w-4/12 flex justify-evenly text-lg text-white font-semibold">
                <a className=" hover:border-b-2" href="#">Sobre Nós</a>
                <a className=" hover:border-b-2" href="#">Serviços</a>
                <a className=" hover:border-b-2" href="#">Depoimentos</a>
                <a className=" hover:border-b-2" href="#"> Contatos </a>
            </ul>
            
        </nav>
    )
}