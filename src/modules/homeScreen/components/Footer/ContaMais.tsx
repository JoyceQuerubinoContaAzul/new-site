import React from "react";
import Image from "next/image";
const Instagram = "/images/instagram.svg";
const Linkedin = "/images/linkedin.svg";
const Youtube = "/images/youtube.svg";
const Facebook = "/images/facebook.svg";

const Aws = "/images/aws-icon.svg";
const Godaddy = "/images/godaddy-icon.svg";

const appDownloads = [
  {
    alt: "Go to Instagram",
    title: "Instagram",
    src: Instagram,
    href: "#",
  },
  {
    alt: "Go to Linkedin",
    title: "Linkedin",
    src: Linkedin,
    href: "#",
  },
  {
    alt: "Go to Youtube",
    title: "Youtube",
    src: Youtube,
    href: "#",
  },
  {
    alt: "Go to Facebook",
    title: "Facebook",
    src: Facebook,
    href: "#",
  },
];

const certificates = [
  {
    alt: "Aws Certificate",
    src: Aws,
    href: "#",
  },
  {
    alt: "Godaddy Certificate",
    src: Godaddy,
    href: "#",
  },
];

export const ContaMais = () => {
  return (
    <div className="flex flex-col">
      <h5 className="mb-4 [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-azul-ca-base text-xl tracking-[0] leading-7 whitespace-nowrap">
        Conta Mais
      </h5>

      <div className="flex flex-col gap-4 mt-4">
        {appDownloads.map((app, index) => (
          <a key={index} href={app.href} className="flex flex-row items-center">
            <Image
              className="object-cover"
              alt={app.alt}
              src={app.src}
              width={24}
              height={24}
            />
             <span className="ml-1.5 [font-family:'Ping_Pong-Regular',Helvetica] font-normal text-[#595959] text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
              {app.title}
            </span>
          </a>
        ))}
      </div>

      <h6 className=" mt-4 [font-family:'Ping_Pong-Bold',Helvetica] font-bold text-collection-1-grayscale-dark text-base tracking-[0] leading-7 whitespace-nowrap">
        Certificados
      </h6>

      <div className="flex flex-col gap-4 mt-4">
        {certificates.map((app, index) => (
          <a key={index} href={app.href} className="block">
            <Image
              className="object-cover"
              alt={app.alt}
              src={app.src}
              width={102}
              height={36}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContaMais;
