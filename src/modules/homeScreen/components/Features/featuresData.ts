
import { FeatureData } from "./types";
import phoneImage from "../../../../assets/images/phone.png";
import boletosImage from "../../../../assets/images/boletos.png";
import softwareImage from "../../../../assets/images/software.png";

export const featuresData: FeatureData[] = [
  {
    title: "Cobre, receba e pague em um só lugar",
    description:
      "Receba pagamentos e acompanhe o fluxo de caixa sem precisar ficar abrindo mil aplicativos ou planilhas.",
    image: phoneImage.src,
    badges: [
      {
        text: "Conta PJ",
        icon: "/images/doc-iconsvg.svg",
        iconAlt: "Ícone de documento",
      },
      {
        text: "PIX",
      },
      {
        text: "Boleto Bancário",
      },
      {
        text: "Links de Pagamento",
      },
    ],
  },
  {
    title: "Antecipe os seus boletos e equilibre o seu caixa!",
    description:
      "Escolha recebíveis que você quer antecipar e pronto! Em até 60 segundos o dinheiro cai na conta.",
    image: boletosImage.src,
    badges: [
      {
        text: "Nota Fiscal",
        icon: "/images/doc-iconsvg.svg",
        iconAlt: "Ícone de documento",
      },
      {
        text: "Crédito",
      },
      {
        text: "Serviços financeiros",
      },
    ],
  },
  {
    title: "Mais agilidade e acertos na hora de faturar",
    description:
      "Ganhe tempo e paz. A gente cuida das cobranças e avisa o cliente antes do vencimento.",
    image: softwareImage.src,
    badges: [
      {
        text: "Cobranças Automáticas",
        icon: "/images/doc-iconsvg.svg",
        iconAlt: "Ícone de documento",
      },
      {
        text: "SMS",
      },
      {
        text: "Whatsapp",
      },
      {
        text: "Email",
      },
    ],
  },
];

export const featuresBadge = [
    "Gestão de Vendas e Clientes",
    "Relatórios",
    "Contas a pagar e receber",
    "Conciliação Bancária",
    "Estoque",
    "Contas a pagar e receeber",
    "Contratos Recorrentes",
    "Gestão Financeira",
    "CA de Bolso",
    "Conexão com o contador",
  ];