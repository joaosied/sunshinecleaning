import React from "react";

import { FaQuoteLeft } from "react-icons/fa";

type CardClientProps = {
  text: string;
  nameText: string;
  image: string;
};

export default function CardClient({ text, nameText, image }: CardClientProps) {
  return (
    <div className=" w-80 h-72 flex flex-col items-center justify-evenly border-black rounded-sm bg-white shadow-md">
      <div className=" flex flex-col items-center justify-center gap-2 w-72 h-32">
        <FaQuoteLeft className=" text-orange-300" size={18} />
        <p>{text}</p>
      </div>
      <div className=" w-24 border-b border-orange-200"></div>
      <img className=" bg-zinc-500 rounded-full w-20 h-20 border-black" src={image}/>
      <p className=" text-sm">- {nameText}</p>
    </div>
  );
}
