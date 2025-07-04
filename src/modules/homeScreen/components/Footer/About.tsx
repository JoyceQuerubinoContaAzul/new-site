import React from "react";
import Image from "next/image";
const appleStore = "/images/apple-icon.svg";
const googleStore = "/images/google-store-icon.svg";

const footerLinks = [
  { text: "Planos", href: "#" },
  { text: "Imprensa", href: "#" },
  { text: "Trabalhe conosco", href: "#" },
  { text: "Ouvidoria", href: "#" },
  { text: "Termos de Uso", href: "#" },
  { text: "Política de privacidade", href: "#" },
];

const appDownloads = [
  {
    alt: "Download on App Store",
    src: appleStore,
    href: "#",
  },
  {
    alt: "Get it on Google Play",
    src: googleStore,
    href: "#",
  },
];

export const AboutColumn = () => {
  return (
    <div className="flex flex-col">
      <h5 className="mb-4 [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-azul-ca-base text-xl tracking-[0] leading-7 whitespace-nowrap">
        Conta Azul
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

      <h6 className=" mt-4 [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-grayscale-dark text-base tracking-[0] leading-7 whitespace-nowrap">
        Baixe nossos APPS
      </h6>

      <div className="flex flex-col gap-4 mt-4">
        {appDownloads.map((app, index) => (
          <a key={index} href={app.href} className="block">
            <Image
              className="object-cover"
              alt={app.alt}
              src={app.src}
              width={107}
              height={32}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutColumn;
