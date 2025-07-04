// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import image88 from "../../../assets/images/image88.png";

import { Button } from "@/components/Button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex justify-center px-0 lg:px-16 ">
      <div className="flex w-full max-w-[1800px] h-[532px] lg:h-[675px] rounded-[0px_0px_0px_42px] lg:rounded-[0px_0px_180px_40px] overflow-hidden relative bg-[#246ab0]">
        <Image
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          alt="..."
          src={image88}
          fill
        />

        <div className="flex mb-8 lg:mb-16 flex-1 flex-col justify-end items-end text-right lg:items-start lg:text-left px-6 lg:px-[72px] z-10">
          <h1 className="[font-family:'Raleway-ExtraBold',Helvetica]">
            <span className="block text-[42px] font-light leading-[42px] tracking-[-2.5px] text-white lg:text-[64px] lg:tracking-[-4px] lg:leading-[56.4px]">
              Juntos,
            </span>

            <span className="block text-[42px] font-extrabold leading-[42px] tracking-[-2.5px] text-white lg:text-[64px] lg:leading-[63.4px] lg:tracking-[-4px]">
              a gente dá conta
            </span>

            <span className="block text-[32px] font-light leading-[32px] tracking-[-2.5px] text-white lg:text-[52px] lg:leading-[56.4px] lg:tracking-[-4px] mt-1 lg:mt-2">
              do seu controle financeiro.
            </span>
          </h1>
          <p className="hidden lg:block mt-1 font-paragraph-LG-medium font-[number:var(--paragraph-LG-medium-font-weight)] text-white text-[length:var(--paragraph-LG-medium-font-size)] tracking-[var(--paragraph-LG-medium-letter-spacing)] leading-[var(--paragraph-LG-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-LG-medium-font-style)]">
            Seu negócio organizado. Sua operação no controle. Seu tempo de
            volta.
          </p>

          <div className="flex mt-8 lg:mt-12 gap-5 pt-3">
            <Button className="h-auto flex items-center gap-2 px-8 py-4 rounded-[52px] bg-[linear-gradient(90deg,rgba(249,189,29,1)_0%,rgba(240,167,0,1)_100%)] text-[#35414a] [font-family:'Raleway-ExtraBold',Helvetica] font-extrabold text-lg">
              <ChevronRight className="w-6 h-6" />
              Teste Grátis
            </Button>

            <Button
              variant="outlined"
              className="hidden lg:block h-auto items-center px-[32px] py-[18px] rounded-[52px] border border-solid border-white text-white [font-family:'Raleway-ExtraBold',Helvetica] font-extrabold text-lg"
            >
              Ver Planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
