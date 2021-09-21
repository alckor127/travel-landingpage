import React from "react";
import { CFooter, CLink } from "@coreui/react";

const Footer = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <CLink href="https://nativosdigitales.pe" target="_blank">
          Nativos Digitales
        </CLink>
        <span className="ml-1">&copy; 2021</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <CLink href="https://nativosdigitales.pe" target="_blank">
          nativosdigitales.pe
        </CLink>
      </div>
    </CFooter>
  );
};

export default Footer;
