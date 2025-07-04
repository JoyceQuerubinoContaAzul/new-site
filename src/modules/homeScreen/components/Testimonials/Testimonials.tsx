import React from "react";
import { Container } from "@/components/Container";
import CardTestimonials from "./CardTestimonials";
import { Button } from "@/components/Button";

interface TestimonialData {
  id: number;
  avatar: string;
  name: string;
  company: string;
  comment: string;
}

export const Testimonials = () => {
  const testimonialsData: TestimonialData[] = [
    {
      id: 1,
      avatar: "/assets/images/avatar.png",
      name: "Daiane Orige",
      company: "Alle Tecnologia",
      comment: "Consigo acessar o sistema de qualquer lugar de forma rápida."
    },
    {
      id: 2,
      avatar: "/assets/images/avatar.png",
      name: "Carlos Silva",
      company: "TechInova",
      comment: "A plataforma revolucionou nossa gestão financeira e aumentou nossa produtividade."
    },
    {
      id: 3,
      avatar: "/assets/images/avatar.png",
      name: "Maria Santos",
      company: "Digital Solutions",
      comment: "Interface intuitiva e suporte excepcional. Recomendo para todas as empresas."
    }
  ];

  return (
    <section className="w-full bg-[linear-gradient(0deg,rgba(29,52,199,1)_0%,rgba(29,52,199,1)_100%)]">
      <div className="py-32 w-full items-center justify-center bg-[#F1F4F9] rounded-[0px_0px_160px_160px]">
        
        <h1 className="mt-[-1.00px] [font-family:'Raleway-Light',Helvetica] font-normal text-[#2687e9] text-[42px] text-center tracking-[-3.75px] leading-[59.5px]">
          <span className="font-light tracking-[-1.57px]">Confira alguns </span>
          <span className="[font-family:'Raleway-ExtraBold',Helvetica] font-extrabold tracking-[-1.57px]">
            cases de sucesso
          </span>
        </h1>
        <Container className="flex flex-col py-32">
          <div className="flex gap-6 justify-center items-start">
            {testimonialsData.map((testimonial) => (
              <CardTestimonials
                key={testimonial.id}
                avatar={testimonial.avatar}
                name={testimonial.name}
                company={testimonial.company}
                comment={testimonial.comment}
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 pt-[23px] pb-0 px-0 flex-[0_0_auto]">
            <Button
              variant="outlined"
              className="flex items-center justify-center gap-8 px-8 py-[18px] h-auto flex-[0_0_auto] rounded-[52px] border border-solid border-blue-ca"
            >
              <div className="flex items-center gap-[7px] flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] [font-family:'Ping_Pong-XBold',Helvetica] font-bold text-blue-ca text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                  + Depoimentos
                </div>
              </div>
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Testimonials;
