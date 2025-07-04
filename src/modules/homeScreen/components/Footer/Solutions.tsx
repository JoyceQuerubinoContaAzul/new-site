import React from "react";

const footerLinks = [
  { text: "Comércio Online", href: "#" },
  { text: "Educação", href: "#" },
  { text: "Lojas Físicas", href: "#" },
  { text: "Saúde", href: "#" },
  { text: "Serviços", href: "#" },
  { text: "Tecnologia", href: "#" },
  { text: "Terceiro Setor", href: "#" },
];

const partnes = [
  { text: "Seja um parceito", href: "#" },
];

export const Solutions = () => {
  return (
    <div className="flex flex-col">
      <h5 className="mb-4 [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-azul-ca-base text-xl tracking-[0] leading-7 whitespace-nowrap">
        Soluções
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
        Para parceiros
      </h6>

      <ul className="w-fit mt-[-1.00px] [font-family:'Ping_Pong-Regular',Helvetica] font-normal text-collection-1-grayscale-dark text-base tracking-[0] leading-8">
        {partnes.map((link, index) => (
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

export default Solutions;
