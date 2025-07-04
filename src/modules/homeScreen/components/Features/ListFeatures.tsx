import React from "react";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import { featuresBadge } from "./featuresData";
import { Container } from "@/components/Container";
import PulseLogo from "../../../../assets/images/conta-azul-pulse.png";

export default function ListFeatures() {
  return (
    <Container className="items-center flex-col">
      <Image
        className="object-cover"
        alt="Imagem de demonstração do aplicativo"
        src={PulseLogo}
        width={140}
        height={140}
      />

      <h2 className="mt-9 [font-family:'Raleway-Light',Helvetica] font-normal text-[#2687e9] text-5xl text-center tracking-[-3.75px] leading-[59.5px]">
        <span className="font-light tracking-[-1.80px]">Confira todas </span>
        <span className="[font-family:'Raleway-ExtraBold',Helvetica] font-extrabold tracking-[-1.80px]">
          Funcionalidades
        </span>
        <span className="font-light tracking-[-1.80px]">&nbsp;</span>
      </h2>

      <div className="mt-11 flex flex-wrap items-start justify-center gap-[22px_12px] pt-1.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        {featuresBadge.map((feature, index) => (
          <Badge
            key={index + 1}
            variant="outline"
            text={feature}
            className="w-auto self-start border border-gray-300"
          />
        ))}
      </div>
    </Container>
  );
}
