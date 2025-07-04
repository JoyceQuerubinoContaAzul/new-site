import React from "react";
import { LegalText } from "./LegalText";
import { Container } from "@/components/Container";
import ListColumnsFooter from "./ListColumnsFooter";

export const Footer = () => {
  return (
    <footer className="mt-32 w-full items-center bg-white">
        <Container className="flex flex-col py-32">
            <ListColumnsFooter/>
            <LegalText />
        </Container>
    </footer>
  );
};

export default Footer;
