import React from "react";

const footerLinks = [
  { text: "Blog", href: "#" },
  { text: "Materiais", href: "#" },
  { text: "Conta azul na prática", href: "#" },
  { text: "Segurança", href: "#" },
  { text: "Podcasts", href: "#" },
  { text: "Central de ajuda", href: "#" },
];

const channels = [
  { text: "Whatsapp", href: "#" },
  { text: "Telefone", href: "#" },
];

export const Learn = () => {
  return (
    <div className="flex flex-col">
      <h5 className="mb-4 [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-azul-ca-base text-xl tracking-[0] leading-7 whitespace-nowrap">
        Aprenda
      </h5>

      <ul className="w-fit mt-[-1.00px] [font-family:'Ping_Pong-Regular',Helvetica] font-normal text-collection-1-grayscale-dark text-base tracking-[0] leading-8">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:underline focus:outline-none focus:underline"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <h6 className=" mt-8 [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-grayscale-dark text-base tracking-[0] leading-7 whitespace-nowrap">
        Canais de Atendimento
      </h6>

      <ul className="w-fit mt-[-1.00px] [font-family:'Ping_Pong-Regular',Helvetica] font-normal text-collection-1-grayscale-dark text-base tracking-[0] leading-8">
        {channels.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:underline focus:outline-none focus:underline"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
