import React from "react";
import Icon1 from "../../images/pexels4.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Notre Service</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon img={Icon1} />
            <ServicesH2>Tache et Fonction</ServicesH2>
            <ServicesP>
              L'ingénieur en génie civil est un ingénieur spécialisé dans la
              conception et la construction de bâtiments, structures et
              infrastructures dans le domaine civil. Il réalise des ouvrages
              civils publics et privés, des infrastructures stratégiquess.{" "}
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon img={Icon1} />
            <ServicesH2>Nos Metiers</ServicesH2>
            <ServicesP>
              Chef de chantier, Conducteur de travaux, Géomètre, Technicien en
              bureau d'études, Dessinateur en bâtiment, Métreur, Attaché
              commercial, Chef de projets, Ingénieur génie civil, Economiste de
              la construction.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon img={Icon1} />
            <ServicesH2>Role</ServicesH2>
            <ServicesP>
              Chef de chantier, Conducteur de travaux, Géomètre, Technicien en
              bureau d'études, Dessinateur en bâtiment, Métreur, Attaché
              commercial, Chef de projets, Ingénieur génie civil, Economiste de
              la construction.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
