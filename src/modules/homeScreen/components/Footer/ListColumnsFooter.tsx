import React from "react";
import About from "./About";
import Solutions from "./Solutions";
import Features from "./Features";
import Learn from "./Learn";
import ContaMais from "./ContaMais";
import { Separator } from "@/components/ui/separator";

export const ListColumnsFooter = () => {
  return (
    <section className="mb-11">
      <div className="flex flex-row gap-8 items-start">
        <div className="flex-1">
          <About />
        </div>
        
        <Separator orientation="vertical" className="h-auto min-h-full bg-border" />

        <div className="flex-1">
          <Solutions />
        </div>
        
        <Separator orientation="vertical" className="h-auto min-h-full bg-border" />

        <div className="flex-1">
          <Features />
        </div>
        
        <Separator orientation="vertical" className="h-auto min-h-full bg-border" />

        <div className="flex-1">
          <Learn />
        </div>
        
        <Separator orientation="vertical" className="h-auto min-h-full bg-border" />

        <div className="flex-1">
          <ContaMais />
        </div>
      </div>
    </section>
  );
};

export default ListColumnsFooter;
