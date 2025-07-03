// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import image88 from "../../../assets/images/image88.png";

import { Button } from "@/components/Button";
import { ChevronRight } from "lucide-react";


export default function Hero() {
  return (
    <div className="inline-flex flex-col h-[675px] items-start gap-2 relative rounded-[0px_0px_180px_40px] overflow-hidden">
      <div className="relative w-[1672px] h-[798px] bg-[#246ab0]">
        <Image
          className="absolute w-[1672px] h-[675px] top-0 left-0 object-cover"
          alt="People collaborating on financial management"
          src={image88}
          fill
        />

        <div className="absolute top-[277px] left-[72px] max-w-[741px]">
          <h1>
            <span className="block w-[733px] [font-family:'Raleway-Light',Helvetica] font-light text-white text-[64px] tracking-[-4.00px] leading-[56.4px]">
              Juntos,
            </span>
            <span className="block w-[733px] [font-family:'Raleway-ExtraBold',Helvetica] font-extrabold text-white text-[64px] tracking-[-4.00px] leading-[63.4px]">
              a gente dá conta
            </span>
            <span className="block w-[733px] mt-[10px] [font-family:'Raleway-Light',Helvetica] font-light text-white text-[52px] tracking-[-4.00px] leading-[56.4px]">
              do seu controle financeiro.
            </span>
          </h1>
          <p className="mt-[4px] font-paragraph-LG-medium font-[number:var(--paragraph-LG-medium-font-weight)] text-white text-[length:var(--paragraph-LG-medium-font-size)] tracking-[var(--paragraph-LG-medium-letter-spacing)] leading-[var(--paragraph-LG-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-LG-medium-font-style)]">
            Seu negócio organizado. Sua operação no controle. Seu tempo de
            volta.
          </p>
        </div>

        <div className="absolute top-[541px] left-[72px] flex items-start gap-[18px] pt-3">
          <Button className="h-auto flex items-center gap-[7px] px-8 py-[18px] rounded-[52px] bg-[linear-gradient(90deg,rgba(249,189,29,1)_0%,rgba(240,167,0,1)_100%)] text-[#35414a] [font-family:'Raleway-ExtraBold',Helvetica] font-extrabold text-lg">
            <ChevronRight className="w-6 h-6" />
            Teste Grátis
          </Button>

          <Button
            variant="outlined"
            className="h-auto flex items-center px-[32px] py-[18px] rounded-[52px] border border-solid border-white text-white [font-family:'Raleway-ExtraBold',Helvetica] font-extrabold text-lg"
          >
            Ver Planos
          </Button>
        </div>
      </div>
    </div>
  );
}


