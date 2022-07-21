import React from "react";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemsStyles = styled.div`
  padding: 5rem 0;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  .services__allItems {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    margin-top: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="DDK-GROUP" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Tache et Fonction"
            desc="L'ingénieur en génie civil est un ingénieur spécialisé dans la
            conception et la construction de bâtiments, structures et
            infrastructures dans le domaine civil. Il réalise des ouvrages
            civils publics et privés, des infrastructures stratégiquess."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Nos Metiers"
            desc=" Chef de chantier, Conducteur de travaux, Géomètre, Technicien en
            bureau d'études, Dessinateur en bâtiment, Métreur, Attaché
            commercial, Chef de projets, Ingénieur génie civil, Economiste de
            la construction."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Role"
            desc=" Chef de chantier, Conducteur de travaux, Géomètre, Technicien en
            bureau d'études, Dessinateur en bâtiment, Métreur, Attaché
            commercial, Chef de projets, Ingénieur génie civil, Economiste de
            la construction. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
