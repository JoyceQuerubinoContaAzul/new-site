import React from "react";

const footerLinks = [
  { text: "Gestão de Vendas e Clientes", href: "#" },
  { text: "Emissão de Nota Fiscal", href: "#" },
  { text: "Cobrança Automática", href: "#" },
  { text: "Controle de Contratos Recorrentes", href: "#" },
  { text: "Compras e Fornecedores", href: "#" },
  { text: "Estoque e Produtos", href: "#" },
  { text: "Conciliação Bancária", href: "#" },

  { text: "Gestão Financeira", href: "#" },
  { text: "Relatório", href: "#" },
  { text: "Conexão com o contador", href: "#" },
];

export const Features = () => {
  return (
    <div className="flex flex-col">
      <h5 className="mb-4 [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-azul-ca-base text-xl tracking-[0] leading-7 whitespace-nowrap">
        Funcionalidades
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
    </div>
  );
};

export default Features;
