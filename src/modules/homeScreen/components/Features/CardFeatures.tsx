import { Badge } from "@/components/Badge";
import React from "react";
import { CardFeaturesProps } from "./types";

export default function CardFeatures({ title, description, badges, reverse }: CardFeaturesProps) {
  const [firstBadge, ...otherBadges] = badges;
  
  const borderRadius = reverse 
    ? "rounded-[40px_160px_40px_0px]" 
    : "rounded-[40px_40px_160px_0px]";

  return (
    <div className={`flex flex-col max-w-[588px] items-start gap-2 p-10 relative bg-white ${borderRadius} overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.6)_0%,rgba(218,232,255,0.6)_100%)]`}>
      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] border-none bg-transparent">

        {firstBadge && (
          <Badge
            variant="solid"
            text={firstBadge.text}
            icon={firstBadge.icon}
            iconAlt={firstBadge.iconAlt || "Ícone"}
            iconSize={32}
          />
        )}
        
        <div className="flex flex-col mb-6 max-w-[532px]">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            {title}
          </h2>
          <p className="text-lg lg:mt-4 text-gray-600">{description}</p>
        </div>
        
        {otherBadges.length > 0 && (
          <div className="flex flex-col gap-4">
            {otherBadges.map((badge, index) => (
              <Badge
                key={index + 1}
                variant="outline"
                text={badge.text}
                className="w-auto self-start border border-gray-300"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
