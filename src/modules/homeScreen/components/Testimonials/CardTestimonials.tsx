import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AvatarPNG from "../../../../assets/images/avatar.png";
import { Button } from "@/components/Button";

export const CardTestimonials = ({avatar, name, company, comment}) => {
  return (
    <div className="flex flex-col w-[416px] items-start p-4 rounded-[24px_24px_80px_0px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_100%)] border-none">
      <div className="flex flex-row">
        <Avatar className="w-[63px] h-[63px] bg-white rounded-[51.19px] overflow-hidden border-[3px] border-solid border-[#e6e6e6]">
          <AvatarImage
            className="object-cover"
            alt="Daiane Orige profile picture"
            src={AvatarPNG.src}
          />
          <AvatarFallback className="bg-collection-1-grayscale-light text-collection-1-grayscale-dark font-bold text-lg">
            DO
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col ml-4 items-start justify-center flex-1 grow">
          <h3 className="mt-[-1.00px] [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-azul-ca-base text-[28px] tracking-[-2.00px] leading-7">
           {name}
          </h3>

          <p className="font-paragraph-LG-regular font-[number:var(--paragraph-LG-regular-font-weight)] text-[#595959] text-[length:var(--paragraph-LG-regular-font-size)] tracking-[var(--paragraph-LG-regular-letter-spacing)] leading-[var(--paragraph-LG-regular-line-height)] [font-style:var(--paragraph-LG-regular-font-style)]">
            {company}
          </p>
        </div>
      </div>

      <div className="flex mt-4 mb-4 flex-col items-start gap-4 w-full flex-[0_0_auto]">
        <blockquote className="mt-[-1.00px] [font-family:'Ping_Pong-Bold',Helvetica] font-normal text-collection-1-grayscale-dark text-lg tracking-[0] leading-[23.4px]">
          <span className="font-bold">&quot;Consigo acessar</span>
          <span className="[font-family:'Ping_Pong-Regular',Helvetica]">
            {" "}
            {comment}{" "}
          </span>
          <span className="font-bold">de forma rápida</span>
          <span className="[font-family:'Ping_Pong-Regular',Helvetica]">
            .&quot;
          </span>
        </blockquote>
      </div>

      <Button
        variant="ghost"
        className="inline-flex items-center justify-center gap-[11px] pt-4 pb-0 px-0 h-auto"
        aria-label="Assistir vídeo"
      >
        <img className="w-6 h-6" alt="Play icon" src="/images/play.svg" />
        <span className="[font-family:'Ping_Pong-Regular',Helvetica] font-normal text-blue-ca text-base tracking-[3.00px] leading-4 whitespace-nowrap">
          ASSISTIR
        </span>
      </Button>
    </div>
  );
};

export default CardTestimonials;
