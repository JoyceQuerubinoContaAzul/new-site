import Image from "next/image";
import { Container } from "@/components/Container";
import CardFeatures from "./CardFeatures";
import { FeatureProps } from "./types";

export const Feature = ({ data, reverse }: FeatureProps) => {
  return (
    <Container className={`flex flex-wrap justify-center items-center ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <Image
        className="min-w-[648px] max-h-[1034px] object-cover"
        alt="Imagem de demonstração do aplicativo"
        src={data.image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: 'auto' }}
      />
      <CardFeatures 
        title={data.title}
        description={data.description}
        badges={data.badges}
        reverse={reverse}
      />
    </Container>
  );
};

export default Feature;
