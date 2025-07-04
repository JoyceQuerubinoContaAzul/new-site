import React from "react";

const legalTextData = {
  mainInfo:
    "A Contaazul Instituicao de Pagamento Ltda (47.381.104/0001-57) é uma plataforma digital que atua como correspondente Bancário para o recebimento e pagamento de boletos, contas de consumo e tributos; e para essa finalidade segue as diretrizes da Resolução CMN n° 4.935 de 29/7/2021 do Banco Central do Brasil. Somos correspondentes bancários das seguintes instituições: Banco BTG Pactual SA (30.306.294/0001-45). O Banco BTG Pactual é uma instituição financeira autorizada pelo Banco Central. Para maiores informações sobre seus produtos, acesse o site: ",
  btgLink: {
    text: "BTG Pactual",
    url: "https://www.btgpactual.com/institucional.Para",
  },
  complaintInfo:
    "  reclamações que estejam relacionadas ao recebimento e pagamento de boletos, contas de consumo e tributos, por favor, entre em contato com a Ouvidoria do Banco BTG Pactual S/A no telefone nº ",
  phoneLink: {
    text: "0800-722-0048",
    url: "tel:08007220048",
  },
  otherServices:
    ". Caso o problema esteja relacionado a outros produtos ou serviços oferecidos pela CONTA AZUL, por favor, entre em contato com a Ouvidoria Conta Azul pelo email ",
  emailLink: {
    text: "ouvidoria@contaazul.com",
    url: "mailto:ouvidoria@contaazul.com",
  },
  hours: ". Atendimento de segunda à sexta das 09h às 18hs. ",
};

export const LegalText = () => {
  return (
      <section className="flex flex-col items-start justify-center gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[1296px] items-center relative flex-[0_0_auto]">
            <p className="relative w-[1296px] mt-[-1.00px] [font-family:'Ping_Pong-Regular',Helvetica] font-normal text-collection-1-grayscale-dark text-xs tracking-[0] leading-[15.6px]">
              <span className="[font-family:'Ping_Pong-Regular',Helvetica] font-normal text-[#595959] text-xs tracking-[0] leading-[15.6px]">
                {legalTextData.mainInfo}
              </span>

              <a
                href={legalTextData.btgLink.url}
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                {legalTextData.btgLink.text}
              </a>

              <span className="[font-family:'Ping_Pong-Regular',Helvetica] font-normal text-[#595959] text-xs tracking-[0] leading-[15.6px]">
                {legalTextData.complaintInfo}
              </span>

              <a
                href={legalTextData.phoneLink.url}
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                {legalTextData.phoneLink.text}
              </a>

              <span className="[font-family:'Ping_Pong-Regular',Helvetica] font-normal text-[#595959] text-xs tracking-[0] leading-[15.6px]">
                {legalTextData.otherServices}
              </span>

              <a
                href={legalTextData.emailLink.url}
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                {legalTextData.emailLink.text}
              </a>

              <span className="[font-family:'Ping_Pong-Regular',Helvetica] font-normal text-[#595959] text-xs tracking-[0] leading-[15.6px]">
                {legalTextData.hours}
              </span>
            </p>
          </div>
        </div>
    </section>
  );
};
